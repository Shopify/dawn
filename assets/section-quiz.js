(() => {
  const handleize = (s) =>
    (s || '')
      .toString()
      .toLowerCase()
      .normalize?.('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

  class QuestionEl extends HTMLElement {
    connectedCallback() {
      this.nextBtn = this.querySelector('.question__next');
      this.errorBox = this.querySelector('.quiz__error');
      this.radios = Array.from(this.querySelectorAll('input[type="radio"]'));
      this.nextBtn?.addEventListener('click', () => {
        const checked = this.radios.find((r) => r.checked);
        if (!checked) {
          const quiz = this.closest('quiz-form');
          const msg = quiz?.dataset.errorMessage || 'Please select an answer to continue.';
          if (this.errorBox) this.errorBox.textContent = msg;
          this.dispatchEvent(new CustomEvent('question-error', { bubbles: true }));
          return;
        }
        if (this.errorBox) this.errorBox.textContent = '';
        this.dispatchEvent(
          new CustomEvent('question-next', {
            bubbles: true,
            detail: { tag: handleize(checked.value) },
          })
        );
      });
    }
  }
  if (!customElements.get('quiz-question')) {
    customElements.define('quiz-question', QuestionEl);
  }

  class QuizEl extends HTMLElement {
    connectedCallback() {
      this.questions = Array.from(this.querySelectorAll('quiz-question'));
      this.finalEl = this.querySelector('.quiz__final');
      this.resultsLink = this.querySelector('.quiz__results-link');
      this.resultsBox = this.querySelector('.quiz__results');

      this.collectionPath = this.dataset.collectionPath || '/collections/all';
      this.inline = String(this.dataset.inlineResults) === 'true';
      this.sectionHandle = this.dataset.productGridHandle || 'main-collection-product-grid';

      this.current = 0;
      this.selectedTags = new Array(this.questions.length).fill(null);

      this.questions.forEach((q, i) => q.toggleAttribute('hidden', i !== 0));

      this.addEventListener('question-next', (ev) => {
        const fromIndex = this.questions.indexOf(ev.target);
        const tag = ev.detail?.tag || null;
        if (fromIndex >= 0) this.selectedTags[fromIndex] = tag;

        if (fromIndex < this.questions.length - 1) {
          this.goto(fromIndex + 1);
        } else {
          this.finish();
        }
      });
    }

    goto(i) {
      this.questions.forEach((q, idx) => q.toggleAttribute('hidden', idx !== i));
      this.current = i;
      this.scrollIntoView?.({ behavior: 'smooth', block: 'center' });
    }

    buildTagsPath() {
      const tags = this.selectedTags.filter(Boolean).map(handleize).filter(Boolean);
      return tags.length ? '/' + tags.join('+') : '';
    }

    finish() {
      this.questions.forEach((q) => q.setAttribute('hidden', ''));
      this.finalEl?.removeAttribute('hidden');

      const url = this.collectionPath + this.buildTagsPath();
      if (this.resultsLink) {
        this.resultsLink.href = url;
        this.resultsLink.textContent = this.dataset.resultsLabel || 'See results';
      }
      if (this.inline && this.resultsBox) this.loadInlineResults(url);
    }

    async loadInlineResults(urlBase) {
      try {
        this.resultsBox.dataset.state = 'loading';
        this.resultsBox.innerHTML = '';
        const url = `${urlBase}?sections=${encodeURIComponent(this.sectionHandle)}`;
        const res = await fetch(url, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
        const text = await res.text();
        let html = '';
        try {
          const json = JSON.parse(text);
          html = json[this.sectionHandle] || Object.values(json)[0] || '';
        } catch {
          html = text;
        }
        if (!html || !html.trim()) {
          this.resultsBox.innerHTML = `<p>No products found for selected tags.</p>`;
        } else {
          const tmp = document.createElement('div');
          tmp.innerHTML = html;
          const grid = tmp.querySelector('[data-section-id], .collection, .collection-grid, .product-grid') || tmp;
          this.resultsBox.innerHTML = grid.outerHTML || grid.innerHTML || html;
        }
      } catch {
        this.resultsBox.innerHTML = `<p>Could not load results. Please use the button above.</p>`;
      } finally {
        this.resultsBox.dataset.state = 'idle';
      }
    }
  }
  if (!customElements.get('quiz-form')) {
    customElements.define('quiz-form', QuizEl);
  }
})();

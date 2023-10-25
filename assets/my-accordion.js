class MyAccordion extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<style>
      .accordion {
        transition: 0.4s;
      }

      .panel {
        transition: max-height 0.2s ease-out;
        overflow: hidden;
        max-height: 0;
      }

      .panel.show {
        max-height: 500px; /* Quick fix: hardcode the approximate expanded panel's total height including the children panels and text */
      }
    </style>` + this.innerHTML;

    let acc = this.querySelectorAll(".accordion");
    acc.forEach((el) => {
      const icon = el.querySelector('.mdi');

      el.addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
          icon.classList.remove('mdi-chevron-down');
          icon.classList.add('mdi-chevron-right');
          panel.style.maxHeight = null;
          panel.classList.remove('show');
        } else {
          icon.classList.remove('mdi-chevron-right');
          icon.classList.add('mdi-chevron-down');
          // Temporarily expand the panel to calculate the maximum height
          panel.style.maxHeight = 'none';
          let expandedHeight = panel.scrollHeight;

          // If the parent Node is also a panel, increase its max height to accommodate this panel
          if (panel.parentNode.classList.contains('panel')) {
            panel.parentNode.style.maxHeight = `${panel.parentNode.scrollHeight + expandedHeight}px`;
          }

          // Reset and then set the max-height
          panel.style.maxHeight = null;
          window.getComputedStyle(panel).maxHeight; // Force a reflow
          panel.style.maxHeight = `${expandedHeight}px`;
          panel.classList.add('show');
        }
      });
    });
  }
}

customElements.define('my-accordion', MyAccordion);

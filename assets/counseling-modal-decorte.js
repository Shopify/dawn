class MyDialog extends HTMLElement {

  constructor() {
    super();
    this.activePageIndex = 0;
    this.dialog = this.querySelector('dialog');
    dialogPolyfill.registerDialog(this.dialog);
    this.pages = this.querySelectorAll('.page');
    this.closeButtons = this.querySelectorAll('.close-button');
    this.nextPageButton = this.querySelector('.next-page');
    this.radioButtons = this.querySelectorAll('input[type="radio"]');
    this.counselingResult = this.querySelectorAll('.counseling-result');
    this.nextPageDisableButton = this.querySelector('.next-page-disable');
    this.submitButtons = this.querySelectorAll('button[type="submit"]');
  }

  connectedCallback() {
    this.dialog.addEventListener('click', (event) => {
      if (event.target === this.dialog) {
        this.dialog.close();
      }
    });

    this.submitButtons.forEach(submitButton => {
      submitButton.addEventListener('click', () => {
        this.dialog.close();
      });
    });

    this.closeButtons.forEach(closeButton => {
      closeButton.addEventListener('click', () => {
        this.dialog.close();
      });
    });

    this.nextPageButton.addEventListener('click', () => {
      this.nextPage();
    });

    this.pages[this.activePageIndex].classList.add('active');

    Array.from(this.radioButtons).forEach(radioButton => {
      radioButton.addEventListener('change', () => {
        this.checkNextButtonActive();
      });
    });
  }

  checkNextButtonActive() {
    // Assuming all questions have 2 choices, each question must have at least 1 selected
    let radioGroup1 = Array.from(this.querySelectorAll('input[name="q1"]')).some(radio => radio.checked);
    let radioGroup2 = Array.from(this.querySelectorAll('input[name="q2"]')).some(radio => radio.checked);
    let radioGroup3 = Array.from(this.querySelectorAll('input[name="q3"]')).some(radio => radio.checked);
    if(radioGroup1 && radioGroup2 && radioGroup3) {
      this.nextPageDisableButton.style.display = 'none';
      this.nextPageButton.style.display = 'block';
    } else {
      this.nextPageButton.style.display = 'none';
      this.nextPageDisableButton.style.display = 'block';
    }
  }

  openDialog() {
    this.dialog.showModal();
  }

  nextPage() {
    if(this.activePageIndex + 1 < this.pages.length) {
      this.updateSecondPage();
      this.pages[this.activePageIndex].classList.remove('active');
      this.activePageIndex++;
      this.pages[this.activePageIndex].classList.add('active');
    }
  }

  updateSecondPage() {
    if(this.radioButtons[1].checked && this.radioButtons[3].checked && this.radioButtons[5].checked) {
      this.counselingResult[0].classList.add('active');
    } else if(this.radioButtons[1].checked && (this.radioButtons[2].checked || this.radioButtons[4].checked)) {
      this.counselingResult[1].classList.add('active');
    } else {
      this.counselingResult[2].classList.add('active');
    }
  }
}

customElements.define('my-dialog', MyDialog);

const allButtons = Array.from(document.querySelectorAll('button[type="button"]'));
allButtons.filter(button => button.id.includes('ProductSubmitButton')).forEach(targetedButton => {
  console.log('targetedButton', targetedButton)
  targetedButton.addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('my-dialog').openDialog();
  });
});

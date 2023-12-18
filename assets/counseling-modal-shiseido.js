class MyDialog extends HTMLElement {

  constructor() {
    super();
    this.activePageIndex = 0;
    this.dialog = this.querySelector('dialog');
    dialogPolyfill.registerDialog(this.dialog);
    this.pages = this.querySelectorAll('.page');
    this.closeButtons = this.querySelectorAll('.close-button');
    this.nextPageButtons = this.querySelectorAll('.next-page');
    this.radioButtons = this.querySelectorAll('input[type="radio"]');
    this.counselingResult = this.querySelectorAll('.counseling-result');
    this.nextPageDisableButtons = this.querySelectorAll('.next-page-disable');
    this.submitButtons = this.querySelectorAll('button[type="submit"]');
    this.q1_1 = this.querySelector('.q1_1');
    this.retryCounselingButton = this.querySelector('.retry-counseling');
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

    this.nextPageButtons.forEach(nextPageButton => {
      nextPageButton.addEventListener('click', () => {
        this.nextPage();
      });
    });

    this.pages[this.activePageIndex].classList.add('active');

    Array.from(this.radioButtons).forEach(radioButton => {
      radioButton.addEventListener('change', () => {
        this.checkNextButtonActive();
      });
    });

    this.retryCounselingButton.addEventListener('click', () => {
      this.retryCounseling();
    });
  }

  checkNextButtonActive() {
    // Assuming all questions have 2 choices, each question must have at least 1 selected
    let radioGroup1 = Array.from(this.querySelectorAll('input[name="q1"]')).some(radio => radio.checked);
    let radioGroup2 = Array.from(this.querySelectorAll('input[name="q2"]')).some(radio => radio.checked);
    let radioGroup3 = Array.from(this.querySelectorAll('input[name="q3"]')).some(radio => radio.checked);
    if (this.radioButtons[0].checked) {
      // q1_1のtw-hiddenクラスを削除
      this.q1_1.classList.remove('tw-hidden');
      if(radioGroup1 && radioGroup2) {
        this.nextPageDisableButtons[0].style.display = 'none';
        this.nextPageButtons[0].style.display = 'block';
      } else {
        this.nextPageButtons[0].style.display = 'none';
        this.nextPageDisableButtons[0].style.display = 'block';
      }

      if(radioGroup1 && radioGroup2 && radioGroup3) {
        this.nextPageDisableButtons[1].style.display = 'none';
        this.nextPageButtons[1].style.display = 'block';
      } else {
        this.nextPageButtons[1].style.display = 'none';
        this.nextPageDisableButtons[1].style.display = 'block';
      }
    } else {
      // q1_1のtw-hiddenクラスを追加
      this.q1_1.classList.add('tw-hidden');
      if(radioGroup1) {
        this.nextPageDisableButtons[0].style.display = 'none';
        this.nextPageButtons[0].style.display = 'block';
      } else {
        this.nextPageButtons[0].style.display = 'none';
        this.nextPageDisableButtons[0].style.display = 'block';
      }
      if(radioGroup1 && radioGroup3) {
        this.nextPageDisableButtons[1].style.display = 'none';
        this.nextPageButtons[1].style.display = 'block';
      } else {
        this.nextPageButtons[1].style.display = 'none';
        this.nextPageDisableButtons[1].style.display = 'block';
      }
    }
  }

  retryCounseling() {
    this.pages[this.activePageIndex].classList.remove('active');
    this.activePageIndex = 0;
    this.pages[this.activePageIndex].classList.add('active');
    this.radioButtons.forEach(radioButton => {
      radioButton.checked = false;
    });
    this.counselingResult.forEach(counselingResult => {
      counselingResult.classList.remove('active');
    });
    this.checkNextButtonActive();
  }

  openDialog() {
    this.dialog.showModal();
  }

  nextPage() {
    if(this.activePageIndex + 1 < this.pages.length) {
      this.pages[this.activePageIndex].classList.remove('active');
      this.activePageIndex++;
      this.pages[this.activePageIndex].classList.add('active');
    }
    if(this.activePageIndex === 2) {
      this.updateLastPage();
    }
  }

  updateLastPage() {
    if(this.radioButtons[1].checked && this.radioButtons[5].checked) {
      this.counselingResult[0].classList.add('active');
    } else if(this.radioButtons[0].checked && this.radioButtons[3].checked) {
      this.counselingResult[1].classList.add('active');
    } else {
      this.counselingResult[2].classList.add('active');
    }
  }
}

customElements.define('my-dialog', MyDialog);

// TODO:: 以下の処理を適切な形にリファクタリング
let counter = 0;
const maxIterations = 10;
const interval = setInterval(() => {
  console.log(counter);
  const allButtons = Array.from(document.querySelectorAll('button[type="button"]'));
  allButtons.filter(button => button.id.includes('ProductSubmitButton')).forEach(targetedButton => {
    targetedButton.addEventListener('click', () => {
      document.querySelector('my-dialog').openDialog();
    });
  });
  if (allButtons.filter(button => button.id.includes('ProductSubmitButton')).length >= 2) {
    clearInterval(interval);
  }
  if (counter >= maxIterations) {
    clearInterval(interval);
  }
  counter++;
}, 500);
// const allButtons = Array.from(document.querySelectorAll('button[type="button"]'));
// allButtons.filter(button => button.id.includes('ProductSubmitButton')).forEach(targetedButton => {
//   targetedButton.addEventListener('click', () => {
//     document.querySelector('my-dialog').openDialog();
//   });
// });

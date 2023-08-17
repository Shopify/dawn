function waitForElementToExist(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  });
}

function initializeOkendoRatingStars() {
  waitForElementToExist('.oke-stars-foreground').then((element) => {
    if (element.style.width === '0%') {
      element.style.width = '100%';
    }
  });
}

document.addEventListener('DOMContentLoaded', initializeOkendoRatingStars);

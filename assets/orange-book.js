const url = 'https://cdn.shopify.com/s/files/1/0943/5250/7206/files/Orange_Book_-_Preview.pdf?v=1751449232';

const swiperWrapper = document.getElementById('swiper-wrapper');

let pdfDoc = null;

// Initialize Swiper (after slides are added)
let swiper;

// Load PDF
pdfjsLib.getDocument(url).promise.then((pdf) => {
  pdfDoc = pdf;

  // For each page, create a slide and render the page in a canvas
  for (let i = 1; i <= pdf.numPages; i++) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    // Create canvas for each page
    const canvas = document.createElement('canvas');
    slide.appendChild(canvas);

    swiperWrapper.appendChild(slide);

    // Render page inside the canvas
    pdf.getPage(i).then((page) => {
      const viewport = page.getViewport({ scale: 1.5 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: canvas.getContext('2d'),
        viewport: viewport,
      };

      page.render(renderContext);
    });
  }

  // After adding all slides, initialize Swiper
  swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

swiperWrapper.addEventListener('click', () => {
  swiper.slideNext();
});

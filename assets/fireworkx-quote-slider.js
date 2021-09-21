var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Get collections 

async function fetchData() {
    const response = await fetch('http://127.0.0.1:9292/collections.json');
    const result = await response.json();
    const data = result.collections;

    const canopies = data.filter(collection => collection.title.includes('Canopies'))

    const accessories = data.filter(collection => collection.title)

    console.log(canopies)
  }

  fetchData()

//   console.log()
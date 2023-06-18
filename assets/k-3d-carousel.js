// Slideshow style interval
var autoSwap = setInterval(() => { swap('clockwise') }, 3500);

// Pause slideshow and reinstantiate on mouseout
const gallery = document.querySelector('.gallery');

gallery.addEventListener('mouseenter', function() {
  clearInterval(autoSwap);
});

gallery.addEventListener('mouseleave', function() {
  autoSwap = setInterval(() => { swap('clockwise') }, 3500);
});

//global variables
var galleryItems = document.querySelectorAll('.gallery .gallery-item');

function swap(action) {
  var direction = action;
  
  //moving carousel backwards
  if (direction === 'counter-clockwise') {
      var items = galleryItems;
      var mainPosItem = document.querySelector('.main-pos');
      var rightPosItem = document.querySelector('.right-pos');
      var leftPosItem = document.querySelector('.left-pos');
    
      // Move classes to previous items
      mainPosItem.classList.remove('main-pos');
      rightPosItem.classList.remove('right-pos');
      leftPosItem.classList.remove('left-pos');
    
      var mainPosIndex = Array.from(items).indexOf(mainPosItem);
      var rightPosIndex = Array.from(items).indexOf(rightPosItem);
      var leftPosIndex = Array.from(items).indexOf(leftPosItem);
    
      var prevMainPosIndex = leftPosIndex;
      var prevRightPosIndex = (rightPosIndex - 1 + items.length) % items.length;
      var prevLeftPosIndex = (leftPosIndex - 1 + items.length) % items.length;
    
      
      items.forEach(e=> {
        e.classList.add('back-pos')
      })
      
      items[prevMainPosIndex].classList.remove('back-pos');
      items[prevRightPosIndex].classList.remove('back-pos');
      items[prevLeftPosIndex].classList.remove('back-pos');
    
      items[prevMainPosIndex].classList.add('main-pos');
      items[prevRightPosIndex].classList.add('right-pos');
      items[prevLeftPosIndex].classList.add('left-pos');
  }
  
  //moving carousel forward
  if (direction === 'clockwise' || direction === '' || direction === null) {
      var items = galleryItems;
      var mainPosItem = document.querySelector('.main-pos');
      var rightPosItem = document.querySelector('.right-pos');
      var leftPosItem = document.querySelector('.left-pos');
    
      // Move classes to next items
      mainPosItem.classList.remove('main-pos');
      rightPosItem.classList.remove('right-pos');
      leftPosItem.classList.remove('left-pos');
    
      var mainPosIndex = Array.from(items).indexOf(mainPosItem);
      var rightPosIndex = Array.from(items).indexOf(rightPosItem);
      var leftPosIndex = Array.from(items).indexOf(leftPosItem);
    
      var nextMainPosIndex = rightPosIndex;
      var nextRightPosIndex = (rightPosIndex + 1) % items.length;
      var nextLeftPosIndex = mainPosIndex;
    
      
      items.forEach(e=> {
        e.classList.add('back-pos')
      })

      items[nextMainPosIndex].classList.remove('back-pos')
      items[nextRightPosIndex].classList.remove('back-pos')
      items[nextLeftPosIndex].classList.remove('back-pos')


      items[nextMainPosIndex].classList.add('main-pos');
      items[nextRightPosIndex].classList.add('right-pos');
      items[nextLeftPosIndex].classList.add('left-pos');

  }
}

//if any visible items are clicked
galleryItems.forEach(function(item) {
  item.addEventListener('click', function() {
    if (item.classList.contains('left-pos')) {
      swap('counter-clockwise');
    } else {
      swap('clockwise');
    }
  });
});
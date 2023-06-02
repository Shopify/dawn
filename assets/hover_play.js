document.addEventListener('DOMContentLoaded', function() {
  const iframes = document.getElementsByClassName('xcp-multicolumn__video');
  Array.from(iframes).forEach(iframe => {
    const player = new Vimeo.Player(iframe);

    iframe.addEventListener('mouseenter', function() {
      player.play()
    })
    iframe.addEventListener('mouseleave', function() {
      player.pause()
    })
  })
})

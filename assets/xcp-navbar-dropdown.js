document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.xcp-navbar__menu-item--desktop.toggle-dropdown')

  Array.from(dropdowns).forEach((d) =>{
    d.addEventListener('click', function() {
      const target = document.getElementById(d.dataset.target)
      target.classList.toggle('hide')
    })
  })

  const dropdownsMobile = document.querySelectorAll('.xcp-navbar__menu-item.toggle-dropdown')
  Array.from(dropdownsMobile).forEach((d) =>{
    const chevronWrappers = d.querySelectorAll('p span.xcp-navbar-item-dropdown__menu-button')
    d.addEventListener('click', function() {
      const target = document.getElementById(d.dataset.target)
      target.classList.toggle('hide')
      Array.from(chevronWrappers).forEach(cw => {
        cw.classList.toggle('hide')
      })
    })
  })
})

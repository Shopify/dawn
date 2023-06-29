window.PositionColumns = function(id) {
  const target = document.getElementById(`columns-position-${id}`).children[0]
  const columns = document.getElementsByClassName('inv-column')

  Array.from(columns).forEach(col => {
    col.remove()
    target.append(col)
  })

  const mobileColumns = document.querySelectorAll('.inv-column[data-show-on-mobile="true"]')
  const mediaQueryMatch = window.matchMedia('(max-width: 1200px)')

  const setComparison = (mobile) => {
    const arrMobileColumns = Array.from(mobileColumns)
    const moreThanTwoColumns = arrMobileColumns.length > 2
    const wrapper = arrMobileColumns[0].parentNode

    if (mobileColumns && mobileColumns.length > 0) {
      if (mobile) {
        Array.from(arrMobileColumns).forEach(col => {
          if (moreThanTwoColumns) {
            wrapper.style.width = `${ arrMobileColumns.length * 50}%`
          } else {
            wrapper.style.width = "100%"
            wrapper.style.justifyContent = "space-around"
            col.style.marginRight = 0
          }
        })
      } else {
        wrapper.style.removeProperty('width')
        wrapper.style.removeProperty('justifyContent')
        wrapper.style.removeProperty('marginRight')
      }
    } 
  }

  const displayColumns = (matches) => {
    if (matches) {
      Array.from(mobileColumns).forEach(col => {
        col.style.display = 'block'
      })
      const nonMobileColumns = document.querySelectorAll('.inv-column[data-show-on-mobile="false"]')
      Array.from(nonMobileColumns).forEach(col => {
        col.style.display = 'none'
      })
    } else {
      Array.from(columns).forEach(col => {
        col.style.display = 'block'
      })
    }
  }

  const mediaListener = (event) => {
    setComparison(event.matches)
    displayColumns(event.matches)
  }
  setComparison(mediaQueryMatch.matches)
  displayColumns(mediaQueryMatch.matches)
  mediaQueryMatch.addListener(mediaListener)
}

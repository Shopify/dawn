import { toRefs, computed } from 'composition-api'

export default function useKeyboard (props, context, dep)
{
  const {
      mode, addTagOn, openDirection, searchable,
      showOptions, valueProp, groups: groupped,
      addOptionOn: addOptionOn_, createTag, createOption: createOption_,
    } = toRefs(props)

  // ============ DEPENDENCIES ============

  const iv = dep.iv
  const update = dep.update
  const search = dep.search
  const setPointer = dep.setPointer
  const selectPointer = dep.selectPointer
  const backwardPointer = dep.backwardPointer
  const forwardPointer = dep.forwardPointer
  const blur = dep.blur
  const fo = dep.fo

  // ============== COMPUTED ==============

  // no export
  const createOption = computed(() => {
    return createTag.value || createOption_.value || false
  })

  // no export
  const addOptionOn = computed(() => {
    if (addTagOn.value !== undefined) {
      return addTagOn.value
    }
    else if (addOptionOn_.value !== undefined) {
      return addOptionOn_.value
    }

    return ['enter']
  })

  // =============== METHODS ==============

  // no export
  const preparePointer = () => {
    // When options are hidden and creating tags is allowed
    // no pointer will be set (because options are hidden).
    // In such case we need to set the pointer manually to the 
    // first option, which equals to the option created from
    // the search value.
    if (mode.value === 'tags' && !showOptions.value && createOption.value && searchable.value && !groupped.value) {
      setPointer(fo.value[fo.value.map(o => o[valueProp.value]).indexOf(search.value)])
    }
  }

  const handleKeydown = (e) => {
    switch (e.key) {
      case 'Backspace':
        if (mode.value === 'single') {
          return
        }

        if (searchable.value && [null, ''].indexOf(search.value) === -1) {
          return
        }

        if (iv.value.length === 0) {
          return
        }
        
        update([...iv.value].slice(0,-1))
        break

      case 'Enter':
        e.preventDefault()

        if (addOptionOn.value.indexOf('enter') === -1 && createOption.value) {
          return
        }
        
        preparePointer()
        selectPointer()
        break

      case ' ':
        if (!createOption.value && !searchable.value) {
          e.preventDefault()
          
          preparePointer()
          selectPointer()
          return
        }

        if (!createOption.value) {
          return false
        } 

        if (addOptionOn.value.indexOf('space') === -1 && createOption.value) {
          return
        }

        e.preventDefault()
        
        preparePointer()
        selectPointer()
        break
      
      case 'Tab':
      case ';':
      case ',':
        if (addOptionOn.value.indexOf(e.key.toLowerCase()) === -1 || !createOption.value) {
          return
        }

        preparePointer()
        selectPointer()
        e.preventDefault()
        break

      case 'Escape':
        blur()
        break

      case 'ArrowUp':
        e.preventDefault()

        if (!showOptions.value) {
          return
        }

        openDirection.value === 'top' ? forwardPointer() : backwardPointer()
        break

      case 'ArrowDown':
        e.preventDefault()

        if (!showOptions.value) {
          return
        }

        openDirection.value === 'top' ? backwardPointer() : forwardPointer()
        break
    }
  }

  return {
    handleKeydown,
    preparePointer,
  }
}
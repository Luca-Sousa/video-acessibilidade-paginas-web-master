const tabs = document.querySelectorAll('.js-tab')
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const contentId = tab.dataset.content
    const tabContent = document.getElementById(`tab-content-${contentId}`)
    const activeContent = document.querySelector('.js-tab-content.is-visible')
    const activeTab = document.querySelector('.js-tab.is-active')

    if (activeContent) {
      activeContent.classList.remove('is-visible')
    }

    if (activeTab) {
      activeTab.classList.remove('is-active')
      activeTab.setAttribute('aria-selected', false)
      activeTab.tabIndex = -1
    }

    tabContent.classList.add('is-visible')
    tab.classList.add('is-active')
    tab.setAttribute('aria-selected', true)
    tab.tabIndex = 0
  })

  tab.addEventListener('keydown', event => {
    event.preventDefault()
    const { key } = event
    // Usa o elemento que está atualmente focado:
    const currentTab = event.currentTarget // ou document.activeElement

    let newTab
    if (key === 'ArrowRight') {
      newTab = currentTab.nextElementSibling || currentTab.parentElement.firstElementChild
    }

    if (key === 'ArrowLeft') {
      newTab = currentTab.previousElementSibling || currentTab.parentElement.lastElementChild
    }

    if (key === 'Home') {
      newTab = currentTab.parentElement.firstElementChild
    }

    if (key === 'End') {
      newTab = currentTab.parentElement.lastElementChild
    }

    if (newTab) {
      currentTab.tabIndex = -1
      newTab.tabIndex = 0
      newTab.focus()
    }

    if (key === ' ' || key === 'Enter') {
      currentTab.click()
    }
  })
})

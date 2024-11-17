const menuBtn = document.querySelector('.menu-btn')
const mainMenu = document.querySelector('#main-menu')
const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

menuBtn.addEventListener('click', () => {
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true'
  if(isExpanded) {
    menuBtn.setAttribute('aria-expanded', false)
    mainMenu.addEventListener('animationend', () => {
      mainMenu.classList.add('hide')
    }, { once:true })
  }
  else {
    mainMenu.classList.remove('hide')
    menuBtn.setAttribute('aria-expanded', true)
  }
})

if(hasDarkmode == null) {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
} else if(hasDarkmode === 'on') {
  enableDarkMode()
} else if(hasDarkmode === 'off') {
  disableDarkMode()
}


darkmodeSwitch.addEventListener('change', () => {
  if(darkmodeSwitch.checked) {
    enableDarkMode()
    localStorage.setItem('darkmode', 'on')
  } else {
    disableDarkMode()
    localStorage.setItem('darkmode', 'off')
  }
})

function enableDarkMode() {
  darkmodeSwitch.checked = true
  document.documentElement.classList.add('dark')
}
function disableDarkMode() {
  darkmodeSwitch.checked = false
  document.documentElement.classList.remove('dark')
}

 

  const accordionInit = () => {
    const accordions =document.querySelectorAll(".accordion-item")

    accordions.forEach(accordion => {
      const titlebar = accordion.querySelector(".item-titlebar")
      const content = accordion.querySelector(".item-content")
      const icon = accordion.querySelector(".item-icon")

      titlebar.addEventListener("click", () => {
        const isOpen = accordion.classList.contains("active")

        accordions.forEach(item =>{
          item.classList.remove("active")
          content.classList.remove("active")
          icon.classList.remove("fa-chevron-up")
          icon.classList.add("fa-chevron-down")
        });
        if (!isOpen){
          accordion.classList.add("active")
          content.classList.add("active")
          icon.classList.add("fa-chevron-up")
          icon.classList.remove("fa-chevron-down")
        } else{
          accordion.classList.remove("active")
          content.classList.remove("active")
          icon.classList.remove("fa-chevron-up")
          icon.classList.add("fa-chevron-down")

        }
      })
    })
  }

  accordionInit();



 
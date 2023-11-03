const shareBtn = document.getElementById('share-component')
const toolTip = document.querySelector('.tooltip')
const profile = document.querySelector('.profile')
let addClass = false

const toggleTooltipDisplay = () => {
  if (window.innerWidth > 540) {
    if (!addClass) {
      toolTip.classList.remove('invisible')
      addClass = true
    } else {
      toolTip.classList.add('invisible')
      addClass = false
    }
  } else {
    !addClass ? (addClass = true) : (addClass = false)
  }
}

shareBtn.addEventListener('click', () => {
  toggleTooltipDisplay()
  toggleTooltipDisplay2()
})

const toggleTooltipDisplay2 = () => {
  if (window.innerWidth <= 540) {
    if (addClass) {
      profile.innerHTML = `<p>SHARE</p>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-pinterest"></i>
              <i class="fa-brands fa-twitter"></i>`
      profile.classList.add('share-toggle')
      profile.classList.remove('profile')
    } else {
      profile.innerHTML = `<div class="profile-img">
              <img src="/images/avatar-michelle.jpg" alt="">
            </div>
            <div class="profile-info">
              <p>
                Michelle Appleton
              </p>
              <p>28 Jun 2020</p>
            </div>`
      profile.classList.remove('share-toggle')
      profile.classList.add('profile')
    }
  } else {
  }
}

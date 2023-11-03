# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge
Some of the challenges that occurred when building this layout were:

- When building this layout was to create a tooltip for the share button in desktop mode or for devices with a breakpoint of 1280px or more.
- The second challenge was to modify the same tooltip in such a way that it matched the designs provided in the challenge for devices with a breakpoint of 540px or less.
- The third challenge was the responsiveness of this layout.

### Screenshot

![Desktop-Img](./screenshot.jpg)
![Mobile-Img]()

### Links

- Solution URL: [Github Link](https://github.com/Aayush895/Article-Preview-Component)
- Live Site URL: [Hosted Link](https://article-preview-component-aayush.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

The major learnings from this challenge were:
- I learned how to create a simple custom tooltip from pure HTML & CSS
- Learned how to add specific styles and elements for devices with different screen widths through javascript
- Learned how to make the layout more responsive

For creating a custom tooltip through HTML & CSS I referred to the following code from W3Schools:

```html
<!DOCTYPE html>
<html>
<style>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
<body style="text-align:center;">

<h2>Top Tooltip</h2>
<p>Move the mouse over the text below:</p>

<div class="tooltip">Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div>

</body>
</html>
```
For the tooltip to adapt to different screen widths I wrote the following code in javascript:

```js
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
  } 
}
```

For a much better understanding, please refer to the code present in the repository.

### Useful resources

- [Custom Tooltip](https://www.w3schools.com/css/css_tooltip.asp) - This article from W3Schools helped me to create the custom tooltip through HTML & CSS.

## Author

- Website - [Aayush Jha](https://www.linkedin.com/in/aayush-jha-6716b018b/)
- Frontend Mentor - [@Aayush895](https://www.frontendmentor.io/profile/Aayush895)
- Twitter - [@JhaAayush895](https://twitter.com/JhaAayush895)

## Acknowledgments

I would like to thank the entire frontend-mentor team for providing such interesting challenges to test and improve my skills in the domain of frontend web development.

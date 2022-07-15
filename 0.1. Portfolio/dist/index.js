let scrollText = document.querySelector(".background-scroll-text");

window.onscroll = () => {
    let pos = window.scrollY
    scrollText.style.left = `-${pos/1}px`
}
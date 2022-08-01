
// background scrolling font animation

let scrollText = document.querySelector(".background-scroll-text");

window.onscroll = () => {
    let pos = window.scrollY
    scrollText.style.left = `-${pos/1}px`
}


AOS.init({
  disable: function() {
    var maxWidth = 767;
    return window.innerWidth < maxWidth;
  }
});


//let today = `${day}`
//document.getElementById("today").innerText = today



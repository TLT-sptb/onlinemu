<template>
  

  <router-view class="container-fluid"></router-view>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*{
    /* overflow: hidden; */
    margin:0;
    padding:0;
    border:0;
    cursor: url('./assets/cursorMu.png'), default;
}
body{
  /* background: rgb(138,138,138);
background: radial-gradient(circle, rgba(138,138,138,1) 22%, rgba(45,45,46,1) 100%); */
  background-image: url('./assets/índice.jpg');
  background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 55%;
    position: relative;
}
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');
#app {
  font-family: 'Sofia Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  /* margin-top: 60px; */
}
</style>

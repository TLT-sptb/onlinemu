<template>
  <header class="headerPage bg-dark bg-gradient">
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg">
    <div class="logoComponent">
      <img class="logo reflection" src="../assets/logo.png" alt="">
    </div>
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ranking">Ranking</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <p class="contact circle reflection">
        <a style="color:black" href="https://wa.me/+5527998928844">
          <img style="width:60px;" src="https://cdn.cdnlogo.com/logos/w/29/whatsapp-icon.svg">
        </a>
      </p>
    </div>
  </nav>
  <!-- Navbar -->
</header>

  <!-- <header class="headerPage box-shadow">
    



    <ul>
      <li style="text-decoration:underline" class="circle"><a href="/">Home</a></li>
      <li class="circle"><a href="/ranking">Ranking Npoints</a></li>
      <li class="circle"><a>Sorteador</a></li>
    </ul>


  </header> -->
</template>

<script>
export default {
  name: 'HeaderPg',
  props: {
    msg: String
  },
  async mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 767px) {
  .logoComponent {
    display: none;
  }
}

.logo {
  width: 150px;
  border-radius: 100%;
}

ul,
li a {
  list-style: none;
  display: flex;
  /* gap: 10px; */
}

li,
a {
  text-decoration: none;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  -webkit-text-stroke-width: .8px;
  -webkit-text-stroke-color: #fff;
  /* background: radial-gradient(circle, rgb(220, 220, 0) 0%, rgb(240, 240, 1) 100%); */
}

li:hover,
.contact:hover {
  text-decoration: underline;
}

.headerPage {
  font-family: cursive;
  width: 100%;
  align-items: center;
  display: inline-block;
  align-items: center;
  position: relative;
  justify-content: space-around;
}

.reflection::after {
  /* content: ""; */
  display: block;
  width: 30px;
  height: 100%;
  position: absolute;
  top: -180px;
  left: 0;
  background-color: #FFF;
  opacity: 0;
  transform: rotate(45deg);
  animation: reflect 3s ease-in-out infinite;
  -webkit-transform: rotate(45deg);
  -webkit-animation: reflect 3s ease-in-out infinite;
}

@keyframes reflect {
  0% {
    transform: scale(0) rotate(45deg);
    opacity: 0;
  }

  80% {
    transform: scale(0) rotate(45deg);
    opacity: 0.5;
  }

  81% {
    transform: scale(4) rotate(45deg);
    opacity: 1;
  }

  100% {
    transform: scale(50) rotate(45deg);
    opacity: 0;
  }
}

@-webkit-keyframes reflect {
  0% {
    transform: scale(0) rotate(45deg);
    opacity: 0;
  }

  80% {
    transform: scale(0) rotate(45deg);
    opacity: 0.5;
  }

  81% {
    transform: scale(4) rotate(45deg);
    opacity: 1;
  }

  100% {
    transform: scale(50) rotate(45deg);
    opacity: 0;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 1050px;
  width: 90%;
  margin: auto;
}
</style>

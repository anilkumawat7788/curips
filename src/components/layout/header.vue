<template>
  <div class="main-header">
    <div id="app">
      <nav-bar msg="String"></nav-bar>
    </div>

    <template id="navBar">
      <b-navbar class="navbar navbar-light bg-dark" toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand class="navbar-brand" href="/">
          <img class="main-logo" src="@/assets/curipelogo.svg" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="navbarSupportedContent" class="nav-item ml-auto">
            <b-nav-item href="/">HOME</b-nav-item>
            <hr class="line1">
            <b-nav-item href="/about">ABOUT</b-nav-item>
            <hr class="line1">
            <b-nav-item href="/services">SERVICES</b-nav-item>
            <hr class="line1">
            <b-nav-item href="/project">PROJECT</b-nav-item>
            <hr class="line1">
            <b-nav-item href="/keyteam">KEY TEAM</b-nav-item>
            <hr class="line1">
            <b-nav-item href="/contact">CONTACT US</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </template>
  </div>
</template>
 
<script>
//RPLTechno
</script>
<style scoped>
.navbar-dark .navbar-nav .nav-link {
  color: #fff;
  margin: 0 1rem 0 1rem;
  font-family: "Ubuntu", sans-serif;
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: #F9B707;
}
.navbar-dark .navbar-nav .nav-link:active {
  color: #F9B707;
 
}
.main-logo {
  width: 10rem;
  margin: 0 0 0 3rem;
}

.bg-dark {
    background-color: #272727 !important;
    
}
@media screen and (max-width: 800px) {
  .line1{
    width: 100%;
    color: white;
    background: white;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: white;
    text-align: center;
    
  }
  .navbar-dark .navbar-nav .nav-link:hover {
    color: white;
  }
  .navbar-dark .navbar-nav .nav-link:active {
    color: white;
    border: none;
    border-radius: none;
  }
  .bg-white {
    background-color: #000726 !important;
  }

  .navbar-light .navbar-toggler {
    color: white;
    width: 3.4rem;
    height: 2.4rem;
    border: 1.5px solid white;
  }
  .main-logo {
    width: 7rem;
    margin: 0 0 0 1rem;
  }
}
</style>
 
 
 
 
 
 

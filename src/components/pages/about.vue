<template>
  <div class="main-container">
    <headers />
    <div class="about-section">
      <div class="box-about">
        <img class="box-img" src="@/assets/p22.png" />
      </div>
      <div class="heading-first">
        <h1>WHO WE ARE</h1>
        <hr class="line" />
        <h3>OUR CONSTRUCTION COMPANY WAS FOUNDED 10 YEARS AGO, AT THE VERY PEAK OF THE BUILDING FRENZY IN THE US.</h3>
        <p>THE CENTRE FOR URBAN AND RURAL INFRASTRUCTRE PLANNING (CURIP) established during November 2004 and functioning with the registration. No. 1070/2004-05 dt. 21.09.2004, Service Tax Regn. No. AAEFC4582HST001 Dt. 07.02.05 underwent a change in nomenclature, due to administrative reasons, as “CENTRE FOR URBAN AND RURAL INFRASTRUCTRE PLANNING enterprises” (CURIPe) and is functioning as such from July 2008. CURIPe is ISO 9001-2008 Certified.</p>
      </div>
    </div>
    <h1 class="heading-second">AIMS AND OBJECTIVES</h1>
    <div class="aims-section">
      <div class="aims-para">
        <span class="circle1">
          <h2>01</h2>
        </span>
        <p>The firm offers a complete and comprehensive technical guidance for all types of activities connected to urban and country planning, undertakes preparation of Infrastructural Development plans for Urban Local bodies, offers Architectural Services and preparation of Master Plans, Detailed Project Reports for Housing schemes, Industrial Parks, IT & BT Parks, High Rise Buildings, Office and commercial complexes and Multiplexes.</p>
      </div>
      <div class="aims-para">
        <span class="circle2">
          <h2>02</h2>
        </span>
        <p>The firm also offers consultancy services in the traffic and transportation sector in the identification of locations for flyovers, grade separators, subways, suggests improvements in circulation pattern and formation of missing links and new roads to achieve comprehensive road network by carrying out necessary investigations and surveys including designs of structural components and estimates.</p>
      </div>
      <div class="aims-para">
        <span class="circle3">
          <h2>03</h2>
        </span>
        <p>The firm also specializes in designs of water supply and sanitation schemes, advise on proper planning and control of environment impact hazards, Solid waste management, pollution control in industrial areas to preserve community health and Rain water harvesting management with a view to recharge/increase ground water potential.</p>
      </div>
      <div class="aims-para">
        <span class="circle4">
          <h2>04</h2>
        </span>
        <p>CURIPe offers consultancy services in the study of revenue generation of urban local bodies and suggest measures for improvement.</p>
      </div>
    </div>
    <div class="layout-dark">
      <h3>Our Services</h3>
      <h1>What We Offer For You</h1>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some slightly believable If you are going</p>
      <div class="offers-section">
        <div class="box-1">
          <img class="box1-img" src="@/assets/offers1.svg" />
          <h1>Group housing</h1>
        </div>
        <div class="box-1">
          <img class="box1-img" src="@/assets/offers3.svg" />
          <h1>Housing Layout</h1>
        </div>
        <div class="box-1">
          <img class="box1-img" src="@/assets/offers6.svg" />
          <h1>Environmental Impact Assessment</h1>
        </div>
        <div class="box-1">
          <img class="box1-img" src="@/assets/offers2.svg" />
          <h1>Traffic And Transportation</h1>
        </div>
        <div class="box-1">
          <img class="box1-img" src="@/assets/offers4.svg" />
          <h1>Integrated Township</h1>
        </div>
        <div class="box-1">
          <img class="box1-img" src="@/assets/offers5.svg" />
          <h1>Multiplex</h1>
        </div>
      </div>
    </div>
    <div class="layout-light">
      <h3>Our Blogs</h3>
      <h1>Our Latest News</h1>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some slightly believable If you are going</p>
      <div class="news-section">
        <div class="box-2">
          <h1>KIADB</h1>
        </div>
        <div class="box-2">
          <h1>Karnataka Housing Bouard</h1>
        </div>
        <div class="box-2">
          <h1>BMICAPA</h1>
        </div>
      </div>
    </div>
    <div class="slider-section">
       <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
     
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
         <h1 class="testmonial-heading">Testimonials</h1>
         <div class="testmonial-section">
        <div class="box-3">
             <img class="man1-img" src="@/assets/circleman.svg" />
           
            <p>As an official from North Dakota's state government, I want to thank your construction company. On behalf of the citizens of the state, we're so grateful for this new innovative building! This allows North Dakota to hold its legislative operations in a contemporary, progressive architectural environment!</p>
          <h3>Zonain Hariss</h3>
        </div>
        <div class="box-4">
             <img class="man1-img" src="@/assets/circleman.svg" />
           
            <p>As an official from North Dakota's state government, I want to thank your construction company. On behalf of the citizens of the state, we're so grateful for this new innovative building! This allows North Dakota to hold its legislative operations in a contemporary, progressive architectural environment!</p>
          <h3>Zonain Hariss</h3>
        
       
      </div>
      </div>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="200"
            src="../../assets/p23.jpg"
            alt="image slot"
          >
        </template>
   
      </b-carousel-slide>
 <b-carousel-slide>
   <h1 class="testmonial-heading">Testimonials</h1>
    <div class="testmonial-section">
        <div class="box-3">
             <img class="man1-img" src="@/assets/circleman.svg" />
           
            <p>As an official from North Dakota's state government, I want to thank your construction company. On behalf of the citizens of the state, we're so grateful for this new innovative building! This allows North Dakota to hold its legislative operations in a contemporary, progressive architectural environment!</p>
          <h3>Zonain Hariss</h3>
        </div>
        <div class="box-4">
              <img class="man1-img" src="@/assets/circleman.svg" />
           
            <p>As an official from North Dakota's state government, I want to thank your construction company. On behalf of the citizens of the state, we're so grateful for this new innovative building! This allows North Dakota to hold its legislative operations in a contemporary, progressive architectural environment!</p>
          <h3>Zonain Hariss</h3>
        </div>
       
      </div>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="200"
            src="../../assets/p23.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
 <b-carousel-slide>
   <h1 class="testmonial-heading">Testimonials</h1>
       <div class="testmonial-section">
        <div class="box-3">
             <img class="man1-img" src="@/assets/circleman.svg" />
           
            <p>As an official from North Dakota's state government, I want to thank your construction company. On behalf of the citizens of the state, we're so grateful for this new innovative building! This allows North Dakota to hold its legislative operations in a contemporary, progressive architectural environment!</p>
          <h3>Zonain Hariss</h3>
        </div>
        <div class="box-4">
             <img class="man1-img" src="@/assets/circleman.svg" />
           
            <p>As an official from North Dakota's state government, I want to thank your construction company. On behalf of the citizens of the state, we're so grateful for this new innovative building! This allows North Dakota to hold its legislative operations in a contemporary, progressive architectural environment!</p>
          <h3>Zonain Hariss</h3>
        </div>
       
      </div>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="200"
            src="../../assets/p23.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

    </b-carousel>
  </div>
    </div>
    <footers />
  </div>
</template>
<script>
import headers from "@/components/layout/header.vue";
import footers from "@/components/layout/footer.vue";
export default {
  components: {
    headers,
    footers
  }
};
</script>
<style scoped>
.about-section {
  margin: 1rem;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.box-img {
  margin: 2rem  0 0 0;
  height: 19rem;
  width: 19rem;
}
.heading-first {
  position: relative;
  width: auto;
  height: auto;
}
.heading-first h1 {
  font-size: 1.5rem;
  padding: 2rem 0 0 0;
  font-family: "Noto Sans", sans-serif;
  text-align: center;
  color: #333333;
}

.heading-first h3 {
  font-size: 1rem;
  padding: 2rem .5rem 2rem 1rem;
  line-height: 1.7;
 
  text-align: left;
  color: #333333;
}
.heading-first p {
  font-size: 0.8rem;
  padding: 0.5rem 0 0 1rem;
  line-height: 2.2;
  font-family: "Noto Sans", sans-serif;
  text-align: left;
  color: #333333;
}
.line {
  position: absolute;
  color: #f9b707;
  width: 35%;
  background: #f9b707;
  height: .2rem;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.heading-second {
  margin-top: 3rem;
  font-size: 1.3rem;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  color: #333333;
}
.aims-section {
  margin: 1rem;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.aims-para {
 position: relative;
  width: auto;
  height: auto;
}
.aims-para p {
  font-size: .9rem;
  line-height: 2;
  color: #858585;
  text-align: center;
  padding: 4rem 1rem 1rem 1rem;
}
.circle1 h2 {
  position: absolute;
  width: 3rem;
  height: 3rem;
  background: #f9b707 0% 0% no-repeat padding-box;
  border-radius: 50%;
  font-size: 1.2rem;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  padding: .8rem 0 1rem .9rem;
  color: white;
}
.circle2 h2 {
  position: absolute;
  width: 3rem;
  height: 3rem;
  background: #f9b707 0% 0% no-repeat padding-box;
  border-radius: 50%;
  font-size: 1.2rem;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  padding: .8rem 0 1rem .9rem;
  color: white;
}
.circle3 h2 {
  position: absolute;
  width: 3rem;
  height: 3rem;
  background: #f9b707 0% 0% no-repeat padding-box;
  border-radius: 50%;
  font-size: 1.2rem;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  padding: .8rem 0 1rem .9rem;
  color: white;
}
.circle4 h2 {
  position: absolute;
  width: 3rem;
  height: 3rem;
  background: #f9b707 0% 0% no-repeat padding-box;
  border-radius: 50%;
  font-size: 1.2rem;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  padding: .8rem 0 1rem .9rem;
  color: white;
}
.layout-dark {
  margin: 3rem 1rem 1rem 1rem;
  background: none;
}
.layout-dark h3 {
  padding: 0 0 1rem 0;
  text-align: center;
  font-size: 1.1rem;
  font-family: "Noto Sans", sans-serif;
}
.layout-dark h1 {
  text-align: center;
  font-size: 1.3rem;
  font-family: "Noto Sans", sans-serif;
}
.layout-dark p {
  text-align: center;
  padding: 1rem .5rem 1rem .5rem;
  font-size: 0.8rem;
  line-height: 2;
  color: #f9b707;
 font-style:italic;
 font-family: "Noto Sans", sans-serif;

}
.offers-section {
  margin: 1rem;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.box-1 {
  position: relative;
  width: 21rem;
  height: 14rem;
  background: #333333 0% 0% no-repeat padding-box;
  border-radius: 2rem;
  margin: 2rem 1rem 1rem 1rem;
}
.box-1 h1 {
  padding: 10rem  0 0 0;
  font-size: 1.1rem;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  color: white;
}
.box1-img {
  position: absolute;
  width: 6rem;
  height: 6rem;
 top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.layout-light {
  margin: 2rem 1rem 1rem 1rem;
  background: none;
}
.layout-light h3 {
 padding: 2rem 0 1rem 0;
  text-align: center;
  font-size: 1.1rem;
  font-family: "Noto Sans", sans-serif;
}
.layout-light h1 {
  text-align: center;
  font-size: 1.3rem;
  font-family: "Noto Sans", sans-serif;
}
.layout-light p {
  text-align: center;
  padding: 1rem .5rem 1rem .5rem;
  font-size: 0.8rem;
  line-height: 2;
  color: #f9b707;
 font-style:italic;
 font-family: "Noto Sans", sans-serif;
}
.news-section {
  margin: .5rem;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.box-2 {
  width: 5rem;
  height: 5rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: .8rem;
  margin: 1rem .5rem 1rem .5rem;
}
.box-2:hover {
  width: 6rem;
  height: 6rem;
}
.box-2 h1 {
  font-size: .8rem;
  padding: 1rem 0 0 0;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  color: #333333;
}
.testmonial-heading h1{
  display: none;
}
.testmonial-section{
   margin:0 .5rem 0 .5rem;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap:none;
}
.box-3 {
  position: relative;
  width: 28rem;
  height: 24rem;
  border-radius: 1rem;
  margin: 1rem 0 1rem 0;
}
.box-3 p {
  padding:  6rem .5rem 0 .5rem;
    text-align:center;
    line-height: 1.8;
  font-size: .8rem;
  color: #DFDFDF;
  font-family: "Noto Sans", sans-serif;
}
.box-3 h3 {
  padding: 0 .5rem 0 .5rem;
    text-align:center;
  font-size: .7rem;
  color: #f9b707;
  font-family: "Noto Sans", sans-serif;
}
.man1-img {
  position: absolute;
  width: 28%;
  height: 28%;
  top: 13%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.box-4 {
 display: none;
}
.box-4 p {
  padding:  6rem .5rem 0 .5rem;
    text-align:center;
    line-height: 1.8;
  font-size: .8rem;
  color: #DFDFDF;
  font-family: "Noto Sans", sans-serif;
}
.box-4 h3 {
  padding: 0 .5rem 0 .5rem;
    text-align:center;
  font-size: .7rem;
  color: #f9b707;
  font-family: "Noto Sans", sans-serif;
}
.man1-img {
  position: absolute;
  width: 28%;
  height: 28%;
  top: 13%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
 
.slider-section{
  position: relative;
}

.img-fluid{
  height: 70vh;

}
@media screen and (min-width:800px){
  .about-section {
  margin: 1rem;
  
}
.box-about {
  
  margin: 1rem 6rem 0 4rem;
}
.box-img {
  height: 37rem;
  width: 37rem;
}
.heading-first {
  margin: 1rem 0 0 4rem;
  width: 35rem;
  height: auto;
}
.heading-first h1 {
  font-size: 3rem;
  padding: 2rem 0 0 0;

}

.heading-first h3 {
   line-height: 2;
  font-size: 1.3rem;
  padding: 3rem 0 0 0;
}
.heading-first p {
  font-size: 1.1rem;
  padding: 0.5rem;
  line-height: 2;
}
.line {
  top: 15%;
  left: 50%;
}
.heading-second {
  margin-top: 6rem;
  font-size: 2rem;
  
} 
.aims-section {
  margin: 1rem;
  flex-direction: column;
  align-content: center;
} 
.aims-para {
  
  width: 73%;
  height: auto;
  margin: 2rem 0 0 0 ;
}
.aims-para p {
  font-size: 1.3rem;
  color: #757575;
  text-align: center;
}
.circle h2 {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.1rem;
  margin: 1rem 0 1rem .5rem;
  padding: .7rem 0 1rem .7rem;
  
}
.layout-dark {
  margin: 2rem 1rem 1rem 1rem;
 background: #333333 0% 0% no-repeat padding-box;
}
.layout-dark h3 {
  font-size: 1.7rem;
  color: #fff;
  padding: 2rem 0 1rem 0;
}
.layout-dark h1 {
  text-align: center;
  font-size: 2rem;
   color: #fff;
   padding: 1rem 0 1rem 0;
}
.layout-dark p {
  
  font-size: 1.3rem;
  color: #f9b707;
 
  padding: 1rem 15rem 1rem 15rem;
}
.box-1 {
  width: 28rem;
  height: 20rem;
  border: 2px solid #f9b707;
  border-radius: 1rem;
  margin: 2rem 1rem 4rem 1rem;
}
.box-1 h1 {
   padding: 14rem  0 0 0;
  font-size: 1.3rem;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  color: white;
}
.box1-img {
  width: 10rem;
  height: 10rem;
 
}
.layout-light  {
  margin: 2rem 1rem 1rem 1rem;

}
.layout-light h3 {
  font-size: 1.7rem;
  color: #333333;
  padding: 2rem 0 1rem 0;
}
.layout-light h1 {
  text-align: center;
  font-size: 2rem;
   color: #333333;
   padding: 1rem 0 1rem 0;
}
.layout-light p {
  
  font-size: 1.3rem;
  color: #f9b707;
 
  padding: 1rem 15rem 1rem 15rem;
}
.news-section {
  margin: 2rem 0 4rem 0;
   
 
}
.box-2 {
  width: 15rem;
  height: 7rem;
  margin: 1rem 1rem 4rem 1rem;
 
}
.box-2:hover {
  width: 17rem;
  height: 7rem;
  box-shadow:0 10px 10px 10px;

}
.box-2 h1{
  font-size: 1.3rem;
  padding: 2rem 0 0 0;
 
}
 .slider-section{
  position: relative;
}
.img-fluid{
  height: 85vh;

}
.testmonial-heading{
  font-size: 2.5rem;
  color: white;
  text-align: center;
  padding: 2rem 0 0 0;
}
.testmonial-section{
   margin:0 .5rem 0 .5rem;
  flex-wrap: none;
}
.box-3 {
  width: 28rem;
  height: 33rem;
  margin: 1rem 4rem 1rem 1rem;
 
}
.box-3 p {
  padding: 8.5rem .5rem 0 .5rem;
    text-align:center;
  font-size: 1.2rem;
 
}
.box-3 h3 {
  padding: 0 .5rem 0 .5rem;
    text-align:center;
  font-size: 1rem;
  color: #f9b707;
  font-family: "Noto Sans", sans-serif;
}
.man1-img {
  position: absolute;
  width: 28%;
  height: 28%;
  top: 13%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.box-4 {
 position: relative;
  display: block;

  width: 28rem;
  height: 33rem;
  margin: 1rem 1rem 1rem 4rem;
}
.box-4 p {
  padding: 8.5rem .5rem 0 .5rem;
    text-align:center;
  font-size: 1.2rem;
 
 
}
.box-4 h3 {
  padding: 0 .5rem 0 .5rem;
    text-align:center;
  font-size: 1rem;
  color: #f9b707;
  font-family: "Noto Sans", sans-serif;
}
.testmonial-heading h1{
  color: white;
  text-align: center;
  font-size: 1.5rem;
}
.carousel-indicators li{
  box-sizing: content-box;
    flex: 0 1 auto;
    width: 26px;
    height: 26px;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity 0.6s ease;
  
}
}
</style>
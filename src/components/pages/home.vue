<template>
  <div class="main-container">
    <headers />
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
         <hr class="line-slider">
     <h1>PROJECTS</h1>
         <p>
          THIS YEAR WE TOOK MORE COMPLEX CONSTRUCTIONS THAN EVER BEFORE.....
        </p>
         <a href="/contact" class="btn btn-contact1">CONTACT US</a>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="200"
            src="../../assets/p29.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
 <b-carousel-slide>
    <hr class="line-slider">
      <h1>PROJECTS</h1>
         <p>
          THIS YEAR WE TOOK MORE COMPLEX CONSTRUCTIONS THAN EVER BEFORE.....
        </p>
         <a href="/contact" class="btn btn-contact1">CONTACT US</a>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="200"
            src="../../assets/p29.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
 <b-carousel-slide>
   <hr class="line-slider">
        <h1>PROJECTS</h1>
         <p>
          THIS YEAR WE TOOK MORE COMPLEX CONSTRUCTIONS THAN EVER BEFORE.....
        </p>
         <a href="/contact" class="btn btn-contact1">CONTACT US</a>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="200"
            src="../../assets/p29.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

    </b-carousel>
  </div>
    </div>
    <div class="about-section1">
      <div class="heading-slider">
        <h1>THIS YEAR WE TOOK MORE COMPLEX CONSTRUCTIONS THAN EVER BEFORE.....</h1>
        <a href="#" class="btn btn-contact">CONTACT US</a>
      </div>
    </div>
    <div class="about-section">
      <div class="heading-first">
        <hr class="line1" />
        <h1>ABOUT US</h1>

        <h3>OUR CONSTRUCTION COMPANY WAS FOUNDED 10 YEARS AGO, AT THE VERY PEAK OF THE BUILDING FRENZY IN THE US.</h3>
        <div class="box-about1">
          <img class="box-img" src="@/assets/p30.jpg" />
        </div>
        <p>THE CENTRE FOR URBAN AND RURAL INFRASTRUCTRE PLANNING (CURIP) established during November 2004 and functioning with the registration. No. 1070/2004-05 dt. 21.09.2004, Service Tax Regn. No. AAEFC4582HST001 Dt. 07.02.05 underwent a change in nomenclature, due to administrative reasons, as “CENTRE FOR URBAN AND RURAL INFRASTRUCTRE PLANNING enterprises” (CURIPe) and is functioning as such from July 2008. CURIPe is ISO 9001-2008 Certified.</p>
        <a href="/about" class="btn btn-about">ABOUT US</a>
      </div>
      <div class="box-about2">
        <img class="box-img1" src="@/assets/p30.jpg" />
      </div>
    </div>
    <div class="project-layout">
      <div class="box-1">
        <h1>180</h1>
        <p>PROJECT COMPLETED</p>
      </div>
      <div class="box-1">
        <h1>98</h1>
        <p>STAFF MEMBERS</p>
      </div>
      <div class="box-1">
        <h1>15</h1>
        <p>MILLION MAN-HOURS</p>
      </div>
      <div class="box-1">
        <h1>20</h1>
        <p>AWARDS OWN</p>
      </div>
    </div>
    <div class="heading-second">
      <hr class="line2" />
      <h1>OUR SERVICES</h1>
    </div>
    <div class="services-section">
      <div class="box-2">
        <b-row>
          <b-col cols="4">
            <div class="circle">
              <img class="box2-img" src="@/assets/offers1.svg" />
            </div>
          </b-col>
          <b-col cols="8">
            <h1>GROUP HOUSING</h1>
            <p>We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand..</p>
          </b-col>
        </b-row>
      </div>
      <div class="box-2">
        <b-row>
          <b-col cols="4">
            <div class="circle">
              <img class="box2-img" src="@/assets/offers3.svg" />
            </div>
          </b-col>
          <b-col cols="8">
            <h1>HOUSING LAYOUT</h1>
            <p>We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand..</p>
          </b-col>
        </b-row>
      </div>
      <div class="box-2">
        <b-row>
          <b-col cols="4">
            <div class="circle">
              <img class="box2-img" src="@/assets/offers6.svg" />
            </div>
          </b-col>
          <b-col cols="8">
            <h1>ENVIRONAMENTAL IMPACT ASSEMENT</h1>
            <p>We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand..</p>
          </b-col>
        </b-row>
      </div>
      <div class="box-2">
        <b-row>
          <b-col cols="4">
            <div class="circle">
              <img class="box2-img" src="@/assets/offers2.svg" />
            </div>
          </b-col>
          <b-col cols="8">
            <h1>TRAFFIC AND TRANSPORTATION</h1>
            <p>We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand..</p>
          </b-col>
        </b-row>
      </div>
      <div class="box-2">
        <b-row>
          <b-col cols="4">
            <div class="circle">
              <img class="box2-img" src="@/assets/offers4.svg" />
            </div>
          </b-col>
          <b-col cols="8">
            <h1>INTEGRATED TOWNSHIP</h1>
            <p>We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand..</p>
          </b-col>
        </b-row>
      </div>
      <div class="box-2">
        <b-row>
          <b-col cols="4">
            <div class="circle">
              <img class="box2-img" src="@/assets/offers5.svg" />
            </div>
          </b-col>
          <b-col cols="8">
            <h1>MULTIPLEX</h1>
            <p>We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand..</p>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="project">
      <div class="heading-thired">
        <hr class="line3" />
        <h2>IF YOU CAN ENVISION IT, THEN WE CAN BUILD IT! TELL US MORE ABOUT YOUR PROJECT</h2>
        <a href="/project" class="btn btn-white">PROJECT</a>
      </div>
    </div>
    <div class="background-imgs">
      <div class="box-3">
        <p class="boxes-para">HOUSING LAYOUT</p>
        <a href="#" class="btn-view">VIEW PROJECT>></a>
      </div>
      <div class="box-4">
        <p class="boxes-para">GROUP HOUSING</p>
        <a href="#" class="btn-view">VIEW PROJECT>></a>
      </div>
      <div class="box-5">
        <p class="boxes-para">ENVIRONMENTAL IMPACT ASSEMENTS</p>
        <a href="#" class="btn-view">VIEW PROJECT>></a>
      </div>
      <div class="box-6">
        <p class="boxes-para">TRAFFIC AND TRANSPORTATION</p>
        <a href="#" class="btn-view">VIEW PROJECT>></a>
      </div>
      <div class="box-7">
        <p class="boxes-para">INTEGRATED TOWNSHIP</p>
        <a href="#" class="btn-view">VIEW PROJECT>></a>
      </div>
      <div class="box-8">
        <p class="boxes-para">GIS SERVICES</p>
        <a href="#" class="btn-view">VIEW PROJECT>></a>
      </div>
      <div class="box-9">
        <p class="boxes-para">MULTIPLEX</p>
        <a href="#" class="btn-view">VIEW PROJECT>></a>
      </div>
      <div class="box-10">
        <p class="boxes-para">OTHER ALLIED SERVICES</p>
        <a href="#" class="btn-view">VIEW PROJECT>></a>
      </div>
    </div>
    <div class="managers-heading">
      <hr class="line4" />
      <h1>EXECUTIVE MANAGERS</h1>
    </div>
    <div class="managers-section">
      <div class="box-man">
        <img class="man-img" src="@/assets/man2.svg" />
        <h2>Ramachandra Naidu</h2>
        <h3>President</h3>
        <p>We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand..</p>
      </div>
      <div class="box-man">
        <img class="man-img" src="@/assets/man2.svg" />
        <h2>Ramachandra Naidu</h2>
        <h3>President</h3>
        <p>We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand..</p>
      </div>
    </div>
    <div class="testmonial-section">
      <div class="box-11">
        <img class="man1-img" src="@/assets/circleman.svg" />

        <p>As an official from North Dakota's state government, I want to thank your construction company. On behalf of the citizens of the state</p>
        <h3>Zonain Hariss</h3>
      </div>
      <div class="box-11">
        <img class="man1-img" src="@/assets/circleman.svg" />

        <p>As an official from North Dakota's state government, I want to thank your construction company. On behalf of the citizens of the state</p>
        <h3>Zonain Hariss</h3>
      </div>
    </div>
    <div class="form-heading"> 
      <hr class="line5" />
      <h1>GET IN TOUCH</h1>
    </div>
    <div class="form-section">
      <form action="/action_page.php">
        <div class="input-container">
          <img class="icon" src="@/assets/face.svg" />
          <input class="input-field" type="text" placeholder="Your Name" name="usrnm" />
        </div>

        <div class="input-container">
          <img class="icon" src="@/assets/email.svg" />
          <input class="input-field" type="text" placeholder="Mail Address" name="email" />
        </div>

        <div class="input-container">
          <img class="icon" src="@/assets/chat.svg" />
          <textarea class="input-field" name="field3" placeholder="Message"></textarea>
        </div>

        <button type="submit" class="btn btn-send">SEND</button>
      </form>
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
.slider-section{
  position: relative;
}
.line-slider{
  position: absolute;
  color: #f9b707;
  width: 35%;
  height: 0.2rem;
  background: #f9b707;
  top: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.img-fluid{
  height: 100%;

}
.slider-section h1{
  font-size: 2rem;
  padding:0 0 2rem 0 ;
  font-family: "Noto Sans", sans-serif;
  text-align: center;
}

.slider-section p{
 display: none;
}
.btn-contact1 {
 display: none;
}
.about-section1 {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-image: none;
}
.heading-slider {
  position: relative;
}
.heading-slider h1 {
  font-size: 0.9rem;
  padding: 5rem 1rem 3rem 1rem;
  font-family: "Noto Sans", sans-serif;
  text-align: center;
  color: #333333;
}
.btn-contact {
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background: #f9b707;
  color: white;
  font-size: 0.7rem;
  font-family: "Noto Sans", sans-serif;
  border-radius: 0.4rem;
  width: 8rem;
  height: 2.5rem;
  padding: .7rem;
}
.about-section {
  margin: 1rem;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.box-about2 {
  display: none;
}
.box-img {
  height: 15rem;
  width: 100%;
  margin: 0 1rem 0 0;
}
.heading-first {
  width: auto;
  height: auto;
  position: relative;
}
.heading-first h1 {
  font-size: 1.5rem;
  padding: 6rem 0 0 0;
  font-family: "Noto Sans", sans-serif;
  text-align: center;
  color: #333333;
}

.heading-first h3 {
  font-size: .9rem;
  padding: 1rem .5rem 2rem .5rem;
  line-height: 1.7;


  text-align: center;
  color: #333333;
}
.heading-first p {
  font-size: 0.7rem;
  padding: 1rem 1rem 2rem 1rem;
line-height: 2.4;
  text-align: justify;
  color: #333333;
}
.line1 {
  position: absolute;
  color: #f9b707;
  width: 35%;
  height: 0.15rem;
  background: #f9b707;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.btn-about {
  position: absolute;
  top: 103%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background: #f9b707;
  color: white;
  font-size: 0.7rem;
  font-family: "Noto Sans", sans-serif;
  border-radius: 0.4rem;
 width: 8rem;
  height: 2.5rem;
  padding: .7rem;
}
.project-layout {
  margin-top: 7rem;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-image: url("../../assets/p31.jpg");
  background-size: 100% 100%;
}
.box-1 {
  width: 5rem;
  height: 8rem;
}
.box-1 h1 {
  font-size: 1.7rem;
  padding: 1rem 0 0 0;
  text-align: center;
  color: #f9b707;
  font-family: "Noto Sans", sans-serif;
}
.box-1 p {
  font-size: 0.8rem;
  text-align: center;
  color: white;
}
.heading-second {
  position: relative;
  margin-top: 4rem;
}
.heading-second h1 {
  font-size: 1.5rem;
  padding: 2rem 0 0 0;
  font-family: "Noto Sans", sans-serif;
  text-align: center;
  color: #333333;
}
.line2 {
  position: absolute;
  color: #f9b707;
  width: 35%;
  height: 0.15rem;
  background: #f9b707;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.services-section {
  margin: 3rem 1rem 1rem 1rem;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box-2 {
  width: 21rem;
  height: 17.5rem;
  border: 1px solid #707070;
  border-radius: 0.7rem;
  margin: 0 0 4rem 0;
}
.box-2 h1 {
  font-size: 1.2rem;
  padding: 2rem 0 0 0;
  text-align: left;
  color: #333333;
  font-family: "Noto Sans", sans-serif;
}
.box-2 p {
  font-size: 1rem;
  line-height: 1.8;
  text-align: left;
  color: #888888;
  padding: 1rem 0 0 0 ;
}
.circle {
  width: 4rem;
  height: 4rem;
  background: #f9b707;
  border-radius: 50%;
  margin: 2rem 0 0 2rem;
}
.box2-img {
  width:2.6rem;
  height: 2.6rem;
  margin: 0.5rem 0.5rem 0.5rem 0.7rem;
}
.project {
  margin-top: 1rem;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #f9b707;
}
.heading-thired {
  position: relative;
}
.heading-thired h2 {
  font-size: 1rem;
  padding: 5rem 1rem 9rem 1rem;
  text-align: center;
  color: #ffffff;
  font-family: "Noto Sans", sans-serif;
}
.btn-white {
  background: #ffff;
  color: #333333;
  font-size: 0.7rem;
  font-family: "Noto Sans", sans-serif;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  border-radius: 0.4rem;
  width: 8rem;
  height: 2.5rem;
  padding: .7rem;
}
.line3 {
  position: absolute;
  color: white;
  width: 30%;
  height: 0.15rem;
  background: white;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.background-imgs {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.box-3 {
  position: relative;
  width: 25%;
  height: 8rem;
  background-image: url("../../assets/p32.png");
  background-size: 100% 100%;
}
.box-4 {
  position: relative;
  width: 25%;
  height: 8rem;
  background-image: url("../../assets/p33.png");
  background-size: 100% 100%;
}
.box-5 {
  position: relative;
  width: 25%;
  height: 8rem;
  background-image: url("../../assets/p34.png");
  background-size: 100% 100%;
}
.box-6 {
  position: relative;
  width: 25%;
  height: 8rem;
  background-image: url("../../assets/p35.png");
  background-size: 100% 100%;
}
.box-7 {
  position: relative;
  width: 25%;
  height: 8rem;
  background-image: url("../../assets/p36.png");
  background-size: 100% 100%;
}
.box-8 {
  position: relative;
  width: 25%;
  height: 8rem;
  background-image: url("../../assets/p37.png");
  background-size: 100% 100%;
}
.box-9 {
  position: relative;
  width: 25%;
  height: 8rem;
  background-image: url("../../assets/p38.png");
  background-size: 100% 100%;
}
.box-10 {
  position: relative;
  width: 25%;
  height: 8rem;
  background-image: url("../../assets/p39.png");
  background-size: 100% 100%;
}
.boxes-para {
  font-size: 0.6rem;
  text-align: left;
  color: #fff;
  padding: 2rem 0.5rem 0.5rem 0.2rem;
}
.btn-view {
  color: #fff;
  font-size: 0.4rem;
  font-family: "Noto Sans", sans-serif;
  position: absolute;
  top: 70%;
  left: 41%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.managers-heading {
  position: relative;
}
.managers-heading h1 {
  font-size: 1.3rem;
  padding: 4rem 0 0 0;
  font-family: "Noto Sans", sans-serif;
  text-align: center;
  color: #333333;
}
.managers-section {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.box-man {
  width: 8rem;
  height: 20rem;
  margin: 0 1rem 0 1rem;
}
.man-img {
  width: 7rem;
  height: 10rem;
}
.box-man h2 {
  font-size: 1rem;
  text-align: center;
  color: #333333;
}
.box-man h3 {
  font-size: 0.7rem;
  text-align: center;
  color: #f9b707;
}
.box-man p {
  font-size: 0.8rem;
  padding: .5rem 0 0 0;
  color: #888888;
  text-align: center;
}
.line4 {
  position: absolute;
  color: #f9b707;
  width: 35%;
  height: 0.15rem;
  background: #f9b707;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.testmonial-section {
  margin: 6rem 0 0 0;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url("../../assets/p23.jpg");
  background-size: 100% 100%;
}
.box-11 {
  position: relative;
  width: 47%;
  height: 30%;
  border-radius: 1rem;
  border: 1px solid white;
  margin: 1rem 0.1rem 1rem 0.1rem;
}
.box-11 p {
  padding: 5rem 0.5rem 0 0.5rem;
  text-align: left;
  font-size: 0.8rem;
  color: #dfdfdf;
  font-family: "Noto Sans", sans-serif;
}
.box-11 h3 {
  padding: 0 0.5rem 0 0.5rem;
  text-align: left;
  font-size: 0.7rem;
  color: #f9b707;
  font-family: "Noto Sans", sans-serif;
}

.man1-img {
  position: absolute;
  width: 35%;
  height: 35%;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.form-heading {
  margin: 2rem;
  position: relative;
}
.line5 {
  position: absolute;
  color: #f9b707;
  width: 35%;
  height: 0.2rem;
  background: #f9b707;
  top: 22%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.form-heading h1 {
  font-size: 1.5rem;
  padding: 3rem 0 0 0;
  text-align: center;
  color: #333333;
  font-family: "Noto Sans", sans-serif;
}
.form-section {
  margin: 1rem;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
/* Style the input container */
.input-container {
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  background: #ececec 0% 0% no-repeat padding-box;
}

/* Style the form icons */
.icon {
  border: 1px solid #ececec;
  padding: 0.4rem;
  background: #ececec 0% 0% no-repeat padding-box;
  color: white;
  min-width: 4rem;
  text-align: center;
  width: 2rem;
  height: 3.3rem;
}

/* Style the input fields */
.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  background: #ececec 0% 0% no-repeat padding-box;
}

.input-field:focus {
  border: 2px solid #ececec;
}

/* Set a style for the submit button */
.btn-send {
  background-color: #f9b707;
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  margin: 0 0 3rem 0;
}

.btn-send:hover {
  opacity: 1;
}
@media screen and (min-width: 800px) {
  .slider-section{
  position: relative;
}
.line-slider{
  position: absolute;
  color: #f9b707;
  width: 20%;
  height: 0.2rem;
  background: #f9b707;
  top: 1%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.img-fluid{
  height: 85vh;

}
.slider-section h1{
  font-size: 4rem;
  padding:1rem 0 1rem 0 ;
}

.slider-section p{
  display: flex;
  text-align: center;
 font-size: 1.7rem;
  padding:0 0 18rem 7rem;
}
.btn-contact1 {
  position: absolute;
  display: flex;
  top: 60%;
  left: 50%;
  width: 10rem;
  height: 3rem;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background: #f9b707;
  color: white;
  font-size: 1rem;
  padding: .6rem 0 0 2rem;
  font-family: "Noto Sans", sans-serif;
  border-radius: 0.4rem;
}
  .about-section1 {
    display: none;
  }
  .about-section {
    margin: 1rem;
  }
  .box-about1 {
    display: none;
  }
  .box-about2{
    display: flex;
     margin: 5rem 1rem 0 3rem;
    
    width: 33rem;
    height: 33rem;
  }
  .box-img1{
    height: 30rem;
    width: 30rem;
   
  }
  .heading-first {
    width: 40rem;
    height: 38rem;
    position: relative;
   
    margin: 1rem 3rem 0 0;
  }
  .heading-first h1 {
    font-size: 2.5rem;
    padding: 2.5rem 0 0 0;
    text-align: left;
  }
  .heading-first h3 {
    font-size: 1.5rem;
    padding: 1rem 0 0 0;
    line-height: 1.5;
    text-align: left;
  }
  .heading-first p {
    font-size: 1.2rem;
    line-height: 1.8;
    padding: 1rem 0 0 0;
    text-align: left;
  }
  .line1 {
    top: 2%;
    left: 18%;
  }
  .btn-about {
    top: 90%;
    left: 13%;
    width: 10rem;
    height: 3rem;
    font-size: 1.1rem;
  }
  .project-layout {
    margin-top: 3rem;
    justify-content: center;
  }
  .box-1 {
    width: 12rem;
    height: 28rem;
  }
  .box-1 h1 {
    font-size: 3.5rem;
    padding: 11rem 0 0 0;
  }
  .box-1 p {
    font-size: 1rem;
    text-align: center;
    color: white;
    font-family: "Noto Sans", sans-serif;
  }
  .heading-second {
    margin-top: 3rem;
  }
  .heading-second h1 {
    font-size: 2.5rem;
    padding: 2rem 0 0 0;
  }
  .line2 {
    width: 18%;
  }
  .services-section {
    margin-top: 3rem;
    justify-content: center;
  }
  .box-2 {
    border: none;
    width: 28rem;
    height: 18rem;
    margin: 0 1rem 3rem 1rem;
  }
  .box-2 h1 {
    font-size: 1.8rem;
    padding: 1rem 0.5rem 0 0;
  }
  .box-2 p {
    font-size: 1.3rem;
    padding: 1rem 0.5rem 0 0;
    line-height: 1.5;
  }
  .circle {
    width: 7rem;
    height: 7rem;
    margin: 1rem;
  }
  .box2-img {
    width: 5rem;
    height: 5rem;
    margin: 0.5rem 0.5rem 0.5rem 1rem;
  }
  .project {
    margin-top: 2rem;
  }
  .heading-thired {
    width: 40rem;
    height: 25rem;
  }
  .heading-thired h2 {
    font-size: 1.6rem;
    padding: 8rem 1rem 7rem 1rem;
  }
  .btn-white {
    width: 10rem;
    height: 3rem;
    font-size: 1.1rem;
    padding: 0.7rem 0 0 0;
  }
  .line3 {
    width: 40%;
    top: 18%;
    left: 50%;
  }
  .box-3 {
    height: 15rem;
  }
  .box-4 {
    height: 15rem;
  }
  .box-5 {
    height: 15rem;
  }
  .box-6 {
    height: 15rem;
  }
  .box-7 {
    height: 15rem;
  }
  .box-8 {
    height: 15rem;
  }
  .box-9 {
    height: 15rem;
  }
  .box-10 {
    height: 15rem;
  }
  .boxes-para {
    font-size: 1.5rem;
    text-align: center;
    color: #fff;
    padding: 5rem 0 0 0;
  }
  .boxes-para:hover {
    font-size: 1.7rem;
    color: #f9b707;
    padding: 5rem 0 0 0;
  }
  .btn-view {
    font-size: 1rem;
    top: 85%;
    left: 50%;
  }
  .btn-view:hover {
    color: #f9b707;
    font-size: 1.2rem;
  }
  .managers-heading h1 {
    font-size: 2.5rem;
    padding: 7rem 0 0 0;
  }
  .line4 {
    width: 28%;
    top: 42%;
    left: 50%;
  }
  .box-man {
    width: 30rem;
    height: 28rem;
    margin: 0 2rem 0 1rem;
  }
  .man-img {
    width: 17rem;
    height: 17rem;
    margin: 0 0 0 7rem;
  }
  .box-man h2 {
    font-size: 1.6rem;
  }
  .box-man h3 {
    font-size: 1rem;
  }
  .box-man p {
    font-size: 1.3rem;
    text-align: center;
  }
  .box-11 {
    width: 28%;
    height: 20rem;
    border-radius: 1rem;
    border: none;
    margin: 8rem 2rem 8rem 2rem;
  }
  .box-11 p {
    padding: 9rem 0.5rem 0 0.5rem;
    text-align: center;
    font-size: 1.3rem;
  }
  .box-11 h3 {
    padding: 0 0.5rem 0 0.5rem;
    text-align: center;
    font-size: 1rem;
  }
  .man1-img {
    width: 40%;
    height: 40%;
    top: 24%;
    left: 50%;
  }
  .form-heading {
  margin-top: 4rem;
  
}
.line5 {
  width: 15%;
  top: 1%;
  left: 50%;
 
  
}
.form-heading h1 {
  font-size: 2.5rem;
  padding: 2rem 0 2rem 0;
  
}
.form-section{
    margin: 2rem; 
}
.input-container {
 
  width: 55rem;
  margin-bottom: 3rem;
  
 
}
.icon {
    border: 1px solid  #ECECEC;
  padding: .4rem;
  background: #ECECEC 0% 0% no-repeat padding-box;
  color: white;
  min-width: 4rem;
  text-align: center;
  width: 2.5rem;
  height: 3.8rem;
}

/* Style the input fields */
.input-field {
   width: 55rem;
  padding: 10px;
  
}

.input-field:focus {
  border: 2px solid  #ECECEC;
}

/* Set a style for the submit button */
.btn-send {
  background-color: #F9B707;
  color: white;
  padding: 15px 20px;
  margin: 1rem 0 2rem 21rem;
 font-size: 1.4rem;
   width: 13rem;
  
}

}
</style>
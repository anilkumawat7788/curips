<template>
  <div class="main-container">
    <headers />
    <div class="services-section">
      <div class="heading-first">
        <h1>SERVICES</h1>
        <hr class="line" />
        <p>The featured services of CURIPe include the following</p>
      </div>
    </div>
    <div class="numbers-section">
      <div class="box-1">
        <span class="special-circle">
          <h1>01</h1>
        </span>
        <h2>Preparation of Structure Plans / Regional Plan / Master Plans for regions / cities and towns.</h2>
      </div>
      <div class="box-1">
        <span class="special-circle">
          <h1>02</h1>
        </span>
        <h2>Consultancy services and feasibility reports including designs.</h2>
      </div>
    </div>
    <div class="layout-gery">
    <div class="types-section">
      <div class="box-2">
        <img class="box-imgs" src="@/assets/p1.png" />
        <h1>HOUSING LAYOUT</h1>

        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
      <div class="box-2">
        <img class="box-imgs" src="@/assets/p2.png" />
        <h1>GROUP HOUSING</h1>

        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>

      <div class="box-2">
        <img class="box-imgs" src="@/assets/p3.png" />
        <h1>ENVIRONMENTAL IMPACT ASSEMENTS</h1>

        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
      <div class="box-2">
        <img class="box-imgs" src="@/assets/p4.png" />
        <h1>TRAFFIC AND TRANSPORTATION</h1>

        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>

      <div class="box-2">
        <img class="box-imgs" src="@/assets/p5.png" />
        <h1>INTEGRATED TOWNSHIP</h1>

        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
      <div class="box-2">
        <img class="box-imgs" src="@/assets/p6.png" />
        <h1>GIS SERVICES</h1>

        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>

      <div class="box-2">
        <img class="box-imgs" src="@/assets/p7.png" />
        <h1>MULTIPLEX</h1>

        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
      <div class="box-2">
        <img class="box-imgs" src="@/assets/p8.png" />
        <h1>OTHER ALLIED SERVICES</h1>

        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
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
.services-section {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-image: none;
}
.heading-first {
  margin: 0;
  position: relative;
}
.heading-first h1 {
  font-size: 1.5rem;
  padding: 3rem 0 0 0;
  
  font-family: "Noto Sans", sans-serif;
  text-align: center;
  color: #333333;
}
.heading-first p {
  font-size: 1.2rem;
  line-height: 1.8;
  padding:1.5rem .5rem 1rem  .5rem;
  font-family: "Noto Sans", sans-serif;
  text-align: center;
  color: #333333;
}
.line {
  position: absolute;
  color: #f9b707;
  width: 35%;
  background: #f9b707;
  height: .15rem;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.numbers-section {
  position: relative;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}
.box-1 {
  position: relative;
  height: 20rem;
  width: 20rem;
 
  margin: 0;
}

.special-circle h1 {
  position: absolute;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 10px #00000017;
  font-size: 2.5rem;
  font-family: "Noto Sans", sans-serif;
  color: #f9b707;
  padding: 2.2rem 1rem 1rem 2.2rem;
  top: 1rem;
  left: 6rem;
}
.box-1 h2 {
  font-size: 1.2rem;
  padding: 11rem 1rem 1rem 1rem;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
}
.layout-gery{
  margin: 2rem 0 0 0;
    background: #F8F8F8 0% 0% no-repeat padding-box;
opacity: 1;
}
.types-section {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.box-2 {
  margin: 2rem 0 0 0;
  height: 27rem;
  width: 11rem;
}
.box-imgs {
  width: 8rem;
  height: 8rem;
  border-radius: 15%;
  margin: 1rem 1rem 1rem 1rem;
}
.box-2 h1 {
  font-size: 1rem;
  line-height: 1.8;
  padding: 1rem 0 1rem 1rem;
  text-align: left;
  font-family: "Noto Sans", sans-serif;
}
.box-2 p {
  font-size: 0.8rem;
  line-height: 1.8;
  padding: 0 1rem 1rem 1rem;
  color: #707070;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
}
@media screen and (min-width: 800px) {
  .services-section {
    background-image: url("../../assets/p9.jpg");
    background-size: 100% 110%;
    
  }
  .heading-first {
    margin: 0;
  }
  .heading-first h1 {
    font-size: 2.5rem;
    padding: 6rem 0 0 0;
  }
  .heading-first p {
    font-size: 1.5rem;
    padding: 3rem 0 12rem 0;
  }
  .line {
    width: 30%;
     top: 32%;
     height: .2rem;
  }
  .numbers-section {
 
  margin-top: 3rem;
  
}
.box-1 {
  position: relative;
  height: 20rem;
  width: 36rem;
 
  margin: 0;
}
.special-circle h1 {
 
  top: 1rem;
  left: 14rem;
}
.box-1 h2 {
  font-size: 1.5rem;
  padding: 11rem 1rem 1rem 1rem;
  
}
.box-2 {
  margin: 2rem 2rem 0 2rem;
 
  height: 28rem;
  width: 20rem;
}
.box-2 h1 {
  font-size: 1.5rem;
  padding: 1rem 0 0 1rem;
  line-height: 1.5;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
}
.box-2 p {
  font-size: 1rem;
  padding: .5rem 1rem 3rem 1rem;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
}
.box-imgs {
  width: 10rem;
  height: 10rem;
  border-radius: 15%;
  margin: 1rem 1rem 1rem 5rem;
}
}
</style>
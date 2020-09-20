<template>
  <div class="main-container">
    <div class="footer-main">
      <div class="footer-left1">
        <h1>Construction Types</h1>
        <p>
          Housing layouts
          <br />Group Housing
          <br />Environmental Impact
          <br />Assessment
          <br />Traffic & Transportation
          <br />Integrated Township
          <br />GIS Services
          <br />Multiplex
          <br />Other Allied Services
        </p>
      </div>
      <div class="footer-left2">
        <h1>Recent Constructions</h1>
        <p>
          Housing layouts
          <br />Group Housing
          <br />Environmental Impact
          <br />Assessment
        </p>
      </div>
      <div class="footer-center">
        <h1>Address Location</h1>
        <p>Door no, Area, Place City Bangalore Karnataka 565656</p>
        <ul>
          <li>support@curip.in</li>
          <li>+91 – 80 – 26718106</li>
          <li>+91 – 80 – 32428391</li>
        </ul>
      </div>
      <div class="footer-right">
          
        <h1>PROJECT GALLERY</h1>
         
          <div class="right-heading">
          <div class="right-imgs">
               <img class="smaill-img" src="@/assets/p40.png" />
              </div>
               <div class="right-imgs">
               <img class="smaill-img" src="@/assets/p2.png" />
              </div>
               <div class="right-imgs">
               <img class="smaill-img" src="@/assets/p8.png" />
              </div>
               <div class="right-imgs">
               <img class="smaill-img" src="@/assets/p41.png" />
              </div>
               <div class="right-imgs">
               <img class="smaill-img" src="@/assets/p3.png" />
              </div>
               <div class="right-imgs">
               <img class="smaill-img" src="@/assets/p42.png" />
              </div>
               </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: ""
      },
      learns: [
        { text: "Select learning mode", value: null },
        "ONLINE",
        "OFFLINE"
      ],
      learns1: [
        { text: "Select your area of interest", value: null },
        "Design Verification",
        "Physical Design",
        "Static Timing Analysis",
        "Design For Test",
        "Cloud Computing",
        "Embedded and IOT"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.Name = "";
      this.form.lastName = "";
      this.form.phone = "";
      this.form.learn = null;
      this.form.text = "";
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<style scoped>
.footer-main {
  margin-top: 0;
  position: relative;
  background: #272727 0% 0% no-repeat padding-box;
border: 1px solid #707070;
opacity: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.footer-left1 {
  width: 17rem;
  height: 20rem;
  margin: 0 4rem 3rem 2rem;

}
.footer-left1 h1 {
  font-size: 1.6rem;
font-family: "Noto Sans", sans-serif;
  padding: 0 0 0 1rem;
 color: #FFFFFF;
}
.footer-left1 p {
  font-size: 1.2rem;
  text-align: left;
  padding: 1rem;
  color: #FFFFFF;
}
.footer-left2 {
  width: 19rem;
  height: 20rem;
  margin: 0 2rem 3rem 2rem;
  
}
.footer-left2 h1 {
  font-size: 1.6rem;
font-family: "Noto Sans", sans-serif;
  padding: 0 0 0 1rem;
 color: #FFFFFF;
}
.footer-left2 p {
  font-size: 1.2rem;
  text-align: left;
  padding: 1rem;
 color: #FFFFFF;
}

.footer-center {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 20rem;
  height: 20rem;
  margin: 0 2rem 3rem 2rem;
  
}

.footer-center h1 {
  font-size: 1.6rem;
  text-align: left;
 color: #FFFFFF;
  font-family: "Noto Sans", sans-serif;
  padding: 0 0 0 3rem;
}

.footer-center p {
  font-size: 1.2rem;
  text-align: center;
  color: #FFFFFF;
  padding: 0 1rem 0 1rem;
}
.footer-center ul li{
    margin: 0 0 0 5rem;
    font-size: 1.2rem;
    color: #FFFFFF;
}
.footer-right {
     
  width: 21rem;
  height: 20rem;
  margin: 0 2rem 3rem 4rem;
}
.footer-right h1 {
  font-size: 1.6rem;
font-family: "Noto Sans", sans-serif;
  padding: 0 0 1rem 1rem;
  color: #FFFFFF;
}
.right-heading{
 position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.right-imgs{
    width:5rem;
    height: 8rem;
    margin: 0 .5rem 0 .5rem;
}
.smaill-img{
   width:5rem;
    height: 5rem; 
}



@media screen and (max-width: 800px) {
  .footer-main {
    margin-top: 0;
  }
  .footer-left1 {
    width: 13rem;
    height: 15rem;
    margin: 0 6rem 1rem 0;
    order: -1;
  }
  .footer-left1 h1 {
    font-size: 1.1rem;
  }
  .footer-left1 p {
    font-size: .8rem;
  }
  .footer-left2 {
    width: 14rem;
    height: 10rem;

    margin: 0 5rem 1rem 0;
    order: -1;
  }
  .footer-left2 h1 {
    font-size: 1.1rem;
  }
  .footer-left2 p {
    font-size: .8rem;
  }

  .footer-center {
    width: 16rem;
    height: 13rem;
    margin: 1rem 4rem 0 0;
  }
  .footer-center h1 {
    font-size: 1.1rem;
    text-align: left;
  
    padding: 0 0 0 1rem;
  }
  .footer-center p {
    font-size: .9rem;
    text-align: left;
    padding: 0 1rem 0 1rem;
    
  }
  .footer-center ul li{
    margin: 0 0 0 2rem;
    font-size: 1rem;
   
}
  .footer-right {
     
  width: 21rem;
  height: 15rem;
  margin: 1rem 1rem 0 0;
}
.footer-right h1 {
  font-size: 1.2rem;
text-align: center;
  padding: 0 0 1rem 0;
 
}
.right-imgs{
    width:4rem;
    height: 6rem;
    margin: 0 .5rem 0 .5rem;
}
.smaill-img{
   width:4rem;
    height: 4rem; 
}
}
</style>


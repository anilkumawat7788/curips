<template>
  <div class="main-container">
    <headers />
    <div class="contactimg"></div>
    <div class="contact-section">
      <div class="heading-first">
        <h1>CONTACT US</h1>
        <hr class="line" />
        <p>Center for urban and rural infrastructure planning ready to help at any time contact from below details</p>
      </div>
    </div>
    <div class="contact-details">
      <div class="contact-heading">
        <img class="loaction-img" src="@/assets/location.svg" />
        <p>
          No. 12, 1st Floor, 21st Main Road, Banashankari 2nd Stage,
          Opp: BDA Shopping Complex, Bangalore - 560 070.
        </p>
        <div>
          <h6>Phone</h6>
        </div>
        <div>
          <h5>+91 – 80 – 26718106 / 32428391</h5>
        </div>
        <div>
          <h6>FAX</h6>
        </div>
        <div>
          <h5>+91 – 80 – 26718767</h5>
        </div>
        <div>
          <h6>EMAIL</h6>
        </div>
        <div>
          <h5>support@curip.in</h5>
        </div>
      </div>
    </div>
    <div class="form-heading">
      <hr class="line1" />
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

        <button type="submit" class="btn">SEND</button>
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
.contactimg {
  background-image: url("../../assets/p27.png");
  background-size: 110% 125%;
  height: 15vh;
}
.contact-section {
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
  padding: 1rem 0 0 0;
  font-family: "Noto Sans", sans-serif;
  text-align: center;
  color: #333333;
}
.heading-first p {
  line-height: 1.7;
  font-size: 1.2rem;
  padding:2rem .5rem .5rem .5rem;
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
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.line1 {
  position: absolute;
  color: #f9b707;
  width: 35%;
  background: #f9b707;
  height: .2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.contact-details {
  margin: 1rem;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.contact-heading {
  width: auto;
  height: 27rem;
  position: relative;
}
.contact-heading p {
  font-size: 1rem;
  line-height: 1.8;
  color: #333333;
  text-align: center;
  padding: 6rem 0.5rem 1.5rem 0.5rem;
}
.contact-heading h6 {
  font-size: 1.1rem;
  color: #f9b707;
  text-align: center;
}
.contact-heading h5 {
  font-size: 1rem;
  color: #333333;
  text-align: center;
}
.loaction-img {
  position: absolute;
  width: 3rem;
  height: 3rem;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.form-heading {
  margin: 1rem;
  position: relative;
}
.form-heading h1 {
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem 0 3rem 0;
  font-family: "Noto Sans", sans-serif;
  color: #333333;
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
.btn {
  background-color: #f9b707;
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.btn:hover {
  opacity: 1;
}

@media screen and (min-width: 800px) {
  .contactimg {
    display: none;
  }
  .contact-section {
    background-image: url("../../assets/p28.png");
    background-size: 100% 110%;
  }
  .heading-first {
    margin: 0;
    width: 56rem;
  }
  .heading-first h1 {
    font-size: 2.5rem;
    padding: 6rem 0 0 0;
  }
  .heading-first p {
    font-size: 1.5rem;
    padding: 4rem 0 12rem 0;
  }
  .line {
    width: 28%;
    background: #f9b707;
    height: 0.2rem;
    top: 29%;
    
  }
  .line1 {
    width: 15%;
    background: #f9b707;
    height: 0.2rem;
    top: 55%;
  }
  .contact-details {
    margin: 1rem;
  }
  .contact-heading {
    width: 38rem;
    height: 27rem;
  }
  .contact-heading p {
    font-size: 1.4rem;
    color: #333333;

    text-align: center;
    padding: 4rem 0.5rem 1.5rem 0.5rem;
  }
  .contact-heading h6 {
    font-size: 1.4rem;
    color: #f9b707;
    text-align: center;
  }
  .contact-heading h5 {
    font-size: 1.3rem;
    color: #333333;
    text-align: center;
  }
  .loaction-img {
    width: 5rem;
    height: 5rem;
    top: 2%;
  }
  .form-heading {
    margin: 1rem;
  }
  .form-heading h1 {
    font-family: "Noto Sans", sans-serif;
    font-size: 2rem;
    padding: 0.5rem 0 2rem 0;
  }
  .form-section {
    margin: 2rem;
  }
  .input-container {
    width: 55rem;
    margin-bottom: 3rem;
  }
  .icon {
    border: 1px solid #ececec;
    padding: 0.4rem;
    background: #ececec 0% 0% no-repeat padding-box;
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
    border: 2px solid #ececec;
  }

  /* Set a style for the submit button */
  .btn {
    background-color: #f9b707;
    color: white;
    padding: 15px 20px;
    margin: 1rem 0 2rem 21rem;
    font-size: 1.4rem;
    width: 13rem;
  }
}
</style>
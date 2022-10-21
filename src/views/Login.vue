<template>
    <navbar />
    <div class="login">
      <header>
        <div class="header-content">
          <h2>TREES AND PLANTS</h2>
          <div class="line"></div>
          <h1>Login Now</h1>
          <a href="#login" class="ctn">Click Login</a>
        </div>
      </header>
      <section class="form-section">
        <div class="form-img" id="login">
          <img src="@/assets/image/login-form.jpg" alt="" />
        </div>
        <div class="form-content">
          <div class="form-form">
            <h2>Login</h2>
  
            <div class="form-input">
              <span>Email</span>
              <input v-model="email" ref="email" type="email" />
            </div>
            <div class="form-input">
              <span>Password</span>
              <input v-model="password" :type="passwordFieldType" ref="password" type="password" />
              <button @click="switchVisibility"  class="btn">Show / Hide Password</button>
            </div>
            <div class="remember">
              <label
                ><input type="checkbox" v-model="checkRemember" />Remember
                me</label
              >
            </div>
            <div class="form-input">
              <input
                @click="
                  login();
                "
                type="submit"
                value="Sign In"
              />
            </div>
            <div v-if="error" class="toast toast-danger toast-font" role="alert"><img class="src-error" src="@/assets/image/warning.svg" alt="">&nbsp;&nbsp;{{error}}</div>
            <div class="form-input">
              <!-- <p>Forgot Password?</p> -->
              <button class="btn" @click="showPopup = true">
                Forgot Password?
              </button>
              <transition name="popup" appear>
                <div class="popup" v-if="(showPopup = false)"></div>
              </transition>
              <transition name="slide" appear>
                <div class="popup-show" v-if="showPopup">
                  <button class="btn-x" @click="showPopup = false">
                    &times;
                  </button>
                  <h1 class="popup-h1">Forgot Password</h1>
                  <p class="popup-p">Email</p>
                  <input type="email" />
  
                  <button class="ctn btn-submit" @click="showPopup = false">
                    Send
                  </button>
                </div>
              </transition>
            </div>
            <div class="form-input">
              <p>
                Don't have an account?
                <router-link to="/signup"> Sign up</router-link>
              </p>
            </div>
  
            <h3>Login with social media</h3>
            <ul class="form-social">
              <li><img src="@/assets/image/facebook.svg" alt="" /></li>
              <li><img src="@/assets/image/instagram.svg" alt="" /></li>
              <li><img src="@/assets/image/twitter.svg" alt="" /></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <FooterVue />
  </template>


<script>
import Navbar from "@/components/Navbar.vue";
import FooterVue from "@/components/Footer.vue";
import axios from "axios";
export default {
    name: "Login",
  
    components: {
      Navbar,
      FooterVue,
    },
    data() {
      return {
      email: "",
      password: "",
      checkRemember: "",
      showPopup: true,
      passwordFieldType: "password",
      error: "",
      }
    },
    methods: {
      login() {
        //   email: "eve.holt@reqres.in",
        //   password: "cityslicka"
        axios
          .post("https://reqres.in/api/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            // console.log("success", response);
            // console.log("BeforeifCheck", this.checkRemember);
            if (this.checkRemember) {
              console.log("ifCheck", this.checkRemember);
              const parsed = JSON.stringify({
                email: this.email,
                password: this.password,
                checkRemember: this.checkRemember,
              });
              localStorage.setItem("rememberLogin", parsed);
            } else {
              localStorage.removeItem("rememberLogin");
            }
            //localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({ name: "afterLogin" });
          })
          .catch((err) => this.error = " Error! Email And Password");
      },


      switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },

    

    },
    mounted() {
      if (localStorage.getItem("rememberLogin")) {
        // console.log("pageload");
        try {
          // console.log(JSON.parse(localStorage.getItem("rememberLogin")));
          var jsonLocal = JSON.parse(localStorage.getItem("rememberLogin"));
          this.email = jsonLocal.email;
          this.password = jsonLocal.password;
          this.checkRemember = jsonLocal.checkRemember;
        } catch (e) {
          //localStorage.removeItem("rememberLogin");
          console.log("RemoveRememberLogin");
        }
      }
    },
  
  };
  </script>
  
  <style lang="scss" scoped >
  @import "@/assets/scss/main.scss";
  
  .login {
    & header {
      background-image: url("@/assets/image/login-bg.jpg");
      & a {
        margin-bottom: 2rem;
      }
    }
  }
  
  .popup-show {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 100%;
    max-width: 400px;
    background-color: rgba(180, 120, 200, 0.9);
    border-radius: 20px;
    text-align: right;
    padding: 10px;
  }
  .btn-x {
    background-color: transparent;
    box-shadow: none;
    font-size: 40px;
    border: none;
    font-weight: 900;
  
    &:hover {
      color: $green-hover;
    }
  }
  
  .popup-h1 {
    color: $black;
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 15px;
    text-align: left;
  }
  
  .popup-p {
    color: $black !important;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: left;
  }
  
  .btn-submit {
    padding: 10px 15px !important;
    border: transparent;
    font-size: 16px;
    border-radius: 20px;
    cursor: pointer;
    margin: 15px;
  }
  .toast-font {
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
  }
  .src-error {
    width: 35px;
  }
//  .show-text {

//   position: relative;
//   padding: 1rem 1rem;
//   margin-bottom: 1rem;
//   border: 1px solid transparent;
//   border-radius: 0.25rem;
//   color: #05f132;
//   background-color: #d1e7dd;
//   border: #badbcc;
//   transition: opacity 0.7s ease;
//   text-align: center;
// }
 
  @media (max-width: 768px) {
  .form-section {
    & .form-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    & .form-content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      z-index: 1;

      & .form-form {
        width: 100%;
        padding: 40px;
        background: rgba(255, 255, 255, 0.6);
        margin: 50px;
        border-radius: 30px;

        & h3 {
          margin: 30px 0 10px;
        }
      }
    }
  }
}
</style>
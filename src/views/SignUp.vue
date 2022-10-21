<template>
    <navbar />
    <div class="signup">
      <header>
        <div class="header-content">
          <h2>TREES AND PLANTS</h2>
          <div class="line"></div>
          <h1>Sign Up Now</h1>
          <a href="#register" class="ctn">Click Sign Up</a>
        </div>
      </header>
      <section class="form-section">
        <div class="form-img" id="register">
          <img src="@/assets/image/login-form.jpg" alt="" />
        </div>
        <div class="form-content">
          <div class="form-form">
            <h2>Sign Up</h2>
           
            
              <div class="form-input">
                <span>Email</span>
                <input v-model="email" type="text" />
              </div>
              <div class="form-input">
                <span>Password</span>
                <input v-model="password1" type="password" />
              </div>
              <div class="form-input">
                <span>Confirm Password</span>
                <input v-model="password2" type="password" />
              </div>
              
              <div class="form-input dot">.</div>
              
              <div class="form-input sub">
                <input @click="signUp()" type="submit" value="Sign Up" />
              </div>
              
              <div class="form-input">
                <p>
                  You have an account?
                  <router-link to="/login"> Login</router-link>
                </p>
              </div>
              <h3>Signup with social media</h3>
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
  import axios from 'axios'; 

  export default {
    name: "SignUp",
    components: {
      Navbar,
      FooterVue,
    },
    data(){
        return{
            email:'',
            password1:'',
            password2:'',
        }
    },
 
    methods:{
        async signUp(){
            // console.log("signup",this.name,this.email,this.password)
            let result = await axios.post("http://localhost:3000/user",{
                email:this.email,
                password1:this.password1,
                password2:this.password2,
            });
            // console.log(result);
            if(result.status==201){
                // alert("sign Up Done")
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'testSignup'})
            }
        },
        
             
    },
    // mounted(){
    //     let user = localStorage.getItem('user-info');
    //     if(user){
    //         this.$router.push({name:'testSignUp'})
    //     }
    // }
  };
  </script>
  
  <style lang="scss" scoped >
  @import "@/assets/scss/main.scss";

  .signup {
    & header {
      background-image: url("@/assets/image/signup-bg.jpg");
      & a {
        margin-bottom: 2rem;
      }
    }
  }
 
  .dot {
    color: #fffff6;
  }

  @media  (max-width: 768px) {
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
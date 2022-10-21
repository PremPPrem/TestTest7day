<template>
    <div class="page">
      <h1>Welcome</h1>
      <router-link to="/login"><button class="ctn">Go Back</button></router-link>
    </div>

  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "testSignup",
    components: {},
    data() {
      return {
      };
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'login'})
        }
    }
  
  };
  </script>
  
  <style lang="scss">
  @import "@/assets/scss/main.scss";
  .page {
    text-align: center;
    border: 5px solid $black;
    padding: 3rem;
  
    font-size: 4.5rem;
  
    & button {
      margin-top: 2rem;
      font-size: 3rem;
      cursor: pointer;
      transition: background 0.3s ease-in-out;
      animation-fill-mode: both;
    animation-duration: 1s;
  
      &:hover {
        animation-name: shake;
      }
    }
  
    @keyframes shake {
    0%, 100% {
      transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% {
      transform: translateX(-10px); }
    20%, 40%, 60%, 80% {
      transform: translateX(10px); }
  }
  }
  </style>
  
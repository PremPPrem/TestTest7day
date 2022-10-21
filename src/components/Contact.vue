<template>
    <div class="menu-item" @click="isOpen = !isOpen" >
        <!-- <a href ='#'> -->
          {{ title }} 
        <!-- </a> -->
        <svg viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
        </svg>
        <transition name="fade" apear>
         <div class="sub-menu" v-if="isOpen">
            <div class="menu-item">
              <a href="https://www.facebook.com/" target="_blank" >Facebook</a>
            </div>
            <div class="menu-item">
              <a href="https://www.instagram.com/" target="_blank" >Instagram</a>
            </div>
            <div class="menu-item">
              <a href="https://twitter.com/" target="_blank" >Twitter</a>
            </div>
        </div>
        </transition>
    </div>
  </template>
  
  <script>
  export default {
  name: 'Contact',
  props: ['title'],
  data () {
    return {
      isOpen: false,
      }
    }
  }
  </script>
  
  <style>
  #navbar .menu-item svg {
    width: 10px;
    margin-left: 5px;
  }
  
  #navbar .menu-item .sub-menu {
  position: absolute;
  background:  rgba(0,0,0,0.7);
  top: 100%;
  top: calc(100% + 10.5px);
  left: 50%;
  transform: translateX(-50%);
  /* width: max-content; */
  border-radius: 1rem;
  /* padding: 1rem; */
  }
  .fade-enter-active,
  .fade-leave-active {
  transition: all .5s ease-out;
  }
  .fade-enter,
  .fade-leave-to {
  opacity: 0;
  }
  .sub-menu {
  cursor: pointer;
  }
  
  
  </style>
  
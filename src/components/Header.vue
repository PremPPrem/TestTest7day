<template>
    <header>
      <div class="header-content">
          <h2>Welcome To Website</h2>
          <div class="line"></div>
          <h1>TREES AND PLANTS</h1>
          <a href="#events" class="ctn">Learn More</a>
      </div>
    </header>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss" >
  @import '@/assets/scss/main.scss';
  header {
      width: 100vw;
      height: 100vh;
      background-image: url('@/assets/image/header-bg.jpg');
      background-position: bottom;
      background-size: cover;   
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .header-content {
      margin-bottom: 150px;
      color:$whitesmoke ;
      text-align: center;
  
      & h1 {
          font-size: 7vmin;
          margin-top: 50px;
          margin-bottom: 30px;
          // color: $whitesmoke;
      }
  
      & h2 {
          font-size: 4vmin;
      }
  }
  
  
  </style>
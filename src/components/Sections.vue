<template>
    <section class="events" id="events">
      <div class="title">
        <h1>Types of trees and plants</h1>
        <div class="line"></div>
      </div>
      <div class="row">
        <div class="col">
          <img src="@/assets/image/img1.jpg" alt="img1" />
          <h4>Garden</h4>
          <p class="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quia unde dolor earum, minima numquam!
          </p>
          <a href="#" class="ctn">Learn More</a>
        </div>
        <div class="col">
          <img src="@/assets/image/img2.jpg" alt="img1" />
          <h4>Flowerer</h4>
          <p class="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quia unde dolor earum, minima numquam!
          </p>
          <a href="#" class="ctn">Learn More</a>
        </div>
      </div>
    </section>
  
    <section class="herb">
    <div class="herb-content">
      <h1>Herbal Medicines</h1>
      <div class="line"></div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempore in sed nostrum ipsam officia, blanditiis saepe ipsum voluptatum mollitia, adipisci est, ut et obcaecati?</p>
      <a href="#" class="ctn">Learn More</a>
    </div>
    </section>
  
    <section class="shop">
      <div class="row">
          <div class="col content-col">
              <h1>Shopping trees and plants</h1>
              <div class="line"></div>
              <p class="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, pariatur veniam magni ex in quia error quibusdam, cumque voluptatem blanditiis ab perferendis incidunt reiciendis molestiae laboriosam deserunt reprehenderit cupiditate beatae!</p>
              <a href="#" class="ctn">Shop Now</a>
          </div>
          <div class="col image-col">
              <div class="image-gallery">
                  <img src="@/assets/image/img3.jpg" alt="">
                  <img src="@/assets/image/img4.jpg" alt="">
                  <img src="@/assets/image/img5.jpg" alt="">
                  <img src="@/assets/image/img6.jpg" alt="">
              </div>
          </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" >
  @import "@/assets/scss/main.scss";
  
  section {
    width: 80%;
    margin: 80px auto;
  }
  .title {
    text-align: center;
    font-size: 4vmin;
  }
  .row {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  
    & .col {
      display: flex;
      flex-direction: column;
      align-items: center;
  
      & img {
        width: 80%;
        border-radius: 10px;
      }
  
      & h4 {
        font-size: 3.5vmin;
        margin: 20px auto;
      }
  
      & .paragraph {
        padding: 0px 40px;
        font-size: 2vmin;
        // text-align: center;
        font-weight: 500;
      }
    }
  }
  .events .row {
    margin-top: 50px;
  }
  
  .events .ctn {
    margin-top: 30px;
  }
  
  .herb {
      width: 100%;
      height: 100vh;
      background-image: url('@/assets/image/sections-bg.jpg');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      opacity: 0.8;
  }
  .herb-content {
      width: 60%;
      padding: 50px;
      color: $whitesmoke;
      display: flex;
      align-items: center;
      flex-direction: column;
  
      & h1 {
          font-size:7vmin;
          // margin-bottom: 50px;
      }
  
      & .line {
          margin-bottom: 50px;
      } 
  
      & p {
          font-size: 2.5vmin;
          line-height: 1.5;
         
      }
      & .ctn {
          margin-top: 40px;
      }
  }
  
  .content-col {
      width: 40%;
  
      & h1 {
         font-size: 7vmin; 
      }
      & .line {
          margin-left: -1px;
      }
      & .paragraph {
          padding: 0;
          margin: 30px auto;
      }
      & .ctn {
          margin-left: -100px;
      }
  }
  .image-col {
      width: 60%;
  }
  
  .shop .image-gallery {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      align-items: center; 
  }
  .image-gallery img{
      max-width: 300px;
      margin: 10px;
  }
  
  
  
  </style>
  
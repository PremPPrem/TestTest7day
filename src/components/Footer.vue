<template>
    <footer class="footer">
      <div class="footer-read">
        <h1>Lorem ipsum dolor sit </h1>
        <a href="#" class="ctn">Learn More</a>
      </div>
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <h3>Trees And Plants</h3>
          </div>
          <div class="footer-copyright">
            <p>Copyright © 2030 Lorem ipsum dolor</p>
            <div class="footer-links">
              <ul class="footer-social">
            <li><img src="@/assets/image/facebook.svg" alt="" /></li>
            <li><img src="@/assets/image/instagram.svg" alt="" /></li>
            <li><img src="@/assets/image/linkedin.svg" alt="" /></li>
            <li><img src="@/assets/image/twitter.svg" alt="" /></li>
          </ul>
            </div>
          </div>
        </div>
        <div class="footer-links">
          <h3>Lorem, ipsum.</h3>
          <ul>
            <li>Plants</li>
            <li>Plants</li>
            <li>Plants</li>
            <li>Plants</li>
            <li>Plants</li>
          </ul>
        </div>
        <div class="footer-links">
          <h3>Lorem, ipsum.</h3>
          <ul>
            <li>Trees</li>
            <li>Trees</li>
            <li>Trees</li>
            <li>Trees</li>
            <li>Trees</li>
          </ul>
        </div>
        <div class="footer-links">
          <h3>contact</h3>
          <ul>
            <li>Email: aaaa@55mail.com</li>
            <li>Address: Lorem, ipsum dolor.</li>
            <li>Phone: 1234567890</li>
          </ul>
       
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss">
  @import "@/assets/scss/main.scss";
  
  footer {
      background-image: url('@/assets/image/footer-bg.jpg');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      
  
    & .footer-read {
      display: flex;
      justify-content: space-between;
      align-items: center;
       padding-bottom: 2vw;
      border-bottom: 0.01rem solid #757575;
      margin-bottom: 4vw;
  
      & h1 {
      //   color: $white;
        font-size: 2.8vh;
        width: 50%;
        margin-top: 2vh;
        margin-left: 0.5vw;
      }
  
      & a {
         margin-top: 2vh;
         margin-right: 0.5vw;
      }
  }
    & .footer-content {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1fr;
      // color: $white;
      padding-top: 1vw;
      gap: 2vw;
  
      & .footer-brand {
        display: flex;
        flex-direction: column;
        gap: 2vw;
  
        & .footer-logo {
          display: flex;
          align-items: center;
          gap: 1vw;
  
          & h3 {
            text-transform: uppercase;
            letter-spacing: 0.3vw;
            font-size: 2.5vh;
            margin-left: 0.5vw;
          
          }
        }
        & .footer-copyright  {
          & p {
          // color: $white;
          letter-spacing: 0.1vw;
          line-height: 4vh;
          font-size: 1.8vh;
          margin-left: 0.5vw;
          }
        }
      }
      & .footer-links {
          h3 {
          margin-bottom: 4vh;
          font-size: 2vw;
        }
        & ul {
          display: inline-block;
  
          & li {
              margin-bottom: 2vh;
          //   list-style: none;
            font-size: 1.2vw;
            cursor: pointer;
            padding-bottom: 1vh;
          //   color: $white;
          }
        }
        & .footer-social {
          display: flex;
          gap: 2vw;
          margin-top: 3vh;
          margin-left: 0.5vw;
          & img {
            height: 4vh;
          //   background: $white;
  
          }
        }
      }
    }
  }
  
  </style>
  
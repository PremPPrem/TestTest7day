<template>

    <nav id="navbar">
        <h1 class="logo">Trees <span>And</span> Plants</h1>
        <div class="menu-item"><router-link to="/">Home</router-link></div>
        <div class="menu-item"> <Contact title="Contact" /> </div>
        <div class="menu-item"><router-link to="/signup">Signup</router-link></div>
        <div class="menu-item ctn"><router-link to="/login">Login</router-link></div>
    </nav>

</template>

<script>
import Contact from '@/components/Contact.vue';

export default {
  name: 'navbar',
  components: {
    Contact
},

}
</script>
<style lang="scss" >
@import '@/assets/scss/main.scss';
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  padding: 1rem 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: $box-shadow;
  z-index: 9999;

 & .logo {
    color: $whitesmoke;
    font-size:2.5rem ;
    font-weight:bolder ;

    & span {
      color:  $green-hover;
    }
    
}

&  .menu-item {
  font-size: 1.7rem;
  color: $white;
  padding: 0.5rem 1.5rem;
  position: relative;
//   text-align: center;
  border-radius:30px;
//   display: flex;
cursor: default;



}

& .menu-item.active,
& .menu-item:hover {
 color: $whitesmoke;
 background: $green-hover;

}

& .menu-item a {
  color: $whitesmoke ;
}
}


</style>
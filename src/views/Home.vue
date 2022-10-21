<template>
  <div class="home">
<navbar />
<headerVue />
<sections />
<FooterVue />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import HeaderVue from '@/components/Header.vue'
import Sections from '@/components/Sections.vue'
import FooterVue from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    HeaderVue,
    Sections,
    FooterVue

  },
}
</script>
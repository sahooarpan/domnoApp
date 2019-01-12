<template>
<div>
<comp-header/>
  <div>
    <comp-featured/>
    <comp-menu/>    
  </div>
  <comp-footer/>
</div>
</template>
<script>
import compHeader from './components/Header-Footer/Header';
import compFooter from './components/Header-Footer/Footer';
import compFeatured from './components/Featured/index';
import compMenu from './components/Menu/index';
export default {
  components:{
    compHeader,
    compFooter,
    compFeatured,
    compMenu

  }
  
}
</script>
<style>
@import './assets/style.css'
</style>


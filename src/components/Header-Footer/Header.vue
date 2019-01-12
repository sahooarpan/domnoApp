<template>
  <header>
      <div class="container clear">
          <div class="logo">
              <img :src="logoIcon" alt="">
          </div>
          <div class="nav">
              <img :src="menuIcon" alt="" @click="showSidePanel=!showSidePanel"> 
              
          </div>
          <md-drawer 
              class="side-drawer"
              :md-right="true"
              :md-active.sync="showSidePanel" />
      </div>
  </header>

</template>
<script>
import Logo from '../../assets/images/logo.png'
import Menu from '../../assets/images/menu.png'
export default {
    data(){
        return{
            logoIcon:Logo,
            menuIcon:Menu,
            showSidePanel:false
        }
    }
    
}
</script>

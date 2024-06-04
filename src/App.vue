<script setup>
import LHeader from '@/components/layout/LHeader.vue'
import LSidebar from '@/components/layout/LSidebar.vue'
import { ref } from 'vue'

const isOpenMenu = ref(false)

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}


</script>

<template>
  <div class="container">
    <div
      class="sidebar-toggle"
      @click="toggleMenu"
    >&#5125</div>
    <LHeader />
    <LSidebar :openSidebar="isOpenMenu" />
    <div :class="['content', { content_full: !isOpenMenu }]">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
@import './styles/global.scss';

#app {
  font-family: Helvetica, sans-serif;
}

.content {

  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  padding-left: 50px;
  padding-top: 60px;
  transition: .2s;



  &_full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 35px;
  background: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }

}
</style>

<template>
  <div class="wrapper-header-app-bar">
    <h2 class="header-app-title accent-400"><slot name="header-app-text"/></h2>
    <div class="header-app-bar-img"
      @click="pageCloseClick">
      <img src="@/assets/page-close.svg" alt="close page">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoHeaderAppBar',
  methods: {
    pageCloseClick() {
      this.$emit('pageClose')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";

.wrapper-header-app-bar {
  height: 4.44rem;
  padding-inline: 0.62rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .header-app-title {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25;
  }
}
</style>
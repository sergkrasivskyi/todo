<template>
  <div class="wrapper-controls">
    <span>
      <slot name="todos">8 Todos{{}}</slot>
    </span>
    <span class="accent-400">
      <slot name="All">View all</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ToDoControlsHome'
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";

.wrapper-controls {
  padding-block: 1rem;
  padding-inline: 0.69rem;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2;
  // margin-top: 2.62rem;
  height: 3.125rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed rgba(34, 34, 34, 0.5);
}
</style>
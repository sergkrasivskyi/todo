<template>
  <div class="wrapper-item-header bg-neutral-200">
    <ToDoFormInput class="checkbox" type="checkbox" name="checkbox">
    </ToDoFormInput>
  
    <p class="title">{{taskDate}}</p>
    <p class="text">{{taskTitle}}</p>
  
  </div>
</template>

<script>
import { toDosList } from '@/main'
export default {
  name: 'ToDoItem',
  props: {
    taskDate: {type: String,
              default: '01.10.2022'},
    taskTitle: {type: String,
                default: "Learn Vue"}
  },

}
</script>

<style lang="scss" scoped>
.wrapper-item-header {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  height: 2.8rem;
  text-align: left;
  padding-inline: 0.56rem;
  border-radius: 4px;
  width: 100%;
  column-gap:0.5rem;
  & .checkbox {
    flex-basis: 5%;
  }

  & .title {
    flex-basis: 30%;
  }

  & .text {
    flex-basis: 65%;
  }
}
</style>
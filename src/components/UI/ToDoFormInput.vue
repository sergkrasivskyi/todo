<template>
  <div class="form-item">
    <label for="formInput">
      <div class="label-text">
        <slot name="label-text" />
      </div>
      <input class="form-input" id="formInput"
      v-bind="$attrs"
      :value="modelValue"
      @change="inputChange">
    </label>
  </div>
</template>

<script>
export default {
  name: 'ToDoFormInput',
  props: {
    modelValue: { type: [Number, String, Date], default: '' },
  },
  data() {
    return {
      
    }
  },
  methods: {
    inputChange(event) {
      this.$emit('update:modelValue', event)
    }
  },

}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/utility.scss";

.label-text {
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.2;

  color: $primary-color-600;
}

.form-input {
  background: $primary-color-200;
  border: 1px solid rgba(26, 184, 219, 0.85);
  border-radius: 10px;
  padding: 1rem;
  
  margin-top: 0.56rem;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.24;
}
</style>
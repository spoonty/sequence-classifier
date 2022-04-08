<template>
  <input
      :value="modelValue"
      @input="updateInput"
      class="input"
      type="text"
      placeholder="Enter numbers separated by spaces" />
</template>

<script>
export default {
  props: {
    modelValue: String
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
.input {
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 30px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 20px;
  outline: none;
}
.input:focus {
  border: 2px solid #633cd9;
}
</style>
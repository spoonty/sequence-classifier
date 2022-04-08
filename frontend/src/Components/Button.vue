<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.button {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #8cfca4;
  border: none;
  transition: .2s;
  cursor: pointer;
}
.button:active {
  background-color: #7edee1;
}
</style>
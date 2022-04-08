<template>
  <div class="answer">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.answer {
  position: absolute;
  font-family: Tahoma;
  font-weight: bold;
  font-size: 20px;
  cursor: default;
  color: black;
}
</style>
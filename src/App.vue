<template>
  <div class="wrapper">
    <Header></Header>
    <div class="input-wrapper">
      <Input></Input>
      <Button style="margin-left: 10px"></Button>
    </div>
  </div>
</template>

<script>
import Header from "@/Components/Header.vue";
import Input from "@/Components/Input.vue";
import Button from "@/Components/Button.vue";
export default {
  components: {Header, Input, Button}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body, html, .wrapper {
  height: 100%;
}
body {
  background: linear-gradient(-45deg, #90ea15, #31cdef, #c9f627, #3870ee);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.wrapper {
  display: flex;
}
.input-wrapper {
  align-self: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
}
</style>
<template>
  <div class="wrapper">
    <Header></Header>
    <div class="content">
      <div class="input-wrapper">
        <Input v-model="inputLine"></Input>
        <Button @click="this.confirmInput" style="margin-left: 10px"></Button>
      </div>
      <div class="result-space">
        <transition name="error">
          <Answer v-show="this.notValid">INCORRECT DATA!</Answer>
        </transition>
        <transition name="result">
          <Answer v-show="this.result" style="color: black;">{{this.result}}</Answer>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/Components/Header.vue";
import Input from "@/Components/Input.vue";
import Button from "@/Components/Button.vue";
import Answer from "@/Components/Answer.vue";
import {sequenceClassifier} from "@/Scripts/script.js";

export default {
  components: {Answer, Header, Input, Button},
  data() {
    return {
      inputLine: '',
      result: '',
      notValid: false,
    }
  },
  methods: {
    confirmInput() {
      let array = this.inputLine;
      array = array.replace(/[^\d\s]/g, '');
      array = array.replace(/\s+/g, ' ').trim();
      if (array !== this.inputLine) {
        this.notValid = true;
        this.result = '';
      }
      else {
        this.notValid = false;
        array = array.split(' ');
        array = array.map(x => parseInt(x));
        const result = sequenceClassifier(array);

        switch (result) {
          case 0:
            this.result = 'UNORDERED';
            break;
          case 1:
            this.result = 'STRICTLY INCREASING';
            break;
          case 2:
            this.result = 'NOT DECREASING';
            break;
          case 3:
            this.result = 'STRICTLY DECREASING';
            break;
          case 4:
            this.result = 'NOT INCREASING';
            break;
          case 5:
            this.result = 'CONSTANT';
            break;
        }
      }
    }
  }
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
  align-items: center;
  justify-items: center;
}
.content {
  display: grid;
  grid-template-rows: 8fr 4fr;
  width: 100%;
  height: 100px;
}
.input-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.result-space {
  display: flex;
  justify-content: center;
}

.error-enter-active,
.error-leave-to,
.result-enter-active,
.result-leave-to
{
  transition: all .5s ease;
}
.error-enter-from,
.error-leave-to,
.result-enter-from,
.result-leave-to
{
  opacity: 0;
  transform: translateY(-15px);
}
.error-move,
.result-move
{
  transition: transform .3s ease;
}
</style>
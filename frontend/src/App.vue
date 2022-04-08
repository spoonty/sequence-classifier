<template>
  <div class="wrapper">
    <Header></Header>
    <div class="content">
      <div class="input-wrapper">
        <Button @click="this.showPreviosResult" iconName="eye" style="margin-right: 10px; background-color: #9df2ff">
          <fa icon="eye" style="height: 21px" />
        </Button>
        <Input v-model="inputLine"></Input>
        <Button @click="this.confirmInput" iconName="check" style="margin-left: 10px">
          <fa icon="check" style="height: 21px" />
        </Button>
      </div>
      <div class="result-space">
        <transition name="error">
          <Answer v-show="this.notValid" style="color: #750e0e;">INCORRECT DATA!</Answer>
        </transition>
        <transition name="result">
          <Answer v-show="this.result">{{this.result}}</Answer>
        </transition>
        <transition name="previous">
          <Answer v-show="previous">{{this.previous}}</Answer>
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
import {sequenceClassifier} from "@/Scripts/script";
import {classifyByNumber} from "@/Scripts/classifyByNumber";
import {convert} from "@/Scripts/convert";
import {getLastResult, addResult} from "@/API/api";

export default {
  components: {Answer, Header, Input, Button},
  data() {
    return {
      inputLine: '',
      result: '',
      previous: '',
      notValid: false,
    }
  },
  methods: {
    async confirmInput() {
      this.previous = '';

      let array = this.inputLine;
      array = array.replace(/[^\d\s]/g, '');
      array = array.replace(/\s+/g, ' ').trim();

      if (array !== this.inputLine) {
        this.notValid = true;
        this.result = '';
        this.inputLine='';
      }
      else {
        this.notValid = false;
        array = array.split(' ');
        let convertedArray = array.map(x => parseInt(x));
        const result = classifyByNumber(sequenceClassifier(convertedArray));
        this.result = result;
        this.inputLine='';

        await addResult({input: convert(array), output: result})
          .then()
          .catch(error => console.log(error));
      }
    },
    async showPreviosResult() {
      await getLastResult()
        .then(response => {
          this.previous = `input: ${response.data.input}\toutput: ${response.data.output}`
        })

      this.result = '';
      this.notValid = '';
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
  grid-template-rows: 60px 30px;
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
.result-leave-to,
.previous-enter-active,
.previous-leave-to
{
  transition: all .5s ease;
}
.error-enter-from,
.error-leave-to,
.result-enter-from,
.result-leave-to,
.previous-enter-from,
.previous-leave-to
{
  opacity: 0;
  transform: translateY(-15px);
}
.error-move,
.result-move,
.previous-move
{
  transition: transform .3s ease;
}
</style>
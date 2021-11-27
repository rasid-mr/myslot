<template>
  <div>
    <h2>DynamicComponent Two.</h2>
    <input type="text" ref="input" />
    <button @click="setAlert">Submit</button>
    <teleport to="body">
      <error-handler v-if="inputIsInvalid">
        <h2>You should give some input.</h2>
        <p>Please give some input!!.</p>
        <button @click="okay">Okay</button>
      </error-handler>
    </teleport>
  </div>
</template>

<script>
import ErrorHandler from "./ErrorHandler";

export default {
  components: {
    ErrorHandler,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setAlert() {
      const inputData = this.$refs.input.value;
      if (inputData === "") {
        this.inputIsInvalid = true;
      }
    },
    okay() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped></style>

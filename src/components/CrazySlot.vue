<template>
  <div>
    <div class="third">
      <slot name="third"></slot>
      <!--// the order is really matter.This will be order in any other component -->
    </div>
    <h1 v-if="$slots.first">
      <slot name="first"></slot>
    </h1>
    <div v-if="$slots.second">
      <!--A minor parformance upgrade. If this slot isn't specified in the component they won't be render in the final code.  -->
      <slot name="second"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.third {
  color: lightblue;
  background-color: grey;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 32px;
}
</style>

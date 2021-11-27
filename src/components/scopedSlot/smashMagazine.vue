<template>
  <div>
    <ul v-for="goal in goals" :key="goal">
      <slot :item="goal" anotherProp="end user"
        >If nothing is provided than it will be executed.</slot
      >
      <!-- // scoped slot  -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the vue course", "Learn the vue!!"],
    };
  },
};
</script>

<style></style>

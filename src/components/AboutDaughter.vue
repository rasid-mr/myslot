<template>
  <div>
    <crazy-slot>
      <template #first>unknown</template>
      <template #third>I am sumon and i don't have any daughter.👧🏻👧🏻</template>
      <template #second
        >But I have a sister who is very much adorable to me. 👩🏻‍🦰👩🏻‍🦰👩🏻‍🦰</template
      >
    </crazy-slot>
  </div>
</template>

<script>
import CrazySlot from "./CrazySlot.vue";
export default {
  components: { CrazySlot },
};
</script>

<style></style>

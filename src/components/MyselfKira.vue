<template>
  <div>
    <crazy-slot>
      <template #first>Mohtasim Hasan</template>
      <template #third>
        My rely on father.
      </template>
      <template #second>
        <div class="card">
          <div class="card__header">
            <h1 class="card__header-primary">My mother is my Hero.</h1>
          </div>
          <div class="card__header-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum magni quae adipisci eaque sint voluptatibus quod error
              ab necessitatibus nulla.
            </p>
          </div>
        </div>
      </template>
    </crazy-slot>
  </div>
</template>

<script>
import CrazySlot from "./CrazySlot.vue";
export default {
  components: { CrazySlot },
};
</script>
<style scoped>
.card__header-body {
  color: royalblue;
}
</style>

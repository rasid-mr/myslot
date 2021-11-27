<template>
  <div class="container">
    <button @click="setComp('dynamic-component')">One</button>
    <button @click="setComp('dynamic-componentsec')">Two</button>
    <!-- <dynamic-component
      v-if="selectedCom === 'dynamic-component'"
    ></dynamic-component>
    <dynamic-componentsec
      v-if="selectedCom === 'dynamic-componentsec'"
    ></dynamic-componentsec> -->
    <keep-alive>
      <component :is="selectedCom"></component>
    </keep-alive>
    <another-one></another-one>
    <about-daughter></about-daughter>
    <myself-kira></myself-kira>
    <smash-magazine v-slot="{ item, anotherProp }">
      <!-- <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <h1>{{ slotProps.anotherProp }}</h1>
      </template> -->
      <h2>{{ item }}</h2>
      <h2>{{ anotherProp }}</h2>
    </smash-magazine>
  </div>
</template>

<script>
import AboutDaughter from "./components/AboutDaughter.vue";
import MyselfKira from "./components/MyselfKira.vue";
import AnotherOne from "./components/AnotherOne.vue";
import SmashMagazine from "./components/scopedSlot/smashMagazine.vue";
import DynamicComponent from "./components/scopedSlot/DynamicComponent.vue";
import DynamicComponentsec from "./components/scopedSlot/DynamicComponentsec";

export default {
  name: "App",
  components: {
    AboutDaughter,
    MyselfKira,
    AnotherOne,
    SmashMagazine,
    DynamicComponent,
    DynamicComponentsec,
  },
  data() {
    return {
      selectedCom: "dynamic-component",
    };
  },
  methods: {
    setComp(cmp) {
      this.selectedCom = cmp;
    },
  },
};
</script>

<style>
body {
  margin: 60px 0;
}
*,
*::after,
*::before {
  box-sizing: border-box;
}
.container {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
}
</style>

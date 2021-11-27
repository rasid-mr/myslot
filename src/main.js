import { createApp } from "vue";
import App from "./App.vue";
import CrazySlot from "./components/CrazySlot.vue";

const app = createApp(App);

// app.component("base-card", BaseCard);
app.component("crazy-slot", CrazySlot);

app.mount("#app");

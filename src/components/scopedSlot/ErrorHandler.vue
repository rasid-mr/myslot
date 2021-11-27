<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
export default {};
</script>

<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 30vh;
  left: 30%;
  width: 40%;
  border: 2px solid black;
  background-color: rgb(21, 196, 255);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.29);
  padding: 1rem;
  z-index: 4;
}
dialog::before {
  content: "";
  position: fixed;
  background-color: rgba(0, 0, 0, 0.29);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -31;
}
</style>

<template>
  <div id="app">
    <Approve />
  </div>
</template>

<script>
import Approve from "./components/approve";

export default {
  name: "App",
  components: {
    Approve,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>

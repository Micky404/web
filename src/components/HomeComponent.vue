<template>
    <div id="intro">

        <p>Basketball Revolution</p>
        <p>It's time to book a court </p>
        <p>New court available - Hoops Factory </p>

        </div>
        <div id="product-menu">
        <Courts />
    </div>
</template>
 
<script>
import Courts from "../components/Courts.vue";

export default {
  name: "Home",
  components: {
    Courts
  },
  data() {
    return {};
  },

  methods: {},

  computed: {}
};
</script>
<style>
#intro {
  background-image: url(../assets/images/basket-menu.jpg);
  background-position: bottom;
  background-size: cover;
  height: 300px;
  padding: 3%;
  width: 100%;
}
#intro p {
  color: white;
  font-size: 2em;
  font-weight: bold;
  text-shadow: black 0.1em 0.1em 0.2em;
}
#product-menu {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
section {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

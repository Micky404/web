<template>
  <article v-for="item in terrain " :key="item">

    <img class="product-img" v-bind:src=item.image alt="">
    
    <div class="product-description">
      <h3>Court {{ item.court }}</h3>
      <p>{{ item.adress }}</p>
      <p>Number of hoops : {{ item.hoop }} </p>
      <p> {{ item.price }} £</p>
      
      <router-link :to="{ name: 'product-details', params: { price: item.price, name: item.court, img: item.image, img2: item.image2, info: getStrFromList(item.information) }}">
        Book now
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: "Courts",

  data() {
    return {

     

      terrain: [
        {
          court: 1,
          hoop: 3,
          adress: "Playground Georges Brassens",
          image: require("@/assets/images/terrain_1.png"),
          image2: require("@/assets/images/terrain_1_nuit.png"),
          price: 10,
          information: [
           "net: no",
            "backboard : glass",
            "height: 10ft",
            "3 points line: yes",
            "surface material: concrete",
            "spring on the rim: yes",
         ],
        },
        {
          court: 2,
          hoop: 2,
          adress: "Playground de la Tour Eiffel",
          image: require("@/assets/images/terrain_2.png"),
          image2: require("@/assets/images/terrain_2_nuit.png"),
          price: 11,
          information: [
           "net: no",
            "backboard : glass",
            "height: 10ft",
            "3 points line: yes",
            "surface material: concrete",
            "spring on the rim: yes",
         ],
          
          

        },
        {
          court: 3,
          hoop: 2,
          adress: "Playground Duperré",
          image: require("@/assets/images/terrain_3.png"),
          image2: require("@/assets/images/terrain_3_nuit.png"),
          price: 12,
          information: [
           "net: no",
            "backboard : glass",
            "height: 10ft",
            "3 points line: yes",
            "surface material: concrete",
            "spring on the rim: yes",
         ],
          
        },
        {
          court: 4,
          hoop: 11,
          adress: "Hoops Factory ",
          image: require("@/assets/images/terrain_4.png"),
          image2: require("@/assets/images/terrain_4.png"),
          price: 13,
          information: [
           "net: no",
            "backboard : glass",
            "height: 10ft",
            "3 points line: yes",
            "surface material: concrete",
            "spring on the rim: yes",
         ],
        },
        {
          court: 5,
          hoop: 1,
          adress: "Playground Port de Vanves ",
          image: require("@/assets/images/terrain_5.png"),
          image2: require("@/assets/images/terrain_5_nuit.png"),
          price: 14,
          information: [
           "net: no",
            "backboard : glass",
            "height: 10ft",
            "3 points line: yes",
            "surface material: concrete",
            "spring on the rim: yes",
         ],
        },
        {
          court: 6,
          hoop: 2,
          adress: "Playground Jemmapes ",
          image: require("@/assets/images/terrain_6.png"),
          image2: require("@/assets/images/terrain_6_nuit.png"),
          price: 15,
          information: [
           "net: no",
            "backboard : glass",
            "height: 10ft",
            "3 points line: yes",
            "surface material: concrete",
            "spring on the rim: yes",
         ],
        },

        

      ]

        


    };
  },

  methods: {
    getStrFromList(array){
      let str = ""
      for(var index in array){
        str += array[index] + "\n";
        console.log(str)
      }
      console.log(str)
      return str;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap");

a {
  background: #c00;
  padding: 5px;
  color: white;
  border-radius: 10px;
  text-decoration: none;
}
a:hover {
  background: #8c0217;
}
article {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 40%;
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  margin-bottom: 30px;
}
h3 {
  font-size: 1rem;
  margin: 0px;
  font-family: "Original Surfer", cursive;
  color: #cc0000;
  line-height: 1.3em;
}
.product-img {
  opacity: 100%;
  width: 50%;
  position: relative;
  background-position: right;
}
.product-description {
  width: 50%;
  text-align: left;
  padding-left: 10px;
  color: white;
}
</style>

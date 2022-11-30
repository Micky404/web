<template>
    <div id="section-court-details">
      <!-- Section Panier -->
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th colspan="2">Your Booking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Number of person</td>
              <td>x {{ nbrCourt }}</td>
            </tr>
            <tr>
              <td>Code Promo</td>
              <td class="promo-code">
                <input v-model="promo" placeholder="Add a promotionol code" />
              </td>
            </tr>
            <tr>
              <td>Total to pay</td>
  
              <td>
                <transition name="bounce">
                  <div v-if="promo === 'uml'">
                    (-5£)
                    <span class="sale">{{ totalPrice }} £</span>
                    {{ totalPrice - 5 }} £
                  </div>
                  <div v-else>{{ totalPrice }} £</div>
                </transition>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Section Produit -->
      <div class="product-section">
        <!-- Image du produit -->
        <div class="product-image">
          <img :src="img" />
        </div>
  
        <!-- Description du produit -->
        <div class="product-description">
          <h1>
          Court  {{ title }}
            <img class="img-best-seller" src="../assets/images/best-seller.png" />
          </h1>
          <p v-show="notAvailable">Not available </p>
  
          <p v-if="sale">
            <span class="sale">{{ price }} £ </span>
            <span class="new-price"> {{ price - 5 }} £ PROMOTION</span>
          </p>
          <p v-else>
            <span class="price">{{ price }} £ </span>
          </p>
  
  
  
          <br />
          <strong>Information on the court </strong>
          <div>
            
          
            <span>
              {{ info }} 
              <br>
            </span>
          
          </div>
  
          <br />
          <div class="day">
            <strong>Different looks of the courts</strong>
            <ul>
              <li
                v-for="(light, index) in day"
                :key="index"
                @mouseover="updateImage(light.image)"
                :style="{ backgroundColor: light.color }"
              >
                {{ light.type }}
              </li>
            </ul>
          </div>
         
  
          <!-- Bouton d'ajout au panier -->
          <button
            v-bind:class="{ notActiveBtn: notAvailable }"
            @click="addProduct()"
            :disabled="notAvailable"
          >
            Click Here to Book 
          </button>
          <br /><br />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["name"],
    data() {
      return {
        product: "Court ",
        price: parseInt(this.$route.params.price) ,
        img: require("@/assets/images/terrain_3.png"),
        sale: false,
        notAvailable: false,
        info: this.$route.params.info,
        day: [
          {
            id: 1001,
            type: "By Day",
            color: "#db4006",
            image: this.$route.params.img
          },
          {
            id: 1002,
            type: "By night",
            color: "#e9cb8f",
            image: this.$route.params.img2
          }
        ],
        
      
        
        totalPrice: 0,
        nbrCourt: 0,
        promo: "",
        title: this.$route.params.name,
      
  
      };
    },
  
  
  
    methods: {
      addProduct() {
        if (this.sale) {
          this.nbrCourt += 1;
          this.totalPrice += this.price - 5;
        } else {
          this.nbrCourt += 1;
          this.totalPrice += this.price;
        }
      },
      updateImage(newLinkImage) {
        this.img = newLinkImage;
      }
    },
  
    
    
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
  
  button {
    background-color: #d0021b;
    border-color: #d0021b;
    color: #fff;
    cursor: pointer;
    font-family: "Oswald", sans-serif !important;
    line-height: 20px;
    margin: 20px auto;
    max-width: initial;
    min-width: initial;
    padding: 12px;
    text-align: center;
    text-transform: uppercase !important;
    width: 350px;
  }
  button:hover {
    background-color: #b6132c;
  }
  .notActiveBtn {
    background-color: #f6f6f6;
    border-color: #f6f6f6;
    color: gray;
    cursor: not-allowed;
    text-decoration: line-through;
  }
  .notActiveBtn:hover {
    background-color: #f6f6f6;
  }
  strong {
    font-size: 18px;
  }
  body {
    /*background-color: #f2f2f2;*/
    margin: 0px;
    font-family: "Source Sans Pro";
    font-size: 20px;
  }
  #section-product-details {
    display: flex;
    flex-direction: row-reverse;
    text-align: left;
  }
  h1 {
    text-transform: capitalize;
    font-size: 50px;
    font-weight: 700;
    margin: 0;
    line-height: 1.1;
    font-family: "Roboto", sans-serif;
  }
  .new-price {
    color: #c10a28;
    font-weight: bold;
    text-decoration: underline;
  }
  .sale {
    color: #616161;
    margin-right: 5px;
    text-decoration: line-through;
  }
  img {
    width: 90%;
    padding: 15px;
  }
  .product {
    margin: 40px;
    padding: 15px;
  }
  span.price {
    color: #c10a28;
    font-family: "Source Sans Pro";
    font-size: 24px;
    font-weight: 400;
  }
  
  .product-description {
    width: 47%;
  }
  .product-image {
    width: 53%;
  }
  .product-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 40px 0px 40px 40px;
    width: 80%;
  }
  .day li {
    list-style: none;
    padding: 5px 15px;
    margin: 10px 0px;
    width: fit-content;
    border-radius: 20px;
    color: white;
    cursor: pointer;
  }
  .day li:hover {
    color: black;
  }
  .img-best-seller {
    height: 60px;
    width: auto;
    padding: 0;
    margin-left: 10px;
  }
  .cart {
    width: 25%;
    margin-left: 70%;
    margin-top: 1vw;
  }
  table {
    border-collapse: collapse;
  }
  
  table,
  th,
  td {
    border: 1px solid black;
    text-align: right;
    padding-left: 10px;
    padding-right: 10px;
  }
  table thead th {
    text-align: center;
  }
  td {
    width: 170px;
  }
  td.promo-code {
    padding: 0;
  }
  
  /* Transition */
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
  </style>
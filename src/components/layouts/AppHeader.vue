<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient" style="margin-bottom: 50px;">
        <div class="container-fluid">
         
            <router-link class="navbar-brand" to="/">
                Basket Revolution
            </router-link>
             
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
 
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">
                            Home
                            <span class="visually-hidden">(current)</span>
                        </router-link>
                    </li>
 
                    <li class="nav-item" v-if="!login">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
 
                    <li class="nav-item" v-if="!login">
                        <router-link class="nav-link" to="/register">Register</router-link>
                    </li>
 
                    <li class="nav-item dropdown" v-if="login" >
                        <a class="nav-link dropdown-toggle" href="#" v-text="$user.name" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" v-on:click="doLogout" href="javascript:void(0);">Logout</a></li>
                        </div>
                    </li>
                    <li class="nav-item" v-if="login">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                </ul>
 
                
            </div>
        </div>
    </nav>
</template>
 
<script>
    //This will call an AJAX to the server to get the user???s data. It will attach the access token in the header so the server will know which user???s data needs to be fetched.
    import axios from "axios"
    import swal from "sweetalert2"
 
    export default {
        data() {
            return {
                login: false,
                user: null
            }
        },
 
        methods: {
            doLogout: async function () {
                const response = await axios.post(
                    this.$apiURL + "/logout",
                    null,
                    {
                        headers: this.$headers
                    }
                );
            
                if (response.data.status == "success") {
                    // remove access token from local storage
                    localStorage.removeItem(this.$accessTokenKey)
            
                    window.location.href = "/login"
                } else {
                    swal.fire("Error", response.data.message, "error");
                }
            },
 
            getUser: async function () {
                const self = this
 
                // check if user is logged in
                if (localStorage.getItem(this.$accessTokenKey)) {
                    const response = await axios.post(
                        this.$apiURL + "/getUser",
                        null,
                        {
                            headers: this.$headers
                        }
                    )
 
                    if (response.data.status == "success") {
                        // user is logged in
                        this.$user = response.data.user
                    console.log(this.$user)
                    } else {
                        // user is logged out
                        localStorage.removeItem(this.$accessTokenKey);
                    }
 
                    this.login = (localStorage.getItem(this.$accessTokenKey) != null);
                } else {
                    this.login = false;
                }
 
                global.user = this.user
            },
        },
 
        mounted: function () {
            this.getUser();
        }
    }
</script>
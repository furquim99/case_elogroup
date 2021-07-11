import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';

Vue.config.productionTip = false;

var firebaseConfig = {
    apiKey: "AIzaSyBmtmjeb4tDoQQ9_bVqjqvthLj8wvGI3Rg",
    authDomain: "vue-case.firebaseapp.com",
    projectId: "vue-case",
    storageBucket: "vue-case.appspot.com",
    messagingSenderId: "887445562280",
    appId: "1:887445562280:web:9c511706075a1840f7339d",
    measurementId: "G-JKN8QJ7DPD"
  };

  let app = '';
  firebase.auth().onAuthStateChanged(() => {
    if (!app) {
      app = new Vue({
        router,
        render: h => h(App)
      }).$mount('#app');
    }
  });
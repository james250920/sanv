
<script setup>
import { ref, onMounted } from 'vue';
import Regalo from '../components/regalo.vue'; // Usa PascalCase y la ruta correcta




const verMensaje = ref(false)
</script>

<template>
  
    <div v-show="!verMensaje" id="container-intro">
      <h2 id="from">Tienes un mensaje</h2>
      <svg width="49" viewBox="0 0 209 133" fill="none" xmlns="http://www.w3.org/2000/svg" height="47">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M105.197 67.9315L3.24739 9.07105C6.81792 3.60905 12.9875 0 20 0H189C196.478 0 202.997 4.10389 206.429 10.1823L105.197 67.9315ZM102.095 79.9273C101.833 79.8221 101.575 79.6971 101.324 79.5519L0 21.0526V113C0 124.046 8.9543 133 20 133H189C200.046 133 209 124.046 209 113V22.5306L108.212 80.0269C106.241 81.1512 103.901 81.0358 102.095 79.9273Z"
    :style="{ fill: 'rgb(33, 33, 33)' }"
  ></path>
</svg>

      <p>:3</p>
      <button @click="verMensaje = true">Ver</button>

      
    </div>
    <Regalo v-show="verMensaje" />
  </template>
  
  
  <style >
  @import url('https://fonts.googleapis.com/css?family=Comic+Neue:300,400,700&display=swap');

  * {
    font-family: "Comic Neue", sans-serif;
  } 
  :root {
    --var-color-primary: rgb(245, 245, 245);
    --var-color-secondary: rgb(33, 33, 33);
    --var-color-background: rgb(243, 243, 243);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Comic Neue", sans-serif;
    color: var(--var-color-secondary);
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: var(--var-color-background);
    flex-wrap: wrap;
  }
  
  #container-intro {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow: visible;
  }
  
  h2 {
    font-size: 1.7rem;
    font-weight: bold;
    opacity: 0.85;

  }
  
  p {
    font-size: 1.7rem;
    font-weight: bold;
    opacity: 0.85;

  }
  
  button {
 
    width: 12rem;
    height: 2.5rem;
    padding: 0.5rem;
    font-weight: bold;
    border: 3px solid var(--var-color-secondary);
    background-color: var(--var-color-secondary);
    color: var(--var-color-primary);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

  }
  
  button:hover {
    background-color: var(--var-color-primary);
    color: var(--var-color-secondary);
  }

    #container-intro {
        width: 270px;
        height: 270px;
        position: relative;
    }

  
  </style>



  
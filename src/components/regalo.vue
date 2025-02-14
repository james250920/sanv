<template>
    <main>
      <h1 id="title">Enviando abrazo virtual</h1>
      <div>
        <img id="me" src="../assets/penguin.svg" alt="Pingüino enviando un abrazo" />
      </div>
      <div class="box">
        <div class="loading-box"></div>
      </div>
      <h3 id="state-message">{{ stateMessage }}</h3>
      <h2 id="result">{{ resultMessage }}</h2>
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import sonido from "../assets/sonido.mp3";
  
  const stateMessage = ref("cargando...");
  const resultMessage = ref("\u00A0"); // Espacio en blanco
  
  onMounted(() => {
    setTimeout(() => {
      
      const audio = new Audio(sonido);
      audio.play();
      resultMessage.value = "¡Recibiste un abrazo!";

    }, 8200);
  
    setTimeout(() => {
      stateMessage.value = "\u00A0"; // Borra el texto de "cargando..."
    }, 6000);
  
    setTimeout(() => {
      stateMessage.value = "¡Listo!";
    }, 6200);
  });

  
  </script>
  
  <style>
  * {
    margin: 0;
    padding: 0;
    background-color: whitesmoke;
    font-family: "Comic Neue", cursive;
  }
  
  :root {
    --loading-width: 160px;
    --loading-height: 23px;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }
  
  .box {
    display: inline-block;
    border: solid black 4px;
    width: var(--loading-width);
    background-color: white;
    margin-top: 3px;
  }
  
  .loading-box {
    height: var(--loading-height);
    width: var(--loading-width);
    background-color: rgb(74, 71, 77);
    animation: loading 5s;
  }
  
  #state-message {
    font-size: larger;
    font-weight: bold;
    color: rgb(109, 109, 109);
  }
  
  @keyframes loading {
    0% {
      width: 0;
    }
    100% {
      width: var(--loading-width);
    }
  }
  
  #title,
  #result {
    margin-top: 8px;
    margin-bottom: 10px;
  }
  
  #me {
    margin-top: 8px;
    margin-bottom: 14px;
  }
  </style>
  
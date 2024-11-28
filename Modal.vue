<template>
    <div class="modal-backdrop">
      <div class="modal">
        <h2>Eredmény</h2>
        <p>Elért pontszám: {{ result.score }}</p>
        <p>Érdemjegy: {{ result.grade }}</p>
        <button @click="$emit('close')">Bezárás</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      result: Object,
    },
  };
  </script>
  
  <style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  button {
    margin-top: 20px;
  }
  </style>
  
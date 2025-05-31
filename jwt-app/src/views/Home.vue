<template>
  <div class="home">
    <h1>
      <q-icon class="fa-solid fa-house" /> Page d'accueil
    </h1>
    <q-btn
      color="primary"
      :to="{ name: 'about' }"
      icon-right="fa-solid fa-arrow-right"
      label="Aller à À propos"
    />
  </div>
</template>

<script setup>
</script>
<script setup>

</script>

<template>
  <button class="additional-info-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.additional-info-button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>
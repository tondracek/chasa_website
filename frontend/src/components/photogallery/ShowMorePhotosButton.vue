<script setup>

defineProps({
  isCollapsed: Boolean,
})
defineEmits([
  'click'
])
</script>

<template>
  <button class="sticky-button" @click="$emit('click')">
    {{ isCollapsed ? 'Show More' : 'Show Less' }}
  </button>
</template>

<style scoped>
.sticky-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.sticky-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.sticky-button:active {
  transform: scale(0.95);
}
</style>
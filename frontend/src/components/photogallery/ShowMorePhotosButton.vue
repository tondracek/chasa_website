<script setup>
import * as strings from "@/paraglide/messages"

defineProps({
  isCollapsed: Boolean,
})
defineEmits([
  'click',
])
</script>

<template>
  <button class="show-more-button" @click="$emit('click')">
    {{ isCollapsed ? strings.show_all() : strings.hide_gallery() }}
  </button>
</template>

<style scoped>
.show-more-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.show-more-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.show-more-button:active {
  transform: scale(0.95);
}
</style>
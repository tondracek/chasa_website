<script setup>
defineProps({
  name: String,
  date: String
});
</script>

<template>
  <div class="event-item">
    <span class="event-name">{{ name }}</span>
    <span class="event-date">{{ date }}</span>
  </div>
</template>

<style scoped>
.event-item {
  display: flex;
  flex-direction: column;
}

.event-name {
  font-weight: bold;
}

.event-date {
  color: #666;
  font-size: 0.9em;
}

</style>
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
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  min-width: 150px;
}

.event-item:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.event-name {
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
}

.event-date {
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

</style>
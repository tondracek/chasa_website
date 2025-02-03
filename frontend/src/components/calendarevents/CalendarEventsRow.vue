<template>
  <section class="calendar">
    <h2>{{ strings.upcoming_events() }}</h2>
    <div class="events-container">
      <CalendarEvent
          v-for="event in events"
          :key="event.name"
          :name="event.name"
          :date="event.date"
      />
    </div>
  </section>
</template>

<script setup lang="ts">

import CalendarEvent from "@/components/calendarevents/CalendarEvent.vue";
import * as strings from "@/paraglide/messages"

defineProps({
  events: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>
.calendar {
  background: #f8e6c0;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.events-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 600px) {
  .events-container {
    flex-direction: column;
  }
}

</style>

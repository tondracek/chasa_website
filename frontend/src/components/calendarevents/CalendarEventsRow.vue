<template>
  <section class="calendar">
    <div class="events-container">
      <CalendarEvent
          v-for="event in events"
          :name="event.name"
          :date="event.date"
      />
    </div>
  </section>
</template>

<script setup lang="ts">

import CalendarEvent from "@/components/calendarevents/CalendarEvent.vue";
import {onMounted, ref} from "vue";
import MyRepository from "@/data/MyRepository";

const events = ref<EventData[]>([]);

onMounted(async () => {
  events.value = await MyRepository.getEvents();
  console.log(await MyRepository.getEvents())
})

</script>

<style scoped>

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

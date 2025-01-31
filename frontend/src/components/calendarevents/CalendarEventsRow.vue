<template>
  <section class="calendar">
    <h2>Upcoming Events</h2>
    <div class="events-container">
      <CalendarEvent
          v-for="event in events"
          :name="event.name"
          :date="event.date"
      />
    </div>
  </section>
</template>

<script>
import CalendarEvent from "@/components/calendarevents/CalendarEvent.vue";

export default {
  name: "CalendarEvents",
  components: {CalendarEvent},
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<!--make events-container a row for pc and column for phones-->
<style scoped>

.calendar {
  background-color: red
}

.events-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .events-container {
    flex-direction: column;
  }
}

</style>

<template>
  <section class="calendar">
    <h2>Upcoming Events</h2>
    <div class="events-container">
      <div
          class="event-item"
          v-for="(event, index) in events"
          :key="index"
      >
        <span class="event-name">{{ event.name }}</span>
        <span class="event-date">{{ event.date }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CalendarEvents",
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.calendar {
  margin: 2rem 1rem;
}

.events-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.event-item {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border: 1px solid #ddd;
  min-width: 150px;
}

.event-name {
  font-weight: bold;
}

.event-date {
  color: #666;
  font-size: 0.9em;
}

/* Responsive for mobile */
@media (max-width: 600px) {
  .events-container {
    flex-direction: column;
  }
}
</style>

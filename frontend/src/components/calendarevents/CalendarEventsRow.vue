<template>
  <div class="container">
    <div class="events-container" v-bind:class="{ 'events-container-without-poster': posterSrc==null}">
      <CalendarEvent
          v-for="event in events"
          :name="event.name"
          :date="event.date"
      />
    </div>

    <div v-if="posterSrc!=null">
      <VueEasyLightbox
          :visible="posterFullscreenVisible"
          :imgs="posterSrc"
          :index="0"
          @hide="onPosterHide"
      />

      <img
          :src="posterSrc"
          alt="poster"
          class="poster"
          @click="posterFullscreenVisible = true"
          @error="posterSrc=null"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import CalendarEvent from "@/components/calendarevents/CalendarEvent.vue";
import {onMounted, ref} from "vue";
import MyRepository from "@/data/MyRepository";
import VueEasyLightbox from "vue-easy-lightbox";

const events = ref<EventData[]>([]);

const posterSrc = ref<string | null>(null);
const posterFullscreenVisible = ref(false);

onMounted(async () => {
  events.value = await MyRepository.getEvents();

  posterSrc.value = await MyRepository.getPosterSrc();
})

function onPosterHide() {
  posterFullscreenVisible.value = false;
}

</script>

<style scoped>

.container {
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
}

.events-container {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.events-container-without-poster {
  flex-direction: row;
}

.poster {
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
}

@media (max-width: 600px) {

  .container {
    margin-top: 2rem;
    gap: 2rem;
  }

  .events-container-without-poster {
    margin-top: 0;
    flex-direction: column;
  }
}

</style>

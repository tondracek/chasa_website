<script lang="ts">
import {Icon} from "@iconify/vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "AdditionalInfoButton",
  components: {Icon},
  emits: ["click"],
});
</script>

<template>
  <button class="additional-info-button" @click="$emit('click')">
    Další informace
    <icon icon="mdi:keyboard-arrow-down"/>
  </button>
</template>

<style scoped>
.additional-info-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  color: #dddddd;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
</style>
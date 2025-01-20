<script lang="ts">
import {Icon} from "@iconify/vue";

export default {
  name: "AdditionalInfoButton",
  components: {Icon},
};
</script>

<template>
  <button class="additional-info-button">
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
}
</style>
<script setup lang="ts">
import type {Extension} from "@/types/Extension.ts";

const props = defineProps<{extension: Extension}>()
</script>

<template>
  <div class="card" v-if="!props.extension.is_deleted">
    <div class="card-body">
      <img class="card-image" :src="'src/assets/images/' + props.extension.image" alt="image of extension">
      <div class="card-title"><b>{{ props.extension.name }}</b></div>
      <div class="card-text">{{ props.extension.description }}</div>
    </div>
  </div>
</template>

<style scoped>
  .card{
    border-radius: 15px;
    background-color: color-mix(in srgb, #091540, white 20%);
    color: white;
  }
  .card-body{
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr 4fr;
    grid-auto-rows: 30px 100px;
    grid-template-areas: "img title"
                         "space text";
  }

  .card-title{
    grid-area: title;
  }
  .card-text{
    grid-area: text;
  }
</style>
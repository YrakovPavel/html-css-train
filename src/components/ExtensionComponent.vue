<script setup lang="ts">
import type {Extension} from "@/types/Extension.ts";
import {ref} from "vue";

const props = defineProps<{extension: Extension, mod: string}>()

const is_deleted = ref<boolean>(false);
const is_active = ref<boolean>(false);

function checkShow(){
  return ((!is_deleted.value) &&
      (props.mod === "all") ||
      (props.mod === "active" && is_active.value) ||
      (props.mod === "inactive" && !is_active.value))
}

</script>

<template>
  <div class="card" v-show="checkShow()">
    <div class="card-body">
      <img class="card-image" :src="'src/assets/images/' + props.extension.image" alt="image of extension">
      <div class="card-title"><b>{{ props.extension.name}}</b></div>
      <div class="card-text">{{ props.extension.description }}</div>
      <div class="card-buttons">
        <button type="button" class="btn btn-secondary" @click="is_deleted = !is_deleted">Remove</button>
        <form class="form-check form-switch">
          <input class="form-check-input" type="checkbox" @click="is_active = !is_active">
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card{
    border-radius: 15px;
    background-color: #1F2434;
    border-color: #4D5164;
  }
  .card-body{
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr 4fr;
    grid-auto-rows: 30px 60px 50px;
    grid-template-areas: "img title"
                         "space text"
                         "button button";
  }

  .card-title{
    grid-area: title;
    color: #F0F2F7;
  }
  .card-text{
    grid-area: text;
    color: #B9C0D6;
  }
  .card-buttons{
    margin-top: 12px;
    grid-area: button;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn{
    border-radius: 20px;
    background-color: #1f2535;
    border-color: #4D5164;
  }

  .form-check-input{
    padding: 10px 18px;
  }
</style>
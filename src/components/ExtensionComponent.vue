<script setup lang="ts">
import type {Extension} from "@/types/Extension.ts";
import images from "@/images.ts";
import {ref} from "vue";

const props = defineProps<{extension: Extension, mod: string}>()

const is_deleted = ref<boolean>(false);
const is_active = ref<boolean>(false);

function checkShow(){
  return ((!is_deleted.value) &&
      ((props.mod === "All") ||
      (props.mod === "Active" && is_active.value) ||
      (props.mod === "Inactive" && !is_active.value)))
}


</script>

<template>
  <div class="card" v-show="checkShow()">
    <div class="card-body">
      <img class="card-image" :src="images[props.extension.image]" alt="image of extension">
      <div class="card-title"><b>{{ props.extension.name}}</b></div>
      <div class="card-text">{{ props.extension.description }}</div>
      <div class="card-buttons">
        <button type="button" class="btn btn-secondary" @click="is_deleted = !is_deleted"><b>Remove</b></button>
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
    background-color: var(--main-card-color);
    border-color: var(--secondary-card-color);
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
    color: var(--card-title-color);
  }
  .card-text{
    grid-area: text;
    color: var(--card-text-color);
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
    background-color: var(--main-bg-color);
    border-color: var(--secondary-bg-color);
    color: var(--font-color)
  }

  .form-check-input{
    padding: 10px 18px;
  }

  .form-check-input:checked{
    background-color: var(--main-button-active-color);
    border-color: var(--secondary-button-active-color);
    box-shadow: 0 0 0 0.25rem rgba(255, 87, 51, 0.25);
  }

  .form-check-input:focus{
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23B9B9B9'/%3e%3c/svg%3e");
    border-color: gray;
    box-shadow: none;
  }

  .form-check-input:checked:focus{
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    border-color: var(--secondary-button-active-color);
    box-shadow: 0 0 0 0.25rem rgba(255, 87, 51, 0.25);
  }

  @media(max-width: 768px) {
    .card-body{
      gap: 12px
    }
    .card-text{
      margin-top: -12px;
    }
  }

</style>
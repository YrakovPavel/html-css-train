<script setup lang="ts">
import ExtensionComponent from "@/components/ExtensionComponent.vue";
import extensionArray from "../data.json";
import Logo from "@/assets/images/logo.svg";
import Moon from "@/assets/images/icon-moon.svg";
import Sun from "@/assets/images/icon-sun.svg";
import {ref, shallowRef} from "vue";

const extensionActiveMod = ref<string>("All");
const theme = shallowRef<string>(Sun);

function switchTheme(){
  let themeTone: string;
  if (theme.value === Sun){
    theme.value = Moon;
    themeTone = "light";
  }
  else{
    theme.value = Sun;
    themeTone = "dark";
  }
  document.documentElement.setAttribute('data-theme', themeTone);
}
</script>

<template>
  <div class="main-frame">
    <header>
      <div class="card card-logo">
        <Logo class="logo"></Logo>
        <button type="button" class="btn btn-secondary" id="LightDarkSwitch" @click="switchTheme">
          <component :is="theme"></component>
        </button>
      </div>
    </header>
    <main>
      <div>
        <nav>
          <h2><b>Extensions List</b></h2>
          <div class="buttons-group">
            <button
                v-for="mod in ['All', 'Active', 'Inactive']"
                type="button"
                class="btn btn-secondary btn-categories"
                :class="{active: extensionActiveMod === mod}"
                @click="extensionActiveMod = mod">
              <b>{{mod}}</b>
            </button>
          </div>
        </nav>
        <div class="all-elements">
          <ExtensionComponent
              v-for="(item, index) in extensionArray"
              :extension="item"
              :mod = "extensionActiveMod"
              :key="index">
          </ExtensionComponent>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>

.main-frame{
  width: 100%;
  height: 100%;
  padding: 24px;
}

h2{
  color: var(--font-color);
}

header{
  margin-bottom: 32px;
  width: 100%;
}

.card-logo{
  background-color: var(--main-bg-color);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.logo{
  margin-left: 24px;
  margin-bottom: 12px;
  margin-top: 12px;
  color: var(--font-color);
}

#LightDarkSwitch{
  border-radius: 15px;
  box-sizing: border-box;
  margin-top: 8px;
  margin-right: 16px;
  margin-bottom: 8px;
  background-color: var(--secondary-bg-color);
  border-color: var(--secondary-bg-color);
}

#LightDarkSwitch:hover{
  background-color: var(--hover-color);
  border-color: var(--hover-color);
}

nav{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
}

.buttons-group{
  display: flex;
  padding: 6px;
  gap: 12px;
}

.btn-categories{
  border-radius: 20px;
  background-color: var(--main-bg-color);
  border-color: var(--secondary-bg-color);
  color: var(--font-color);
}

.btn-categories.active{
  background-color: var(--main-button-active-color);
  border-color: var(--secondary-button-active-color);
  color: var(--button-active-text-color);
}

.all-elements{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
</style>

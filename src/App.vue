<script setup lang="ts">
import ExtensionComponent from "@/components/ExtensionComponent.vue";
import extensionArray from "../data.json";
import Logo from "@/assets/images/logo.svg";
import {ref} from "vue";

const extensionActiveMod = ref<string>("All");

</script>

<template>
  <div class="main-frame">
    <header>
      <div class="card card-logo">
        <Logo class="logo"></Logo>
      </div>
    </header>
    <main>
      <div>
        <nav>
          <h2>Extensions List</h2>
          <div class="buttons-group">
            <button
                v-for="mod in ['All', 'Active', 'Inactive']"
                type="button"
                class="btn btn-secondary"
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
  color: white;
}

header{
  margin-bottom: 32px;
  width: 100%;
}

.card-logo{
  background-color: #1f2535;
  border-radius: 20px;
}

.logo{
  margin-left: 24px;
  margin-bottom: 12px;
  margin-top: 12px;
  color: white;
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

.btn{
  border-radius: 20px;
  background-color: #1f2535;
  border-color: #4D5164;
}

.btn.active{
  background-color: #FF6B6B;
  border-color: #FF856B;
  color: #060B23;
}

.all-elements{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
</style>

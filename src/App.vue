<script setup lang="ts">
import ExtensionComponent from "@/components/ExtensionComponent.vue";
import type {Extension} from "@/types/Extension.ts";
import Logo from "@/assets/images/logo.svg";

const extensionArray: Extension[] = [];

extensionArray.push({
  name: "DevLens",
  description: "Quickly inspect page layouts and visualize element boundaries.",
  image: "logo-devlens.svg",
  is_deleted: false
})
extensionArray.push({
  name: "StyleSpy",
  description: "Instantly analyze and copy CSS from any webpage element.",
  image: "logo-devlens.svg",
  is_deleted: false
})
extensionArray.push({
  name: "SpeedBoost",
  description: "Optimizes browser resource usage to accelerate page loading.",
  image: "logo-speed-boost.svg",
  is_deleted: false
})
extensionArray.push({
  name: "JSONWizard",
  description: "Formats, validates, and prettifies JSON responses in-browser.",
  image: "logo-json-wizard.svg",
  is_deleted: false
})
extensionArray.push({
  name: "TabMaster",
  description: "Pro Organizes browser tabs into groups and sessions.",
  image: "logo-tab-master-pro.svg",
  is_deleted: false
})
extensionArray.push({
  name: "ViewportBuddy",
  description: "Simulates various screen resolutions directly within the browser.",
  image: "logo-viewport-buddy.svg",
  is_deleted: false
})
extensionArray.push({
  name: "Markup Notes",
  description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
  image: "logo-markup-notes.svg",
  is_deleted: false
})
extensionArray.push({
  name: "GridGuides",
  description: "Overlay customizable grids and alignment guides on any webpage.",
  image: "logo-grid-guides.svg",
  is_deleted: false
})
extensionArray.push({
  name: "Palette Picker",
  description: "Instantly extracts color palettes from any webpage.",
  image: "logo-palette-picker.svg",
  is_deleted: false
})
extensionArray.push({
  name: "LinkChecker",
  description: "Scans and highlights broken links on any page.",
  image: "logo-link-checker.svg",
  is_deleted: false
})
extensionArray.push({
  name: "DOM Snapshot",
  description: "Capture and export DOM structures quickly.",
  image: "logo-dom-snapshot.svg",
  is_deleted: false
})
extensionArray.push({
  name: "ConsolePlus",
  description: "Enhanced developer console with advanced filtering and logging.",
  image: "logo-console-plus.svg",
  is_deleted: false
})
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
            <button type="button" class="btn btn-secondary">All</button>
            <button type="button" class="btn btn-secondary">Active</button>
            <button type="button" class="btn btn-secondary">Inactive</button>
          </div>
        </nav>
        <div class="all-elements">
          <ExtensionComponent
              v-for="(item, index) in extensionArray"
              :extension="item"
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
  width: 12%;
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

.all-elements{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
</style>

<script setup lang="ts">
import {
  Designer,
  Workbench,
  StudioPanel,
  CompositePanel,
} from '@dangojs/formily-arco-web-vue-prototypes/src'
import { createDesigner } from '@designable/core'
import Logo from './components/Logo.vue'

const engine = createDesigner()
</script>

<template>
  <div>
    <Designer :engine="engine">
      <Workbench>
        <StudioPanel>
          <template #logo>
            <Logo />
          </template>
          <CompositePanel> sdasdadsasdasd </CompositePanel>
        </StudioPanel>
      </Workbench>
    </Designer>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

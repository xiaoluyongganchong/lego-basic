<template>
  <h1>{{ store.state.user }}</h1>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
const store = useStore()
</script>
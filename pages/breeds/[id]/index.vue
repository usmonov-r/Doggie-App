<script setup lang="ts">
import { useDoggieStore } from '@/stores/data';

const route = useRoute();
const id = Number(route.params.id);
const breed = useDoggieStore().fetchedBreedsData[id];


</script>

<template>
  <div v-if="breed">
    <h1 class="font-bold block text-lg">{{ breed.name }}</h1> <br>
    <p>{{ breed.description  }}</p>
  <br>   
    <div v-for="(lifeSpan, i) in breed.life" :key="i">
      <p>Life Span: Min - {{ lifeSpan.min }} years, Max - {{ lifeSpan.max }} years</p>
    </div>
  </div>
  <div v-else>
    Loading ...  
  </div>
  <div class="flex items-center gap-x-6 mt-10">
    <div class="flex-1 h-2  bg-gray-200 rounded-full overflow-hidden">
    </div>
    <NuxtLink to="/breeds"><div class="btn-back">Back to breeds </div></NuxtLink>
    <NuxtLink to="/" class="btn-home"><div>Home </div></NuxtLink>
  </div>
</template>
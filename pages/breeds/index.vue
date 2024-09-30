<script setup lang="ts">
import  {useDoggieStore} from '@/stores/data';
import {ref} from 'vue'

const breeds = useDoggieStore()
const activeClass = ref('active')
onMounted(() => {
  if(breeds.fetchedBreedsData.length === 0){
    breeds.fetchBreeds();  
  }
});


const handleClickedFacts = (index:number) =>{
  breeds.markAsRead(index, 'breeds');
}
</script>

<template>
  <div class="flex  justify-center items-start">

    <ul>
      <div v-for="(breed, index) in breeds.fetchedBreedsData" :key="index" class="mb-4">
        <NuxtLink :to="{name: 'breeds-id', params: {id: index}}">
          <li @click="handleClickedFacts(index)"
            :class="breeds.readBreedsFacts.includes(index) ? activeClass : ''"
            class="border rounded-md border-emerald-500  truncate w-96 p-3  mb-2 hover:cursor-pointer">
          <h3 class="font-bold text-lg">{{ breed.name }}</h3>
          </li>
        </NuxtLink>
      </div>
    </ul>


    </div>
  <div class="flex items-center gap-x-6 mt-10">
    <div class="flex-1 h-2  bg-gray-200 rounded-full overflow-hidden">
    </div>
    <NuxtLink to="/" class="btn-home"><div>Home </div></NuxtLink>
  </div>

</template>

<style scoped>

.active{
  border-color: #06b6d4;
  border-width: 2px;
}

</style>
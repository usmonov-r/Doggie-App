<script setup lang="ts">
import  {useDoggieStore} from '@/stores/data';
import {ref} from 'vue';

const facts = useDoggieStore();
const activeClass = ref('active');

// Fetch data when the component is mounted
onMounted(() => {
  if(facts.fetchedData.length === 0){
    facts.fetchFacts();  // Trigger the fetch action to get data from the API
  }
});

const handleClickedFacts = (index:number) =>{
  facts.markAsRead(index, 'facts');
}

const reFetch = () =>{
  useDoggieStore().fetchFacts();
}
</script>

<template>
  <div v-if="facts">
  <div class="flex gap-y-2 justify-center items-start  ">
    <ul >
     <div v-for="(fact, index) in facts.fetchedData" :key="index">
       <NuxtLink  :to="{name: 'facts-id', params: {id: index }}">
        <li @click="handleClickedFacts(index)" 
        class="border rounded-md border-emerald-500  truncate w-96 p-3  mb-2 hover:cursor-pointer"
        :class="facts.readFacts.includes(index) ? activeClass : ''"> 
        {{ fact }} 
        
      </li>
    </NuxtLink> 
    </div>
    </ul>
  </div>

  </div>
  <div v-else class="font-bold">
    Loading ...  
  </div>
  
  <div class="flex items-center gap-x-6 mt-10">
    <div class="flex-1 h-2  bg-gray-200 rounded-full overflow-hidden">
    </div>
  <NuxtLink to="/" class="btn-home"><div>Home </div></NuxtLink>
    </div>
  <button  class="fixed bottom-5 right-5 
          bg-blue-500 text-white py-3
           px-6 rounded-full shadow-lg
           hover:bg-blue-600 " @click="reFetch">
  New Facts
</button>



</template>


<style scoped>

.active{
  border-color: #06b6d4;
  border-width: 2px;
}
</style>
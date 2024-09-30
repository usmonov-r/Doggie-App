<script setup lang="ts">
import  {useDoggieStore} from '@/stores/data';


const fact = useDoggieStore();
const route = useRoute();
const id = Number(route.params.id);


</script>
  
<template>
<div>



    {{ fact.fetchedData[id] }}
    <div class="flex items-center gap-x-6 mt-10">
      <div class="flex-1 h-2  bg-gray-200 rounded-full overflow-hidden">
      </div>
      <NuxtLink to="/facts"><div class="btn-back">Back to facts </div></NuxtLink>
      <NuxtLink to="/" class="btn-home"><div>Home</div></NuxtLink>
    </div>

</div>
</template>
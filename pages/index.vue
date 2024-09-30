<script setup lang="ts">


</script>

<template>
 <div class="flex flex-col justify-center items-center gap-y-6 pb-20">
  <!-- Facts and Breeds Section -->
  <div class="flex justify-center items-center gap-x-8">
    <NuxtLink to="/facts">
      <div class="btn-main">
        <h3>Facts</h3>
      </div>
    </NuxtLink>

    <NuxtLink to="/breeds">
      <div class="btn-main">
        <h3>Breeds</h3>
      </div>
    </NuxtLink>
  </div>

  <!-- About Section Link  -->
  <NuxtLink to="/about">
    <div class=" bg-sky-500 text-white 
            p-6 cursor-pointer  
            rounded-2xl w-[120px] mt-10
            font-bold
            text-xl
            text-center
            hover:bg-sky-400
            transform    shadow-xl transition duration-300 hover:scale-105
            ">
      <h3>About</h3>
    </div>
  </NuxtLink>
</div>




</template>
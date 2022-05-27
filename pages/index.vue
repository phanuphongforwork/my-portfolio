<script setup>
definePageMeta({
  layout: false,
});
</script>
<template>
  <div class="hero">
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="~/assets/images/profile1.jpg"
        class="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 class="text-5xl font-bold">My Portfolio</h1>

        <div class="flex flex-col lg:flex-row w-full mt-2">
          <div class="text-base mt-1">Let me introduce my self my name's</div>
          <div class="text-2xl text-primary lg:pl-2 pl-0">
            𝙋𝙝𝙖𝙣𝙪𝙥𝙝𝙤𝙣𝙜 𝙈𝙖𝙘𝙝𝙖𝙞 .
          </div>
        </div>

        <div class="flex flex-col lg:flex-row w-full mt-2">
          <div class="text-base mt-1">You can call me</div>
          <div class="text-2xl text-primary lg:pl-2 pl-0">𝙈𝙞𝙘𝙧𝙤𝙬𝙖𝙫𝙚 .</div>
        </div>
        <!-- <p class="my-2 text-xl">
          <span class="text-base">You can call me </span>
        
        </p> -->
        <p class="py-6">
          "𝘕𝘦𝘷𝘦𝘳 𝘨𝘪𝘷𝘦 𝘶𝘱 𝘰𝘯 𝘴𝘰𝘮𝘦𝘵𝘩𝘪𝘯𝘨 𝘺𝘰𝘶 𝘳𝘦𝘢𝘭𝘭𝘺 𝘸𝘢𝘯𝘵. 𝘏𝘰𝘸𝘦𝘷𝘦𝘳 𝘪𝘮𝘱𝘰𝘴𝘴𝘪𝘣𝘭𝘦 𝘵𝘩𝘪𝘯𝘨𝘴
          𝘮𝘢𝘺 𝘴𝘦𝘦𝘮, 𝘵𝘩𝘦𝘳𝘦'𝘴 𝘢𝘭𝘸𝘢𝘺𝘴 𝘢 𝘸𝘢𝘺. "
        </p>
        <nuxt-link to="/profile">
          <button class="btn btn-primary">Let's See!</button></nuxt-link
        >
      </div>
    </div>
  </div>
</template>

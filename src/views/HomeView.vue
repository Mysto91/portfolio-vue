<template>
  <div>
    <div class="w-full h-[680px] flex items-center justify-center">
      <div class="relative w-10 animate-spin-slow">
        <div class="absolute -top-40 -left-16 rounded-full w-40 h-40 bg-red-200 mix-blend-multiply blur-2xl" />
        <div class="absolute -top-20 left-10 rounded-full w-40 h-40 bg-purple-300 mix-blend-multiply blur-2xl" />
        <div class="absolute top-0 -left-16 rounded-full w-40 h-40 bg-cyan-200 mix-blend-multiply blur-2xl" />
        <div class="absolute -top-20 -left-40 rounded-full w-40 h-40 bg-orange-300 mix-blend-multiply blur-2xl" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  @keyframes spin-slow {
    to {
      transform: rotate(180deg);
    }
  }

  .animate-spin-slow {
    animation: spin-slow 15s linear infinite alternate;
  }
</style>

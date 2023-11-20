<template>
  <section class="
    px-10 pt-20 pb-14
    lg:flex
    sm:border border-black rounded-2xl"
  >
    <h3
      class="
      mt-4 mb-5
      text-3xl sm:text-4xl lg:text-6xl
      leading-[46px] sm:leading-[54px] lg:leading-[88px]
      font-medium"
    >
      Want to get in touch?
    </h3>
    <form>
      <div class="md:flex md:space-x-8">
        <div class="flex-1">
          <label
            for="name"
            class="text-sm font-medium text-gray-500"
          >
            Name
            <input
              type="text"
              id="name"
              name="name"
              class="mt-1 w-full h-14 px-4 rounded-lg"
              placeholder="Enter your name"
            />
          </label>
        </div>
        <div class="flex-1 mt-5 md:mt-0">
          <label
            for="email"
            class="text-sm font-medium text-gray-500"
          >
            Email Address
            <input
              type="text"
              id="email"
              name="email"
              class="mt-1 w-full h-14 px-4 rounded-lg"
              placeholder="Enter your email"
            />
          </label>
        </div>
      </div>
      <div class="mt-5">
        <label
          for="message"
          class="text-sm font-medium text-gray-500"
        >
          Email Address
          <textarea
            id="message"
            name="message"
            class="mt-1 w-full h-36 px-4 py-3 rounded-lg"
            placeholder="Enter your message"
          />
        </label>
      </div>
      <button class="
        mt-5
        w-36 lg:w-28
        btn
      ">
        Submit
      </button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactForm',
});
</script>

<template>
  <div class="container">
    <h1>Contact</h1>
    <ContactForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '@/components/ContactForm.vue';

export default defineComponent({
  name: 'ContactView',
  components: { ContactForm },
});
</script>

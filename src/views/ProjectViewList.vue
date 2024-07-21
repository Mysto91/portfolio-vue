<template>
  <div class="container">
    <h1>Mes projets</h1>

    <SearchInput
      :model-value="searchQuery"
      @update:modelValue="handleSearchChange"
      :debounce="300"
    />

    <ProjectList
      class="mt-10"
      :search-params="searchParams"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import ProjectList from '@/components/homepage/ProjectList.vue';
import { SearchParams } from '@/interfaces/searchParams';
import SearchInput from '@/components/SearchInput.vue';

export default defineComponent({
  name: 'ProjectView',

  components: {
    SearchInput,
    ProjectList,
  },

  setup() {
    const searchQuery = ref<string>('');

    const searchParams = computed<SearchParams>(() => ({
      search: searchQuery.value || undefined,
    }));

    function handleSearchChange(newSearchQuery: string): void {
      searchQuery.value = newSearchQuery;
    }

    return {
      searchQuery,
      searchParams,
      handleSearchChange,
    };
  },
});
</script>

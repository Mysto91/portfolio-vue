<template>
    <div class="w-full">
        <h1 class="my-5 text-5xl leading-[62px] font-medium">
            My experiences
        </h1>
        <ol class="relative ml-5 pl-6 space-y-10 border-l border-black">
        <li>
            <TimelineItem :is-current="true">
                <template #title>
                    Bimpli (Swile)
                </template>
                <template #icon>
                    <img src="images/bimpli.png" alt="">
                </template>
                <template #date>
                    2022
                </template>
                <template #content>
                    Développeur full stack ...
                </template>
            </TimelineItem>
        </li>
        <li>
            <TimelineItem>
                <template #title>
                    Orange Business Services
                </template>
                <template #icon>
                    <img src="images/orange.png" alt="">
                </template>
                <template #date>
                    2018 - 2022 (4 ans)
                </template>
                <template #content>
                    Développeur back end ...
                </template>
            </TimelineItem>
        </li>
        <li>
            <TimelineItem>
                <template #title>
                    Airbus Defense & Space (Stage)
                </template>
                <template #icon>
                    <img src="images/airbus.png" alt="">
                </template>
                <template #date>
                    2017 (5 mois)
                </template>
                <template #content>
                    Développeur de base de données
                </template>
            </TimelineItem>
        </li>
        </ol>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimelineItem from './TimelineItem.vue';

export default defineComponent({
    name: "ExperienceSection",

    components: { 
        TimelineItem,
    },
});
</script>

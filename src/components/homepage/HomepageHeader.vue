<template>
  <section>
    <div class="
      flex flex-col lg:flex-row
      lg:space-x-2
      space-y-10 sm:space-y-4"
    >
      <div>
        <h1>
          Un développeur passionné par la réalisation d'applications web
        </h1>

        <h3 class="my-2.5
            text-xl sm:text-2xl
            leading-[30px] sm:leading-[46px]
            font-extralight text-text"
        >
          Développeur sénior chez Ubiq. Précédemment développeur chez Swile.
        </h3>
      </div>

      <div class="flex-none flex justify-center items-center">
        <AuthorPicture
          class="
            flex-initial
            w-[200px] sm:w-[250px] md:w-[300px] lg:w-[330px]
            h-[200px] sm:h-[250px] md:h-[300px] lg:h-[330px]
            shadow-md"
        />
      </div>
    </div>

    <div class="mt-10 lg:mt-4 flex justify-center lg:justify-start">
      <FadeTransition>
        <TagsSkeleton v-if="isLoading" />

        <ul
          v-else-if="socialNetworks && socialNetworks.length"
          class="flex flex-wrap gap-2"
        >
          <li
            v-for="socialNetwork in socialNetworks"
            :key="`homepage-${socialNetwork.uuid}`"
          >
            <AppButtonTag @click="openInNewTab(socialNetwork.url)">
              <SocialNetworkIcon :social-network="socialNetwork.name" />

              <span>
               {{ socialNetwork.name }}
              </span>
            </AppButtonTag>
          </li>

          <li>
            <router-link :to="{ name: Routes.CONTACT }">
              <AppButtonTag>
                  <IconMail class="h-5 w-5"/>

                  <span>
                    etiennetran@hotmail.fr
                  </span>
              </AppButtonTag>
            </router-link>
          </li>
        </ul>
      </FadeTransition>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButtonTag from '@/components/AppButtonTag.vue';
import { openInNewTab } from '@/utils/window';
import IconMail from '@/components/icons/IconMail.vue';
import SocialNetworkIcon from '@/components/SocialNetworkIcon.vue';
import { useSocialNetworkStore } from '@/stores/useSocialNetworkStore';
import { storeToRefs } from 'pinia';
import FadeTransition from '@/components/FadeTransition.vue';
import TagsSkeleton from '@/components/skeletons/TagsSkeleton.vue';
import AuthorPicture from '@/components/AuthorPicture.vue';
import { Routes } from '@/enums/routes';

const socialNetworkStore = useSocialNetworkStore();
const { isLoading, socialNetworks } = storeToRefs(socialNetworkStore);
</script>

<template>
  <MenuButton @click="openMenu" />
  <TransitionRoot
    :show="isOpen"
    as="template"
    class="lg:hidden"
  >
    <Dialog @close="closeMenu">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-black/60 backdrop-blur z-[140]"
          aria-hidden="true"
        ></div>
      </TransitionChild>

      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="translate-y-full"
        enter-to="translate-y-0"
        leave="duration-300 ease-in"
        leave-from="translate-y-0"
        leave-to="translate-y-full"
      >
        <div class="
          fixed inset-0 z-[150]
          mt-10
          w-full h-full overflow-y-auto
          bg-background
          flex flex-col
          rounded-t-2xl"
        >
          <div class="w-full flex justify-end p-2">
            <button
              class="p-2"
              @click="closeMenu"
            >
              <IconClose class="text-primary h-14 w-14" />
            </button>
          </div>

          <div class="flex-grow flex items-center justify-center">
            <ul class="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <li>
                <MenuItem @click="openInNewTab(SocialNetworkUrl.INSTAGRAM)">
                  <template #icon>
                    <IconInstagram class="h-8 w-8" />
                  </template>

                  <template #title>
                    Instagram
                  </template>
                </MenuItem>
              </li>

              <li>
                <MenuItem @click="openInNewTab(SocialNetworkUrl.LINKEDIN)">
                  <template #icon>
                    <IconLinkedin class="h-8 w-8" />
                  </template>

                  <template #title>
                    Linkedin
                  </template>
                </MenuItem>
              </li>

              <li>
                <MenuItem @click="openInNewTab(SocialNetworkUrl.GITHUB)">
                  <template #icon>
                    <IconGithub class="h-8 w-8" />
                  </template>

                  <template #title>
                    Github
                  </template>
                </MenuItem>
              </li>

              <li>
                <MenuItem @click="openInNewTab(SocialNetworkUrl.FACEBOOK)">
                  <template #icon>
                    <IconFacebook class="h-8 w-8" />
                  </template>

                  <template #title>
                    Facebook
                  </template>
                </MenuItem>
              </li>

              <li>
                <router-link :to="{ name: Routes.CONTACT }">
                  <MenuItem @click="closeMenu">
                    <template #icon>
                      <IconDialog class="h-8 w-8" />
                    </template>

                    <template #title>
                      Contact
                    </template>
                  </MenuItem>
                </router-link>
              </li>
            </ul>
          </div>

        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MenuButton from '@/components/mobile/MenuButton.vue';
import { Dialog, TransitionChild, TransitionRoot } from '@headlessui/vue';
import IconClose from '@/components/icons/IconClose.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
import MenuItem from '@/components/mobile/MenuItem.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconDialog from '@/components/icons/IconDialog.vue';
import { openInNewTab } from '@/utils/window';
import { SocialNetworkUrl } from '@/constants/socialNetwork';
import { Routes } from '@/enums/routes';

export default defineComponent({
  name: 'ContactMenu',

  components: {
    IconDialog,
    IconFacebook,
    IconGithub,
    IconLinkedin,
    MenuItem,
    IconInstagram,
    IconClose,
    MenuButton,
    Dialog,
    TransitionChild,
    TransitionRoot,
  },

  setup() {
    const isOpen = ref<boolean>(false);

    function openMenu() {
      isOpen.value = true;
    }

    function closeMenu() {
      isOpen.value = false;
    }

    return {
      isOpen,
      openMenu,
      closeMenu,
      openInNewTab,
      SocialNetworkUrl,
      Routes,
    };
  },
});
</script>

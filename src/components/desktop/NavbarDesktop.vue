<template>
    <nav
      class="px-12 py-2"
    >
        <div class="h-auto flex justify-between">
          <NavbarWrapper class="px-0">
            <AppBrand />
          </NavbarWrapper>

          <NavbarWrapper>
            <NavigationLink :route="Routes.ABOUT">
              <template #title>
                À propos
              </template>
            </NavigationLink>

            <NavigationLink :route="Routes.CONTACT">
              <template #title>
                Contact
              </template>
            </NavigationLink>

            <NavigationLink :route="Routes.PROJECTLIST">
              <template #title>
                Mes projets
              </template>
            </NavigationLink>
          </NavbarWrapper>

          <NavbarWrapper class="!px-4">
            <NavbarBulletLink link="https://www.linkedin.com/in/etienne-tran/">
              <SocialNetworkIcon
                :social-network="SocialNetwork.LINKEDIN"
                class="w-4 h-4"
              />
            </NavbarBulletLink>

            <NavbarBulletLink link="https://github.com/Mysto91">
              <SocialNetworkIcon
                :social-network="SocialNetwork.GITHUB"
                class="w-4 h-4"
              />
            </NavbarBulletLink>
          </NavbarWrapper>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { Routes } from '@/enums/routes';
import { SocialNetwork } from '@/enums/socialNetwork';
import SocialNetworkIcon from '@/components/SocialNetworkIcon.vue';
import NavbarBulletLink from '@/components/desktop/NavbarBulletLink.vue';
import NavbarWrapper from '@/components/desktop/NavbarWrapper.vue';
import NavigationLink from '../NavigationLink.vue';
import AppBrand from '../AppBrand.vue';
</script>

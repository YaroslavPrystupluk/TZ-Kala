<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar class=" bg-white text-black rounded-borders shadow-2 justify-between">
        <div>
          <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
          <q-btn @click="$router.back()" flat icon="chevron_left">{{ $t("messages.back") }}</q-btn>
        </div>
        <div>
          <ToggleLanguage />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <div class="q-pa-md">
        <div class="avatar-wrapper">
          <q-avatar size="40px" font-size="24px" color="accent" text-color="warning" icon="sentiment_satisfied_alt" />
          <div class="name-account">
            <p class="user-name">John</p>
            <p class="account">{{ $t("messages.switchAccount") }}</p>
          </div>
        </div>

        <q-list class="boards-list">

          <!-- <EssentialLink v-for="link in linksListBoard" :key="link.title" v-bind="link" /> -->
          <q-btn-dropdown flat icon="grid_view" :label="$t('messages.board')">
            <q-list>
              <EssentialLink v-for="link in linksListBoard" :key="link.title" v-bind="link" />
            </q-list>
          </q-btn-dropdown>
        </q-list>

        <q-list class="bottom-menu">
          <EssentialLink v-for="link in linksListAccount" :key="link.title" v-bind="link" />
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EssentialLink, { EssentialLinkProps } from "components/EssentialLink.vue";
import ToggleLanguage from "components/ToggleLanguage.vue";

defineOptions({
  name: "MainLayout",
});

const linksListBoard: EssentialLinkProps[] = [
  {
    title: "messages.board",
    icon: "grid_view",
    link: "/board/1",
  },
  {
    title: "messages.board",
    icon: "grid_view",
    link: "/board/2",
  },
  {
    title: "messages.board",
    icon: "grid_view",
    link: "/board/3",
  },
];

const linksListAccount: EssentialLinkProps[] = [
  {
    title: "messages.help",
    icon: "help_outline",
    link: "/support",
  },
  {
    title: "messages.accountSettings",
    icon: "settings",
    link: "/account",
  },

];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

</script>

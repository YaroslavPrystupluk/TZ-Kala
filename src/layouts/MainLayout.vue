<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-black header-height custom-header">
      <q-toolbar class="justify-between q-pt-xl">
        <div class="wrapper-btn">
          <q-btn class="q-ml-md" flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
          <q-btn class="q-pl-xs" @click="$router.back()" flat icon="chevron_left">{{ $t("messages.back") }}</q-btn>
        </div>
        <div>
          <ToggleLanguage />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer :width=410 v-model="leftDrawerOpen" show-if-above bordered class="hide-scrollbar">
      <div class="container-drawer">
        <div class="avatar-wrapper">
          <q-avatar size="40px" font-size="24px" color="accent" text-color="warning" icon="sentiment_satisfied_alt" />
          <div class="name-account">
            <p class="user-name q-mb-none ">John</p>
            <p class="account">{{ $t("messages.switchAccount") }}</p>
          </div>
        </div>

        <q-list class="boards-list">
          <DropDownMenu v-for="link in listBoard" :key="link.title" @click="$router.push(link.link)" />
          <EssentialLink v-for="link in linksListBoard" :key="link.title" v-bind="link" />
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
import DropDownMenu from "src/components/DropDownMenu.vue";

defineOptions({
  name: "MainLayout",
});

const listBoard: EssentialLinkProps[] = [
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

const linksListBoard: EssentialLinkProps[] = [
  {
    title: "messages.newBoard",
    icon: "add_circle_outline",
    link: "/create-board",
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

<style lang="scss" scoped></style>

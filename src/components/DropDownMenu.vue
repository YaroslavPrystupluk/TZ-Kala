<template>
  <q-expansion-item header-class="hover-link hover-text-yellow" icon="grid_view" :label="$t('messages.board')"
    class="full-width-btn link-spacing no-arrow">
    <q-list>
      <q-item class="q-pt-xs" v-for="link in linksListBoard" :key="link.title" @click="$router.push(link.link)">
        <EssentialLink v-bind="link" />
      </q-item>
    </q-list>
  </q-expansion-item>
</template>

<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import EssentialLink from "components/EssentialLink.vue";

export default {
  name: "DropDownMenu",
  components: {
    EssentialLink,
  },
  setup() {
    const route = useRoute();
    const boardId = computed(() => route.params.id);

    const linksListBoard = computed(() => [
      {
        title: "messages.schoolLevel",
        icon: "school",
        link: `/board/${boardId.value}/school`,
      },
      {
        title: "messages.createNewCard",
        icon: "add_circle_outline",
        link: `/board/${boardId.value}/create-card`,
      },
      {
        title: "messages.editMode",
        icon: "edit",
        link: `/board/${boardId.value}/edit-mode`,
      },
      {
        title: "messages.boardSettings",
        icon: "settings",
        link: `/board/${boardId.value}/board-settings`,
      },
    ]);

    return {
      linksListBoard,
    };
  },
};
</script>

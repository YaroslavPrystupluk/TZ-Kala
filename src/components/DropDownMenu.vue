<template>
  <div class="q-pa-md">
    <q-btn-dropdown flat icon="grid_view" :label="$t('messages.board')" no-caps="no-caps" align="left" :to="link"
      class="dropdown-hover hover-effect">
      <q-list class="dropdown-hover">
        <q-item v-for="link in linksListBoard" :key="link.title" clickable v-close-popup @click="onItemClick"
          class="dropdown-hover">
          <EssentialLink v-bind="link" />
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
export default {
  name: "DropDownMenu",
  components: {
    EssentialLink,
  },
  setup() {
    return {
      onItemClick() {
        console.log("Clicked on an Item");
      },
      linksListBoard: [
        {
          title: "messages.schoolLevel",
          icon: "school",
          link: "/school/1",
        },
        {
          title: "messages.createNewCard",
          icon: "add_circle_outline",
          link: "/create-card",
        },
        {
          title: "messages.editMode",
          icon: "edit",
          link: "/edit-mode/1",
        },
        {
          title: "messages.boardSettings",
          icon: "settings",
          link: "/board-settings/1",
        },
      ],
    };
  },
};
</script>

<template>
  <q-page>
    <div class="q-pa-md">
      <h3>{{ $t("messages.boardSettings") }} {{ board.id }}</h3>
    </div>
  </q-page>
</template>

<script>
import sourceData from "../data.json";
export default {
  name: "BoardSettingsPage",

  computed: {
    boardId() {
      return parseInt(this.$route.params.id);
    },

    board() {
      return sourceData.find((board) => board.id === this.boardId);
    },
  },
};
</script>

<template>
  <q-page>
    <div class="q-pa-md">
      <h3>{{ $t("messages.editMode") }} {{ board.id }}</h3>
    </div>
  </q-page>
</template>

<script>
import sourceData from "../data.json";

export default {
  name: "EditCardPage",

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

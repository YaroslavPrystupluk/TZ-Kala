<template>
  <q-page>
    <div class="q-pa-md">
      <h3>{{ $t("messages.schoolPage") }} {{ board.id }}</h3>
    </div>
  </q-page>
</template>

<script>
import sourceData from "../data.json";
export default {
  name: "SchoolPage",

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

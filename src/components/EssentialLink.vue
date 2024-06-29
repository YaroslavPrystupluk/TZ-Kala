<template>
  <q-item clickable tag="RouterLink" rounded-borders :to="link"
    :class="{ 'active-link': isActive, 'essential-link': true }">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'active-link': isActive }">{{ $t(title) }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

defineOptions({
  name: "EssentialLink",
});

export interface EssentialLinkProps {
  title: string;
  link: string;
  icon: string;
}

const route = useRoute();
const props = defineProps<EssentialLinkProps>();
const isActive = computed(() => route.path === props.link);
</script>

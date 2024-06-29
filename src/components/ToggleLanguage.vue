<template>
  <q-select v-model="locale" :options="localeOptions" :label="$t('messages.language')" dense borderless emit-value
    map-options options-dense style="min-width: 150px" />
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "ToggleLanguage",
  setup() {
    const { t, locale } = useI18n({ useScope: "global" });

    return {
      locale,
      localeOptions: [
        { value: "en-US", label: t("messages.english") },
        { value: "uk-UA", label: t("messages.ukranian") },
      ],
    };
  },
};
</script>

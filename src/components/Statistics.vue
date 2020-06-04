<template>
  <div class="questions-stat">
    <base-progress :percent="getPassQuestionInPercent" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppProgress from "@/utils/Progress";
export default {
  components: {
    "base-progress": AppProgress
  },
  computed: {
    ...mapGetters(["getPassQuestionInPercent"])
  }
};
</script>

<style lang="scss" scoped>
.questions-stat {
  padding: 15px 0;
}
</style>

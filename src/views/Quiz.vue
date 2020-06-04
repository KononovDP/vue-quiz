<template>
  <div class="quiz">
    <Question />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Question from "@/components/Question";

export default {
  name: "Quiz",
  components: {
    Question
  },
  computed: {
    ...mapGetters(["getQuestion"])
  },
  methods: {
    ...mapActions(["setQuestions"])
  },
  created() {
    this.setQuestions();
  }
};
</script>

<style lang="scss" scoped>
.quiz {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
</style>

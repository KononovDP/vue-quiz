<template>
  <div class="results-wrap">
    <h2>Your results</h2>
    <p v-if="!getAnswers.length">There is no results yet</p>
    <div v-else>
      <ol class="result-list">
        <li class="result-item" v-for="item in getAnswers" :key="item.text">
          <h3 class="question">{{ item.question }}</h3>
          <ol class="answers">
            <li
              class="answer"
              :class="{'answer-correct': answer.correct}"
              v-for="(answer, idx) in item.answers"
              :key="idx">{{answer.text}}</li>
          </ol>
          <h3 class="user-answer">
            Your answer: {{item.userAnswer}}
            <span v-if="item.isAnswerCorrect">&#10004;</span>
            <span v-else>&#10008;</span>
          </h3>
        </li>
      </ol>

      <h3>Your score is {{getScoreInPercent}}%</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "results",
  computed: {
    ...mapGetters(["getAnswers", "getScoreInPercent"])
  },
}
</script>

<style lang="scss" scoped>
.results-wrap {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
}
.answers {
  list-style-position: inside;
  list-style-type: upper-alpha;
}
</style>
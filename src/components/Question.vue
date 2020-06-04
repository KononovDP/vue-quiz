<template>
  <div class="question-wrap" :class="{ 'is-answered': isAnswered }">
    <Statistics />
    <h2>{{ getQuestion.question }}</h2>
    <ul>
      <li
        v-for="(answer, idx) in getQuestion.answers"
        :key="idx"
        class="question-item">
        
        <label class="question-label">
          <input
            class="question-radio visually-hidden"
            type="radio"
            :value="answer.text"
            v-model="userAnswer" />
          <div 
            class="question-text" 
            :class="answer.correct ? 'cor' : 'incor'">{{answer.text}}</div>
        </label>
      </li>
    </ul>
    <div class="btn-wrap">
      <button v-if="!isAnswered" class="btn" @click="checkAnswer" :disabled="!userAnswer">check answer</button>
      <button v-else-if="isAnswered" class="btn" @click="nextQuestion">next question</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Statistics from "@/components/Statistics";
export default {
  name: "Question",
  components: {
    Statistics
  },
  data() {
    return {
      userAnswer: null,
      isAnswered: false,
      isUserCorrect: false
    };
  },
  computed: {
    ...mapGetters(["getQuestion", "isQuizFinished"])
  },
  methods: {
    ...mapActions(["addAnswer"]),
    checkAnswer() {
      this.isAnswered = true;
      let currentAnswer = this.getQuestion.answers.find(
        item => item.text == this.userAnswer
      );
      this.isUserCorrect = currentAnswer.correct;
    },
    nextQuestion() {
      this.addAnswer({
        ...this.getQuestion,
        userAnswer: this.userAnswer,
        isAnswerCorrect: this.isUserCorrect
      });
      this.reset();
      if (this.isQuizFinished) {
        setTimeout(() => {
          this.$router.push({ name: "Results" })
        }, 1500)
      }
    },
    reset() {
      this.userAnswer = null;
      this.isAnswered = false;
      this.isUserCorrect = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.question-item {
  margin-bottom: 20px;
}
.question-text {
  position: relative;
  display: block;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 50px;
  box-shadow: 3px 3px 5px 0 #ddd;
  cursor: pointer;
}
.question-radio:checked + .question-text {
  background-color: #eee;
  box-shadow: inset 3px 3px 5px 0 #ddd;
}
.is-answered .question-radio:checked + .question-text.cor,
.is-answered .question-radio:not(:checked) + .question-text.cor {
  $color: #4ba24b;
  background-color: $color;
  border-color: $color;
  box-shadow: 0 0 15px 0 $color;
  color: #fff;
  animation: radioValidation 0.7s linear;
  animation-iteration-count: 2;
}
.is-answered .question-radio:checked + .question-text.incor {
  $color: red;
  background-color: $color;
  border-color: $color;
  box-shadow: 0 0 15px 0 $color;
  color: #fff;
  animation: radioValidation 0.7s linear;
  animation-iteration-count: 2;
}
$color: #fff;
@keyframes radioValidation {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
</style>
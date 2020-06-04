import Vue from "vue";
import Vuex from "vuex";
import { questions } from "../assets/questions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentQuestion: 0,
    questions: [],
    answers: []
  },
  getters: {
    getQuestion(state) {
      if (state.currentQuestion < state.questions.length) {
        return state.questions[state.currentQuestion];
      }
    },
    getQuestionAmount(state) {
      return state.questions.length;
    },
    getPassQuestionAmount(state) {
      return state.currentQuestion + 1;
    },
    getPassQuestionInPercent(state) {
      return +((state.currentQuestion * 100) / state.questions.length).toFixed(
        2
      );
    },
    isQuizFinished(state) {
      return state.currentQuestion >= state.questions.length;
    },
    getAnswers(state) {
      return state.answers;
    },
    getScoreInPercent(state) {
      const correctAnswer = state.answers.filter(
        answer => answer.isAnswerCorrect
      );
      return +(
        ((correctAnswer.length * 100) / state.answers.length).toFixed(2) || 0
      );
    }
  },
  mutations: {
    setQuestions(state, payload) {
      state.questions = payload;
    },
    addAnswer(state, payload) {
      state.answers.push(payload);
      if (state.currentQuestion < state.questions.length) {
        state.currentQuestion++;
      }
    }
  },
  actions: {
    setQuestions({ commit }) {
      commit("setQuestions", questions);
    },
    addAnswer({ commit }, payload) {
      commit("addAnswer", payload);
    }
  }
});

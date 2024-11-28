<template>
    <div>
      <form @submit.prevent="submitQuiz">
        <div v-for="(question, index) in questions" :key="index" class="question">
          <h3>{{ question.text }}</h3>
  
          <!-- Igaz / Hamis kérdés -->
          <div v-if="question.type === 'true_false'">
            <label>
              <input type="radio" :name="'q' + index" value="true" v-model="answers[index]" /> Igaz
            </label>
            <label>
              <input type="radio" :name="'q' + index" value="false" v-model="answers[index]" /> Hamis
            </label>
          </div>
  
          <!-- Választó lista -->
          <div v-else-if="question.type === 'multiple_choice'">
            <select v-model="answers[index]">
              <option disabled value="">Válassz egy lehetőséget</option>
              <option v-for="option in question.options" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
  
          <!-- 1 szavas válasz -->
          <div v-else-if="question.type === 'short_answer'">
            <input type="text" v-model="answers[index]" placeholder="Írd be a választ" />
          </div>
  
          <!-- Többszörös válasz -->
          <div v-else-if="question.type === 'multiple_select'">
            <div v-for="option in question.options" :key="option">
              <label>
                <input type="checkbox" :value="option" @change="updateMultipleSelect(index, option)" />
                {{ option }}
              </label>
            </div>
          </div>
        </div>
  
        <button type="submit">Teszt kiértékelése</button>
      </form>
  
      <Modal v-if="showModal" :result="result" @close="showModal = false" />
    </div>
  </template>
  
<script>
import Modal from './Modal.vue';

export default {
  components: { Modal },
  data() {
    return {
      questions: [
        { text: 'A Nap keleten kel?', type: 'true_false', correctAnswer: 'true' },
        { text: 'Melyik a legnagyobb bolygó?', type: 'multiple_choice', options: ['Mars', 'Jupiter', 'Föld'], correctAnswer: 'Jupiter' },
        { text: 'Hány lába van egy póknak?', type: 'short_answer', correctAnswer: '8' },
        { text: 'Melyek a színek a magyar zászlón?', type: 'multiple_select', options: ['Piros', 'Kék', 'Zöld', 'Fehér'], correctAnswer: ['Piros', 'Zöld', 'Fehér'] },
      ],
      answers: {},
      result: null,
      showModal: false,
    };
  },
  methods: {
    submitQuiz() {
      let score = 0;

      this.questions.forEach((question, index) => {
        const answer = this.answers[index];
        if (question.type === 'multiple_select') {
          if (JSON.stringify(answer.sort()) === JSON.stringify(question.correctAnswer.sort())) {
            score += 2;
          }
        } else if (answer === question.correctAnswer) {
          score += 1;
        }
      });

      this.result = {
        score,
        grade: this.getGrade(score),
      };
      this.showModal = true;
    },
    updateMultipleSelect(index, option) {
      if (!this.answers[index]) this.answers[index] = [];
      const selected = this.answers[index];
      if (selected.includes(option)) {
        this.answers[index] = selected.filter((item) => item !== option);
      } else {
        this.answers[index].push(option);
      }
    },
    getGrade(score) {
      if (score >= 5) return 'Kiváló';
      if (score >= 3) return 'Jó';
      return 'Elégséges';
    },
  },
};
</script>

<style>
.question {
  margin-bottom: 20px;
}
button {
  margin-top: 20px;
}
</style>
  
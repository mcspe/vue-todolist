const {createApp} = Vue;

createApp({
  data(){
    return {
      newTask: '',
      tasks: [
        {
          text: 'creare cartella repo',
          done: false
        },
        {
          text: 'creare file README',
          done: false
        },
        {
          text: 'inizializzare GitHub',
          done: false
        }
      ]
    }
  },
  methods:{
    
  },
  mounted(){
    
  }
}).mount('#app');
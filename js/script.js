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
      ],
      taskDoneStyle: 'text-decoration-line-through',
      errorMsg: ''
    }
  },
  methods:{
    toggleDone(index){
      if (!(this.tasks[index].done)){
        this.tasks[index].done = !this.tasks[index].done;
        console.log(this.tasks[index].text, 'vero');
      } 
      else {
        this.tasks[index].done = !this.tasks[index].done;
        console.log(this.tasks[index].text, 'falso');
      }
    },
    addTask(){
      if (this.newTask != '') {
        const newObjTask = {
          text: this.newTask,
          done: false
        }
        this.newTask = '';
        this.tasks.push(newObjTask);
      }
    }
  },
  mounted(){
    
  }
}).mount('#app');
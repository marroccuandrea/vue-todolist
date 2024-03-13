const { createApp } = Vue;

createApp({
    data(){
        return{
            todoList:[
                {
                    testo: 'Comprare le uova',
                    done: false
                },
                {
                    testo: 'Accendere la stufa',
                    done: false
                },
                {
                    testo: 'Sovvertire il governo',
                    done: true
                },
            ],
            newTask: '',
            messaggioErrore: '',
        }
    },

    methods:{
        cancella(indice){
            this.todoList.splice(indice,1)
        },

        newToDo(){
            if(this.newTask.length >= 4){
                const elemento = {testo:this.newTask, done:false};
                this.todoList.unshift(elemento);
                this.newTask = ''
            }else{
                this.messaggioErrore = 'Attenzione inserisci più di 4 caratteri'
            }

            }
    }


}).mount('#app');
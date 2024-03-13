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
        }
    },

    methods:{
        cancella(indice){
            this.todoList.splice(indice,1)
        },

        newToDo(){
            const elemento = {testo:this.newTask, done:false};
            this.todoList.unshift(elemento);
            this.newTask = ''
        },
    }


}).mount('#app');
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
            ]
        }
    }

    
}).mount('#app');
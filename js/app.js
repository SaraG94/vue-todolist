const { createApp } = Vue

createApp({
    data() {
        return {
            tasks : [
                {
                    text: 'Rispondere alle email',
                    done : true
                },
                {
                    text: 'Lavorare al progetto',
                    done : false
                },
                {
                    text: 'Ripassare nuovi argomenti',
                    done : false
                }
            ],
            inputValue: ' ',
        }
    },
    methods: {
	
		removeTask(objectIndex) {
		
            this.tasks.splice(objectIndex,1);
            console.log(
				'elimino l.oggetto', this.tasks[objectIndex],
                'con indice', objectIndex
			)
		},

        addTask(){
            console.log('add task:', this.inputValue)
			// const newTask = this.inputValue
			// this.tasks.push(constructor (newTask))
            // console.log(tasks)
			// this.inputValue = ''
        },

        // constructor (text){
        //     this.text = text

        // }

	},
}).mount('#app')
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
			const newText = this.inputValue

            this.tasks.push({ text:newText, done:false })
            console.log(this.tasks)
			this.inputValue = ''
        },
	},
}).mount('#app')
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
            inputValue: '',
        }
    },
    methods: {
	
		removeTask(objectIndex) {
		
            this.tasks.splice(objectIndex,1);
		},

        addTask(){
			const newText = this.inputValue.trim()

            if(newText === ''){
                return
            }

            this.tasks.push({ text:newText, done:false })
			this.inputValue = ''
        }
	}
}).mount('#app')
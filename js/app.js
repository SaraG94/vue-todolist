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
	},
}).mount('#app')


const app = new Vue({
    el: '#app',
    data: {
        itemToDo: '',
        toDos: [
            {
                text: 'Studiare VueJs',
                done: false,
            },
            {
                text: 'Ripassare Javascript',
                done: false,
            },
            {
                text: 'Ripassare CSS',
                done: false,
            },
        ],
    },
    methods: {
        eliminaItem(index) {
            this.toDos.splice(index, 1);
        },
        aggiungiItem() {
            if (this.itemToDo.trim().length > 0) {
                let newObject = {
                    text: this.itemToDo.trim(),
                    done: false,
                };
                this.toDos.push(newObject);
                this.itemToDo = '';
            }
        },
    }
  })
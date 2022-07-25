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
        pushObject:
            {
                text: this.itemToDo,
                done: false,
            },
    },
    methods: {
        eliminaItem(index) {
            this.toDos.splice(index, 1);
        },
        aggiungiItem() {
           this.toDos.push(this.pushObject);
        },
        addThrough() {
            if (this.toDos.done == false) {
                this.toDos.done =
            }
        }
    }
  })
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('add', this.addTodo.bind(this));
    }

    addTodo(title) {
        const item = this.model.addItem({
            id: Date.now(),
            title,
            completed: false
        })

        this.view.addItem(item);
    }
}

export default Controller;
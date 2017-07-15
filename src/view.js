import { EventEmitter, createElement } from './helpers';

class View extends EventEmitter {
    constructor() {
        super();

        this.form = document.getElementById('todo-form');
        this.input = document.getElementById('add-input');
        this.list = document.getElementById('todo-list');

        this.form.addEventListener('submit', this.handleAdd.bind(this));
    }

    handleAdd(event) {
        event.preventDefault();

        if (!this.input.value)return alert('Необходимо ввести название задачи');

        const value = this.input.value;

        this.emit('add', value);
    }

    createListItem (todo) {
        const checkbox = createElement('input', { type: 'checkbox', className: 'checkbox', checked: todo.completed ? 'checked' : ''});
        const label = createElement('label', { className: 'title' }, todo.title);
        const editInput = createElement('input', { type: 'text', className: 'textfield'});
        const editButton = createElement('button', { className: 'edit'}, 'Изменить');
        const deleteButton = createElement('button', { className: 'remove'}, 'Удалить');

        const item = createElement('li', { className: `todo-item ${todo.completed ? 'completed' : ''}`, 'data-id': todo.id }, checkbox, label, editInput, editButton, deleteButton);

        return item;
    }

    addItem(todo) {
        const listItem = this.createListItem(todo);
        console.log(listItem);
        this.input.value = '';
        this.list.appendChild(listItem);
    }

}

export default View;
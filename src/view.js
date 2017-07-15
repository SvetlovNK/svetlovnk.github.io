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

    handleToggle({ target }) { // { target } = event.target
        const listItem =  target.parentNode;
        const id = listItem.getAttribute('data-id');
        const completed = target.checked;

        this.emit('toggle', { id, completed })
    }

    handleEdit({ target }) {
        const listItem = target.parentNode;
        const id = listItem.getAttribute('data-id');
        const lable = listItem.querySelector('.title');
        const input = listItem.querySelector('.textfield');
        const editButton = listItem.querySelector('.edit');
        const title = input.value;

        const editind = listItem.classList.contains('editing');

        if (editind) {
            this.emit('edit', { id, title });
        } else {
            input.value = lable.textContent;
            listItem.classList.add('editing');
            editButton.textContent = 'Сохранить';
        }
    }

    handleRemove({ target }) {
        const listItem = target.parentNode;
        const id = listItem.getAttribute('data-id');

        this.emit('remove', id);
    }

    bindEvents(item) {
        const checkbox = item.querySelector('.checkbox');
        const editButton = item.querySelector('.edit');
        const deleteButton = item.querySelector('.remove');

        checkbox.addEventListener('change', this.handleToggle.bind(this));
        editButton.addEventListener('click', this.handleEdit.bind(this));
        deleteButton.addEventListener('click', this.handleRemove.bind(this));

        return item;
    }

    createListItem (todo) {
        const checkbox = createElement('input', { type: 'checkbox', className: 'checkbox', checked: todo.completed ? 'checked' : ''});
        const label = createElement('label', { className: 'title' }, todo.title);
        const editInput = createElement('input', { type: 'text', className: 'textfield'});
        const editButton = createElement('button', { className: 'edit'}, 'Изменить');
        const deleteButton = createElement('button', { className: 'remove'}, 'Удалить');

        const item = createElement('li', { className: `todo-item${todo.completed ? ' completed' : ''}`, 'data-id': todo.id }, checkbox, label, editInput, editButton, deleteButton);

        return this.bindEvents(item);
    }

    findListItem(id) {
        return this.list.querySelector(`[data-id="${ id }"]`);
    }

    addItem(todo) {
        const listItem = this.createListItem(todo);

        this.input.value = '';
        this.list.appendChild(listItem);
    }

    toggleItem(todo) {
        const listItem = this.findListItem(todo.id);
        const checkbox = listItem.querySelector('.checkbox');

        checkbox.checked = todo.completed; // on load page check checkbox status and apply

        if (todo.completed) {
            listItem.classList.add('completed')
        } else {
            listItem.classList.remove('completed');
        }

    }

    editItem(todo) {
        const listItem = this.findListItem(todo.id);
        const label = listItem.querySelector('.title');
        const input = listItem.querySelector('.textfield');
        const editButton = listItem.querySelector('.edit');

        label.textContent = todo.title;
        editButton.textContent = 'Изменить';
        listItem.classList.remove('editing');
    }

    removeItem(id) {
        const listItem = this.findListItem(id);

        this.list.removeChild(listItem);
    }
}

export default View;
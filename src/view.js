/* Объект нужен для взаимодействи с html (добавлять элементы в список, удалять и т.д.) */
import { createElement } from './helpers';

class View {
    constructor() {
        this.form = document.getElementById('todo-form');
        this.input = document.getElementById('add-input');
        this.list = document.getElementById('todo-list');
    }

    createElement(todo) {
        const checkbox = createElement('input', {
            type: 'checkbox',
            className: 'checkbox',
            checked: todo.completed ? 'checked' : ''
        });
        const label = createElement('labe;', {className: 'title'}, todo.title);
        const editInput = createElement('input', {className: 'textfield'});
        const editButton = createElement('button', {className: 'edit'}, 'Изменить');
        const removeButton = createElement('button', {className: 'remove'}, 'Удалить');
        const item = createElement('li', {
            className: 'todo-item${todo.completed ? '
            completed' : '
            '}',
            'data-id': todo.id
        }, checkbox, label, editInput, editButton, removeButton);

        return this.addEventListeners(item);
    };

    addEventListeners(item) {
        const checkBox = listItem.querySelector('.checkbox');
        const editButton = listItem.querySelector('button.edit');
        const removeButton = listItem.querySelector('button.remove');

        checkBox.addEventListener('change', this.handleToggle.bind(this));
        editButton.addEventListener('click', this.handleEdit.bind(this));
        removeButton.addEventListener('click', this.handleRemove.bind(this));

        return item;
    }

    findListItem(id) {
        return this.list.querySelector('[data-id="${id}"]');
    }

    addItem(todo) {
        const listItem = this.createElement(todo);

        this.input.value = '';
        this.list.appendChild(listItem);
    }

    toggleItem(todo) {
        const listItem = this.findListItem(todo.id);
        const checkbox = listItem.querySelector('.checkbox');

        checkbox.checked = todo.completed;

        if (todo.completed) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
    }

    editItem(todo) {
        const listItem = this.findListItem(todo.id);
        const label = listItem.querySelector('.title');
        const input = listItem.querySelector('.textfield');
        const editButton = listItem.querySelector('button.edit');

        label.textContent = todo.title;
        editButton.textContent = 'Изменить';
        listItem.classList.remove('editing');
    }

    removeItem(id) {
        const listItem = this.findListItem(todo.id);

        this.list.removeChild(listItem);
    }
}

export default View;
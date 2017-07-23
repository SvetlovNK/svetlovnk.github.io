/** Функция createElement для создания DOM элементов, где tag - название тэга, props - св-ва тэга (класс, id, data и т.д.),
 *  а в children передается массив, который может быть как значением тега (например название кнопки), так и
 *  внутренними элементами.
 * **/

function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => {
        if (key.startsWith('data-')) {
            element.setAttribute(key, props[key]);
        } else {
            element[key] = props[key];
        }
    });

    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }

        element.appendChild(child);
    });

    return element;
}

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    emit(type, arg) {
        if (this.events[type]) {
            this.events[type].forEach(listener => listener(arg));
        }
    }
}

function save(data) {
    const string = JSON.stringify(data);
    localStorage.setItem('todos', string);
}

function load() {
    const string = localStorage.getItem('todos');
    const todoList = JSON.parse(string);
    console.log(todoList);
    return todoList;

}

export { createElement, EventEmitter, save, load };
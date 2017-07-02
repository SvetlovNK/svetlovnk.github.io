/** Функция createElement для создания DOM элементов, где tag - название тэга, props - св-ва тэга (класс, id, data и т.д.),
 *  а в children передается массив, который может быть как значением тега (например название кнопки), так и
 *  внутренними элементами.
 * **/

function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => element[key] = props[key]);

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

    on(type, callback) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }

    emit(type, arg) {
        if (this.events[type]) {
            this.events[type].forEach(callback => callback(arg));
        }
    }
}

export { createElement, EventEmitter };

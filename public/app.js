/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return EventEmitter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return save; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return load; });\n/** Функция createElement для создания DOM элементов, где tag - название тэга, props - св-ва тэга (класс, id, data и т.д.),\n *  а в children передается массив, который может быть как значением тега (например название кнопки), так и\n *  внутренними элементами.\n * **/\n\nfunction createElement(tag, props, ...children) {\n    const element = document.createElement(tag);\n\n    Object.keys(props).forEach(key => {\n        if (key.startsWith('data-')) {\n            element.setAttribute(key, props[key]);\n        } else {\n            element[key] = props[key];\n        }\n    });\n\n    children.forEach(child => {\n        if (typeof child === 'string') {\n            child = document.createTextNode(child);\n        }\n\n        element.appendChild(child);\n    });\n\n    return element;\n}\n\nclass EventEmitter {\n    constructor() {\n        this.events = {};\n    }\n\n    on(type, listener) {\n        this.events[type] = this.events[type] || [];\n        this.events[type].push(listener);\n    }\n\n    emit(type, arg) {\n        if (this.events[type]) {\n            this.events[type].forEach(listener => listener(arg));\n        }\n    }\n}\n\nfunction save(data) {\n    const string = JSON.stringify(data);\n    localStorage.setItem('todos', string);\n}\n\nfunction load() {\n    const string = localStorage.getItem('todos');\n    const todoList = JSON.parse(string);\n    console.log(todoList);\n    return todoList;\n\n}\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLmpzPzcxN2QiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqINCk0YPQvdC60YbQuNGPIGNyZWF0ZUVsZW1lbnQg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8gRE9NINGN0LvQtdC80LXQvdGC0L7Qsiwg0LPQtNC1IHRhZyAtINC90LDQt9Cy0LDQvdC40LUg0YLRjdCz0LAsIHByb3BzIC0g0YHQsi3QstCwINGC0Y3Qs9CwICjQutC70LDRgdGBLCBpZCwgZGF0YSDQuCDRgi7QtC4pLFxuICogINCwINCyIGNoaWxkcmVuINC/0LXRgNC10LTQsNC10YLRgdGPINC80LDRgdGB0LjQsiwg0LrQvtGC0L7RgNGL0Lkg0LzQvtC20LXRgiDQsdGL0YLRjCDQutCw0Log0LfQvdCw0YfQtdC90LjQtdC8INGC0LXQs9CwICjQvdCw0L/RgNC40LzQtdGAINC90LDQt9Cy0LDQvdC40LUg0LrQvdC+0L/QutC4KSwg0YLQsNC6INC4XG4gKiAg0LLQvdGD0YLRgNC10L3QvdC40LzQuCDRjdC70LXQvNC10L3RgtCw0LzQuC5cbiAqICoqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgcHJvcHMsIC4uLmNoaWxkcmVuKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5jbGFzcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cblxuICAgIG9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW3R5cGVdID0gdGhpcy5ldmVudHNbdHlwZV0gfHwgW107XG4gICAgICAgIHRoaXMuZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGVtaXQodHlwZSwgYXJnKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1t0eXBlXSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbdHlwZV0uZm9yRWFjaChsaXN0ZW5lciA9PiBsaXN0ZW5lcihhcmcpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2F2ZShkYXRhKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgc3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcbiAgICBjb25zdCB0b2RvTGlzdCA9IEpTT04ucGFyc2Uoc3RyaW5nKTtcbiAgICBjb25zb2xlLmxvZyh0b2RvTGlzdCk7XG4gICAgcmV0dXJuIHRvZG9MaXN0O1xuXG59XG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEV2ZW50RW1pdHRlciwgc2F2ZSwgbG9hZCB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlbHBlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Controller {\n    constructor(model, view) {\n        this.model = model;\n        this.view = view;\n\n        view.on('add', this.addTodo.bind(this));\n        view.on('toggle', this.toggleTodo.bind(this));\n        view.on('edit', this.editTodo.bind(this));\n        view.on('remove', this.removeTodo.bind(this));\n\n        view.show(model.items)\n    }\n\n    addTodo(title) {\n        const item = this.model.addItem({\n            id: Date.now(),\n            title,\n            completed: false\n        });\n\n        this.view.addItem(item);\n    }\n\n    toggleTodo({ id, completed }) {\n        const item = this.model.updateItem(id, { completed });\n\n        this.view.toggleItem(item);\n    }\n\n    editTodo({ id, title }) {\n        const item = this.model.updateItem(id, { title });\n\n        this.view.editItem(item);\n    }\n\n    removeTodo(id) {\n        this.model.removeItem(id);\n        this.view.removeItem(id);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Controller);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLmpzPzQ3NjYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IobW9kZWwsIHZpZXcpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuXG4gICAgICAgIHZpZXcub24oJ2FkZCcsIHRoaXMuYWRkVG9kby5iaW5kKHRoaXMpKTtcbiAgICAgICAgdmlldy5vbigndG9nZ2xlJywgdGhpcy50b2dnbGVUb2RvLmJpbmQodGhpcykpO1xuICAgICAgICB2aWV3Lm9uKCdlZGl0JywgdGhpcy5lZGl0VG9kby5iaW5kKHRoaXMpKTtcbiAgICAgICAgdmlldy5vbigncmVtb3ZlJywgdGhpcy5yZW1vdmVUb2RvLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHZpZXcuc2hvdyhtb2RlbC5pdGVtcylcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLm1vZGVsLmFkZEl0ZW0oe1xuICAgICAgICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52aWV3LmFkZEl0ZW0oaXRlbSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlVG9kbyh7IGlkLCBjb21wbGV0ZWQgfSkge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5tb2RlbC51cGRhdGVJdGVtKGlkLCB7IGNvbXBsZXRlZCB9KTtcblxuICAgICAgICB0aGlzLnZpZXcudG9nZ2xlSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICBlZGl0VG9kbyh7IGlkLCB0aXRsZSB9KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLm1vZGVsLnVwZGF0ZUl0ZW0oaWQsIHsgdGl0bGUgfSk7XG5cbiAgICAgICAgdGhpcy52aWV3LmVkaXRJdGVtKGl0ZW0pO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8oaWQpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5yZW1vdmVJdGVtKGlkKTtcbiAgICAgICAgdGhpcy52aWV3LnJlbW92ZUl0ZW0oaWQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);\n\n\nclass Model extends __WEBPACK_IMPORTED_MODULE_0__helpers__[\"c\" /* EventEmitter */] {\n    constructor(items = []) {\n        super();\n\n        this.items = items;\n    }\n\n    getItem(id) {\n        return this.items.find(item => item.id == id);\n    }\n\n    addItem(item) {\n        this.items.push(item);\n        this.emit('change', this.items);\n        return item;\n    }\n\n    updateItem(id, data) {\n        const item = this.getItem(id);\n\n        Object.keys(data).forEach(prop => item[prop] = data[prop]);\n        this.emit('change', this.items);\n\n        return item;\n    }\n\n    removeItem(id) {\n        const item = this.items.find(item => item.id == id);\n        const index = this.items.indexOf(item);\n\n        if (index > -1) {\n            this.items.splice(index, 1);\n            this.emit('change', this.items);\n        }\n\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Model);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcz85NGVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNsYXNzIE1vZGVsIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihpdGVtcyA9IFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT0gaWQpO1xuICAgIH1cblxuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgdGhpcy5pdGVtcyk7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIHVwZGF0ZUl0ZW0oaWQsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbShpZCk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChwcm9wID0+IGl0ZW1bcHJvcF0gPSBkYXRhW3Byb3BdKTtcbiAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCB0aGlzLml0ZW1zKTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICByZW1vdmVJdGVtKGlkKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09IGlkKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG5cbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgdGhpcy5pdGVtcyk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);\n\n\nclass View extends __WEBPACK_IMPORTED_MODULE_0__helpers__[\"c\" /* EventEmitter */] {\n    constructor() {\n        super();\n\n        this.form = document.getElementById('todo-form');\n        this.input = document.getElementById('add-input');\n        this.list = document.getElementById('todo-list');\n\n        this.form.addEventListener('submit', this.handleAdd.bind(this));\n    }\n\n    handleAdd(event) {\n        event.preventDefault();\n\n        if (!this.input.value)return alert('Необходимо ввести название задачи');\n\n        const value = this.input.value;\n        this.emit('add', value);\n    }\n\n    handleToggle({ target }) { // { target } = event.target\n        const listItem =  target.parentNode;\n        const id = listItem.getAttribute('data-id');\n        const completed = target.checked;\n\n        this.emit('toggle', { id, completed })\n    }\n\n    handleEdit({ target }) {\n        const listItem = target.parentNode;\n        const id = listItem.getAttribute('data-id');\n        const lable = listItem.querySelector('.title');\n        const input = listItem.querySelector('.textfield');\n        const editButton = listItem.querySelector('.edit');\n        const title = input.value;\n\n        const editind = listItem.classList.contains('editing');\n\n        if (editind) {\n            this.emit('edit', { id, title });\n        } else {\n            input.value = lable.textContent;\n            listItem.classList.add('editing');\n            editButton.textContent = 'Сохранить';\n        }\n    }\n\n    handleRemove({ target }) {\n        const listItem = target.parentNode;\n        const id = listItem.getAttribute('data-id');\n\n        this.emit('remove', id);\n    }\n\n    bindEvents(item) {\n        const checkbox = item.querySelector('.checkbox');\n        const editButton = item.querySelector('.edit');\n        const deleteButton = item.querySelector('.remove');\n\n        checkbox.addEventListener('change', this.handleToggle.bind(this));\n        editButton.addEventListener('click', this.handleEdit.bind(this));\n        deleteButton.addEventListener('click', this.handleRemove.bind(this));\n\n        return item;\n    }\n\n    createListItem (todo) {\n        const checkbox = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__[\"d\" /* createElement */])('input', { type: 'checkbox', className: 'checkbox', checked: todo.completed ? 'checked' : ''});\n        const label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__[\"d\" /* createElement */])('label', { className: 'title' }, todo.title);\n        const editInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__[\"d\" /* createElement */])('input', { type: 'text', className: 'textfield'});\n        const editButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__[\"d\" /* createElement */])('button', { className: 'edit'}, 'Изменить');\n        const deleteButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__[\"d\" /* createElement */])('button', { className: 'remove'}, 'Удалить');\n\n        const item = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__[\"d\" /* createElement */])('li', { className: `todo-item${todo.completed ? ' completed' : ''}`, 'data-id': todo.id }, checkbox, label, editInput, editButton, deleteButton);\n\n        return this.bindEvents(item);\n    }\n\n    findListItem(id) {\n        return this.list.querySelector(`[data-id=\"${ id }\"]`);\n    }\n\n    addItem(todo) {\n        const listItem = this.createListItem(todo);\n\n        this.input.value = '';\n        this.list.appendChild(listItem);\n    }\n\n    toggleItem(todo) {\n        const listItem = this.findListItem(todo.id);\n        const checkbox = listItem.querySelector('.checkbox');\n\n        checkbox.checked = todo.completed; // on load page check checkbox status and apply\n\n        if (todo.completed) {\n            listItem.classList.add('completed')\n        } else {\n            listItem.classList.remove('completed');\n        }\n\n    }\n\n    editItem(todo) {\n        const listItem = this.findListItem(todo.id);\n        const label = listItem.querySelector('.title');\n        const input = listItem.querySelector('.textfield');\n        const editButton = listItem.querySelector('.edit');\n\n        label.textContent = todo.title;\n        editButton.textContent = 'Изменить';\n        listItem.classList.remove('editing');\n    }\n\n    removeItem(id) {\n        const listItem = this.findListItem(id);\n\n        this.list.removeChild(listItem);\n    }\n\n    show(todos) {\n        todos.forEach(todo => {\n            const listItem = this.createListItem(todo);\n\n            this.list.appendChild(listItem);\n        })\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (View);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3LmpzPzMyMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgVmlldyBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpO1xuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1pbnB1dCcpO1xuICAgICAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0Jyk7XG5cbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlQWRkLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGhhbmRsZUFkZChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5pbnB1dC52YWx1ZSlyZXR1cm4gYWxlcnQoJ9Cd0LXQvtCx0YXQvtC00LjQvNC+INCy0LLQtdGB0YLQuCDQvdCw0LfQstCw0L3QuNC1INC30LDQtNCw0YfQuCcpO1xuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICAgICAgdGhpcy5lbWl0KCdhZGQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlVG9nZ2xlKHsgdGFyZ2V0IH0pIHsgLy8geyB0YXJnZXQgfSA9IGV2ZW50LnRhcmdldFxuICAgICAgICBjb25zdCBsaXN0SXRlbSA9ICB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgaWQgPSBsaXN0SXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgY29uc3QgY29tcGxldGVkID0gdGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAgICAgdGhpcy5lbWl0KCd0b2dnbGUnLCB7IGlkLCBjb21wbGV0ZWQgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVFZGl0KHsgdGFyZ2V0IH0pIHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgaWQgPSBsaXN0SXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgY29uc3QgbGFibGUgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcudGV4dGZpZWxkJyk7XG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGlucHV0LnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGVkaXRpbmQgPSBsaXN0SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXRpbmcnKTtcblxuICAgICAgICBpZiAoZWRpdGluZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlZGl0JywgeyBpZCwgdGl0bGUgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGxhYmxlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZWRpdGluZycpO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfQodC+0YXRgNCw0L3QuNGC0YwnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3ZlKHsgdGFyZ2V0IH0pIHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgaWQgPSBsaXN0SXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZScsIGlkKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveCcpO1xuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpO1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUnKTtcblxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRWRpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVSZW1vdmUuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdEl0ZW0gKHRvZG8pIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ2NoZWNrYm94JywgY2xhc3NOYW1lOiAnY2hlY2tib3gnLCBjaGVja2VkOiB0b2RvLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfSk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7IGNsYXNzTmFtZTogJ3RpdGxlJyB9LCB0b2RvLnRpdGxlKTtcbiAgICAgICAgY29uc3QgZWRpdElucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICd0ZXh0JywgY2xhc3NOYW1lOiAndGV4dGZpZWxkJ30pO1xuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyBjbGFzc05hbWU6ICdlZGl0J30sICfQmNC30LzQtdC90LjRgtGMJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3NOYW1lOiAncmVtb3ZlJ30sICfQo9C00LDQu9C40YLRjCcpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVFbGVtZW50KCdsaScsIHsgY2xhc3NOYW1lOiBgdG9kby1pdGVtJHt0b2RvLmNvbXBsZXRlZCA/ICcgY29tcGxldGVkJyA6ICcnfWAsICdkYXRhLWlkJzogdG9kby5pZCB9LCBjaGVja2JveCwgbGFiZWwsIGVkaXRJbnB1dCwgZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5iaW5kRXZlbnRzKGl0ZW0pO1xuICAgIH1cblxuICAgIGZpbmRMaXN0SXRlbShpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHsgaWQgfVwiXWApO1xuICAgIH1cblxuICAgIGFkZEl0ZW0odG9kbykge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMuY3JlYXRlTGlzdEl0ZW0odG9kbyk7XG5cbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH1cblxuICAgIHRvZ2dsZUl0ZW0odG9kbykge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMuZmluZExpc3RJdGVtKHRvZG8uaWQpO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveCcpO1xuXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlZDsgLy8gb24gbG9hZCBwYWdlIGNoZWNrIGNoZWNrYm94IHN0YXR1cyBhbmQgYXBwbHlcblxuICAgICAgICBpZiAodG9kby5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZWRpdEl0ZW0odG9kbykge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMuZmluZExpc3RJdGVtKHRvZG8uaWQpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0ZmllbGQnKTtcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XG5cbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ9CY0LfQvNC10L3QuNGC0YwnO1xuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0aW5nJyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlSXRlbShpZCkge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMuZmluZExpc3RJdGVtKGlkKTtcblxuICAgICAgICB0aGlzLmxpc3QucmVtb3ZlQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH1cblxuICAgIHNob3codG9kb3MpIHtcbiAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5jcmVhdGVMaXN0SXRlbSh0b2RvKTtcblxuICAgICAgICAgICAgdGhpcy5saXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlldy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__(0);\n\n\n\n\n\nconst state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__[\"a\" /* load */])();\n\nconst model = new __WEBPACK_IMPORTED_MODULE_0__model__[\"a\" /* default */](state || undefined);\nmodel.on('change', state => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers__[\"b\" /* save */])(state));\n\nconst view = new __WEBPACK_IMPORTED_MODULE_1__view__[\"a\" /* default */]();\nconst controller = new __WEBPACK_IMPORTED_MODULE_2__controller__[\"a\" /* default */](model, view);\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz85NTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RlbCBmcm9tICcuL21vZGVsJztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgc2F2ZSwgbG9hZCB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNvbnN0IHN0YXRlID0gbG9hZCgpO1xuXG5jb25zdCBtb2RlbCA9IG5ldyBNb2RlbChzdGF0ZSB8fCB1bmRlZmluZWQpO1xubW9kZWwub24oJ2NoYW5nZScsIHN0YXRlID0+IHNhdmUoc3RhdGUpKTtcblxuY29uc3QgdmlldyA9IG5ldyBWaWV3KCk7XG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIobW9kZWwsIHZpZXcpO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);
/**
* Издатель владеет некоторым важным состоянием и оповещает наблюдателей о его
* изменениях.
*/
var Button = /** @class */ (function () {
    /**
     * @type {number} Для удобства в этой переменной хранится состояние
     * Издателя, необходимое всем подписчикам.
     */
    function Button(state) {
        /**
         * @type {Observer[]} Список подписчиков. В реальной жизни список
         * подписчиков может храниться в более подробном виде (классифицируется по
         * типу события и т.д.)
         */
        this.observers = [];
        this.state = state;
        // Note that this.email is not set
    }
    /**
     * Методы управления подпиской.
     */
    Button.prototype.attach = function (observer) {
        var isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    };
    Button.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    };
    /**
     * Запуск обновления в каждом подписчике.
     */
    Button.prototype.notify = function () {
        console.log('Subject: Notifying observers...');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    /**
     * Обычно логика подписки – только часть того, что делает Издатель. Издатели
     * часто содержат некоторую важную бизнес-логику, которая запускает метод
     * уведомления всякий раз, когда должно произойти что-то важное (или после
     * этого).
     */
    Button.prototype.someBusinessLogic = function () {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log("Subject: My state has just changed to: ".concat(this.state));
        this.notify();
    };
    return Button;
}());
/**
* Конкретные Наблюдатели реагируют на обновления, выпущенные Издателем, к
* которому они прикреплены.
*/
var Gate = /** @class */ (function () {
    function Gate() {
    }
    Gate.prototype.update = function (subject) {
        if (subject instanceof Button && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    };
    return Gate;
}());
/**
* Клиентский код.
*/
var subject = new Button(0);
var observer1 = new Gate();
subject.attach(observer1);
subject.someBusinessLogic();
subject.someBusinessLogic();
subject.someBusinessLogic();

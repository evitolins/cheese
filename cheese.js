(function (window) {
    'use strict';

    var Cheese = function (elem) {
        this.elem = elem;
        this.currentRoute = undefined;
        this.routes = {};
        this.listeners = {};
        this.bound = false;
        this.acceptedEvents = ['mouseover', 'mouseout', 'mousedown', 'mousemove', 'mouseup'];
        this.windowEvents = ['mouseup'];
    };

    Cheese.prototype.addRoute = function (route, events) {
        this.routes[route] = events;
    };

    Cheese.prototype.addListeners = function () {
        var listener, elem;
        for (listener in this.listeners) {
            if (this.listeners.hasOwnProperty(listener) && this.acceptedEvents.indexOf(listener) > -1) {
                elem = (this.windowEvents.indexOf(listener) > -1) ? window : this.elem;
                elem.addEventListener(listener, this.listeners[listener]);
            }
        }
    };

    Cheese.prototype.removeListeners = function () {
        var listener, elem;
        for (listener in this.listeners) {
            if (this.listeners.hasOwnProperty(listener)) {
                elem = (this.windowEvents.indexOf(listener) > -1) ? window : this.elem;
                elem.removeEventListener(listener, this.listeners[listener]);
            }
        }
        this.listeners = {};
    };

    Cheese.prototype.bindEvents = function (active) {
        if (active && !this.bound) {
            this.bound = true;
            this.addListeners();
        } else {
            this.bound = false;
            this.removeListeners();
        }
    };

    Cheese.prototype.buildListener = function (listener) {
        return function (e) {
            if (typeof listener === 'function') {
                listener.apply(this.elem, [e]);
            }
        };
    };

    Cheese.prototype.setRoute = function (route) {
        var routeListeners = this.routes[route],
            eventName;
        this.bindEvents(false);
        this.currentRoute = route;
        if (routeListeners) {
            for (eventName in routeListeners) {
                if (routeListeners.hasOwnProperty(eventName)) {
                    this.listeners[eventName] = (this.buildListener(routeListeners[eventName])).bind(this);
                }
            }
        }
        this.bindEvents(true);
        return this.currentRoute;
    };

    window.Cheese = Cheese;

}(window));

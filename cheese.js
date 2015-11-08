(function (document, window, console) {
    'use strict';

    var Cheese = function (elem) {
        this.elem = elem;
        this.zoom = 1;
        this.currentRoute = undefined;
        this.routes = {};
        this.listener = {
            'mouseover' : function (e) { console.log('default: mouseover', e.clientX, e.clientY); },
            'mouseout'  : function (e) { console.log('default: mouseout', e.clientX, e.clientY); },
            'mousedown' : function (e) { console.log('default: mousedown', e.clientX, e.clientY); },
            'mousemove' : function (e) { console.log('default: mousemove', e.clientX, e.clientY); },
            'mouseup'   : function (e) { console.log('default: mouseup', e.clientX, e.clientY); }
        };
        this.bound = false;
    };

    Cheese.prototype.addRoute = function (route, events) {
        this.routes[route] = events;
    };

    Cheese.prototype.bindEvents = function (active) {
        if (active && !this.bound) {
            this.bound = true;
            this.elem.addEventListener('mouseover', this.listener.mouseover);
            this.elem.addEventListener('mouseout', this.listener.mouseout);
            this.elem.addEventListener('mousedown', this.listener.mousedown);
            this.elem.addEventListener('mousemove', this.listener.mousemove);
            window.addEventListener('mouseup', this.listener.mouseup);
        } else {
            this.bound = false;
            this.elem.removeEventListener('mouseover', this.listener.mouseover);
            this.elem.removeEventListener('mouseout', this.listener.mouseout);
            this.elem.removeEventListener('mousedown', this.listener.mousedown);
            this.elem.removeEventListener('mousemove', this.listener.mousemove);
            window.removeEventListener('mouseup', this.listener.mouseup);
        }
    };

    Cheese.prototype.setRoute = function (route) {
        var etype;
        this.bindEvents(false);
        this.currentRoute = route || this.currentRoute;
        if (this.routes.hasOwnProperty(route)) {
            for (etype in this.routes[route]) {
                this.listener[etype] = (function (listener) {
                    return function (e) {
                        if (typeof listener === 'function') {
                            listener.apply(this.elem, [e]);
                        }
                    };
                }(this.routes[route][etype])).bind(this);
            }
        }
        this.bindEvents(true);
        return this.currentRoute;
    };

    window.Cheese = Cheese;

}(document, window, console));

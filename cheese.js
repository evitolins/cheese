(function (document, window, console) {
    'use strict';

    var Cheese = function (elem) {
        this.elem = elem;
        this.zoom = 1;
        this.currentRoute = undefined;
        this.routes = {};
        this.listener = {
            'mouseover' : function (e, x, y) { console.log('default: mouseover', e.clientX, e.clientY, x, y); },
            'mouseout'  : function (e, x, y) { console.log('default: mouseout', e.clientX, e.clientY, x, y); },
            'mousedown' : function (e, x, y) { console.log('default: mousedown', e.clientX, e.clientY, x, y); },
            'mousemove' : function (e, x, y) { console.log('default: mousemove', e.clientX, e.clientY, x, y); },
            'mouseup'   : function (e, x, y) { console.log('default: mouseup', e.clientX, e.clientY, x, y); }
        };
        this.bound = false;
    };

    Cheese.prototype.relCoords = function (e, elem, zoom) {
        var rect = elem.getBoundingClientRect(),
            offset = {
                left: rect.left + document.body.scrollLeft,
                top: rect.top + document.body.scrollTop
            };
        zoom = zoom || 1;
        return {
            x : (e.pageX - offset.left) / zoom,
            y : (e.pageY - offset.top) / zoom
        };
    };

    Cheese.prototype.setZoom = function (zoom) {
        this.zoom = zoom || 1;
        return this.zoom;
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
                        var coords = this.relCoords(e, this.elem, this.zoom);
                        if (typeof listener === 'function') {
                            listener.apply(this.elem, [e, coords.x, coords.y]);
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

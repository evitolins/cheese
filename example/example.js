(function (Cheese, document, console) {
    'use strict';
    var elem = document.getElementById('viewport'),
        cheese = new Cheese(elem);

    cheese.addRoute('route1', {
        'mouseover' : function (e, x, y) { console.log('route1: mouseover', e.clientX, e.clientY, x, y); },
        'mouseout'  : function (e, x, y) { console.log('route1: mouseout', e.clientX, e.clientY, x, y); },
        'mousedown' : function (e, x, y) { console.log('route1: mousedown', e.clientX, e.clientY, x, y); },
        'mousemove' : function (e, x, y) { console.log('route1: mousemove', e.clientX, e.clientY, x, y); },
        'mouseup'   : function (e, x, y) { console.log('route1: mouseup', e.clientX, e.clientY, x, y); }
    });
    cheese.addRoute('route2', {
        'mouseover' : function (e, x, y) { console.log('route2: mouseover', e.clientX, e.clientY, x, y); },
        'mouseout'  : function (e, x, y) { console.log('route2: mouseout', e.clientX, e.clientY, x, y); },
        'mousedown' : function (e, x, y) { console.log('route2: mousedown', e.clientX, e.clientY, x, y); },
        'mousemove' : function (e, x, y) { console.log('route2: mousemove', e.clientX, e.clientY, x, y); },
        'mouseup'   : function (e, x, y) { console.log('route2: mouseup', e.clientX, e.clientY, x, y); }
    });
    cheese.addRoute('route3', {
        'mouseover' : function (e, x, y) { console.log('route3: mouseover', e.clientX, e.clientY, x, y); },
        'mouseout'  : function (e, x, y) { console.log('route3: mouseout', e.clientX, e.clientY, x, y); },
        'mousedown' : function (e, x, y) { console.log('route3: mousedown', e.clientX, e.clientY, x, y); },
        'mousemove' : function (e, x, y) { console.log('route3: mousemove', e.clientX, e.clientY, x, y); },
        'mouseup'   : function (e, x, y) { console.log('route3: mouseup', e.clientX, e.clientY, x, y); }
    });

    window.cheese = cheese;

}(Cheese, document, console));
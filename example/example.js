(function (Cheese, document, console) {
    'use strict';
    var elem = document.getElementById('viewport'),
        cheese = new Cheese(elem);

    cheese.addRoute('eyedropper', {
        'mouseover' : function (e, x, y) { console.log('eyedropper: mouseover', e.clientX, e.clientY, x, y); },
        'mouseout'  : function (e, x, y) { console.log('eyedropper: mouseout', e.clientX, e.clientY, x, y); },
        'mousedown' : function (e, x, y) { console.log('eyedropper: mousedown', e.clientX, e.clientY, x, y); },
        'mousemove' : function (e, x, y) { console.log('eyedropper: mousemove', e.clientX, e.clientY, x, y); },
        'mouseup'   : function (e, x, y) { console.log('eyedropper: mouseup', e.clientX, e.clientY, x, y); }
    });
    cheese.addRoute('pencil', {
        'mouseover' : function (e, x, y) { console.log('pencil: mouseover', e.clientX, e.clientY, x, y); },
        'mouseout'  : function (e, x, y) { console.log('pencil: mouseout', e.clientX, e.clientY, x, y); },
        'mousedown' : function (e, x, y) { console.log('pencil: mousedown', e.clientX, e.clientY, x, y); },
        'mousemove' : function (e, x, y) { console.log('pencil: mousemove', e.clientX, e.clientY, x, y); },
        'mouseup'   : function (e, x, y) { console.log('pencil: mouseup', e.clientX, e.clientY, x, y); }
    });
    cheese.addRoute('marker', {
        'mouseover' : function (e, x, y) { console.log('marker: mouseover', e.clientX, e.clientY, x, y); },
        'mouseout'  : function (e, x, y) { console.log('marker: mouseout', e.clientX, e.clientY, x, y); },
        'mousedown' : function (e, x, y) { console.log('marker: mousedown', e.clientX, e.clientY, x, y); },
        'mousemove' : function (e, x, y) { console.log('marker: mousemove', e.clientX, e.clientY, x, y); },
        'mouseup'   : function (e, x, y) { console.log('marker: mouseup', e.clientX, e.clientY, x, y); }
    });
    cheese.addRoute('eraser', {
        'mouseover' : function (e, x, y) { console.log('eraser: mouseover', e.clientX, e.clientY, x, y); },
        'mouseout'  : function (e, x, y) { console.log('eraser: mouseout', e.clientX, e.clientY, x, y); },
        'mousedown' : function (e, x, y) { console.log('eraser: mousedown', e.clientX, e.clientY, x, y); },
        'mousemove' : function (e, x, y) { console.log('eraser: mousemove', e.clientX, e.clientY, x, y); },
        'mouseup'   : function (e, x, y) { console.log('eraser: mouseup', e.clientX, e.clientY, x, y); }
    });
    cheese.addRoute('zoompan', {
        'mouseover' : function (e, x, y) { console.log('zoompan: mouseover', e.clientX, e.clientY, x, y); },
        'mouseout'  : function (e, x, y) { console.log('zoompan: mouseout', e.clientX, e.clientY, x, y); },
        'mousedown' : function (e, x, y) { console.log('zoompan: mousedown', e.clientX, e.clientY, x, y); },
        'mousemove' : function (e, x, y) { console.log('zoompan: mousemove', e.clientX, e.clientY, x, y); },
        'mouseup'   : function (e, x, y) { console.log('zoompan: mouseup', e.clientX, e.clientY, x, y); }
    });

    window.cheese = cheese;

}(Cheese, document, console));
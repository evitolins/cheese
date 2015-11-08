(function (Cheese, document, console) {
    'use strict';
    var elem = document.getElementById('viewport'),
        cheese = new Cheese(elem),

        relCoords = function (e, elem) {
            var rect = elem.getBoundingClientRect(),
                offset = {
                    left: rect.left + document.body.scrollLeft,
                    top: rect.top + document.body.scrollTop
                };
            return {
                x : (e.pageX - offset.left),
                y : (e.pageY - offset.top)
            };
        };

    cheese.addRoute('route1', {
        'mouseover' : function (e) { console.log('route1: mouseover', relCoords(e, this).x, relCoords(e, this).y ); },
        'mouseout'  : function (e) { console.log('route1: mouseout', relCoords(e, this).x, relCoords(e, this).y ); },
        'mousedown' : function (e) { console.log('route1: mousedown', relCoords(e, this).x, relCoords(e, this).y ); },
        'mousemove' : function (e) { console.log('route1: mousemove', relCoords(e, this).x, relCoords(e, this).y ); },
        'mouseup'   : function (e) { console.log('route1: mouseup', relCoords(e, this).x, relCoords(e, this).y ); }
    });
    cheese.addRoute('route2', {
        'mousedown' : function (event) { console.log('route2: mousedown', event.clientX, event.clientY); },
        'mouseup'   : function (event) { console.log('route2: mouseup', event.clientX, event.clientY); }
    });
    cheese.addRoute('route3', {
        'mousedown' : function (e) { console.log('route3: mousedown', relCoords(e, this).x, relCoords(e, this).y ); },
        'mousemove' : function (e) { console.log('route3: mousemove', relCoords(e, this).x, relCoords(e, this).y ); },
        'mouseup'   : function (e) { console.log('route3: mouseup', relCoords(e, this).x, relCoords(e, this).y ); }
    });

    var btn1 = document.getElementById('button1');
    var btn2 = document.getElementById('button2');
    var btn3 = document.getElementById('button3');
    btn1.addEventListener('click', function () { cheese.setRoute('route1');} );
    btn2.addEventListener('click', function () { cheese.setRoute('route2');} );
    btn3.addEventListener('click', function () { cheese.setRoute('route3');} );

    cheese.setRoute('route1');

    window.cheese = cheese;

}(Cheese, document, console));


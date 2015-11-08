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
        },

        clear = function () {
            var ctx = elem.getContext('2d');
            ctx.clearRect(0, 0, elem.width, elem.height);
        },

        draw = function (x, y, fillStyle, size) {
            var ctx = elem.getContext('2d');
            size = size || 1;
            ctx.fillStyle = fillStyle;
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
        },

        colorSample = function (x, y) {
            var ctx = elem.getContext('2d'),
                s = ctx.getImageData(x, y, 1, 1);
            return [ s.data[0], s.data[1], s.data[2] ];
        },
        isDragging = false;

    cheese.addRoute('route1', {
        'mouseover' : function (e) { this.style.outlineColor = "blue"; },
        'mouseout'  : function (e) { this.style.outlineColor = ""; },
        'mousedown' : function (e) { isDragging = true; draw(relCoords(e, this).x, relCoords(e, this).y, "red", 1); },
        'mousemove' : function (e) { if (isDragging) { draw(relCoords(e, this).x, relCoords(e, this).y, "red", 1); } },
        'mouseup'   : function (e) { isDragging = false; }
    });
    cheese.addRoute('route2', {
        'mousedown' : function (e) { isDragging = true; draw(relCoords(e, this).x, relCoords(e, this).y, "blue", 4); },
        'mousemove' : function (e) { if (isDragging) { draw(relCoords(e, this).x, relCoords(e, this).y, "blue", 4); } },
        'mouseup'   : function (e) { isDragging = false; }
    });
    cheese.addRoute('route3', {
        'mousedown' : function (e) { isDragging = true; console.log(colorSample(relCoords(e, this).x, relCoords(e, this).y)); },
        'mousemove' : function (e) { if (isDragging) { console.log(colorSample(relCoords(e, this).x, relCoords(e, this).y)); } },
        'mouseup'   : function (e) { isDragging = false; }
    });

    var btn1 = document.getElementById('button1');
    var btn2 = document.getElementById('button2');
    var btn3 = document.getElementById('button3');
    var btn4 = document.getElementById('button4');
    btn1.addEventListener('click', function () { cheese.setRoute('route1'); });
    btn2.addEventListener('click', function () { cheese.setRoute('route2'); });
    btn3.addEventListener('click', function () { cheese.setRoute('route3'); });
    btn4.addEventListener('click', function () { clear(); });

    cheese.setRoute('route1');

    window.cheese = cheese;

}(Cheese, document, console));
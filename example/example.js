(function (Cheese, window, document) {
    'use strict';
    var elem = document.getElementById('viewport'),
        cheese = new Cheese(elem),

        // Example Methods for routes
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

        clear = function (canvas) {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        },

        draw = function (canvas, x, y, fillStyle, size) {
            var ctx = canvas.getContext('2d');
            size = size || 1;
            ctx.fillStyle = fillStyle;
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
        },

        colorSample = function (canvas, x, y) {
            var ctx = canvas.getContext('2d'),
                s = ctx.getImageData(x, y, 1, 1);
            return [ s.data[0], s.data[1], s.data[2], s.data[3] ];
        },
        isDragging = false;


    // Add UI to set routes
    var btn1 = document.getElementById('button1'),
        btn2 = document.getElementById('button2'),
        btn3 = document.getElementById('button3'),
        btn4 = document.getElementById('button4'),
        colorSampled = document.getElementById('colorSampled');
    btn1.addEventListener('click', function () { cheese.setRoute('route1'); });
    btn2.addEventListener('click', function () { cheese.setRoute('route2'); });
    btn3.addEventListener('click', function () { cheese.setRoute('route3'); });
    btn4.addEventListener('click', function () { clear(elem); });


    // Add Route Behaviors
    cheese.addRoute('route1', {
        'mouseover' : function (e) { this.style.outlineColor = "blue"; },
        'mouseout'  : function (e) { this.style.outlineColor = ""; },
        'mousedown' : function (e) { isDragging = true; draw(this, relCoords(e, this).x, relCoords(e, this).y, "red", 10); },
        'mousemove' : function (e) { if (isDragging) { draw(this, relCoords(e, this).x, relCoords(e, this).y, "red", 10); } },
        'mouseup'   : function (e) { isDragging = false; }
    });
    cheese.addRoute('route2', {
        'mousedown' : function (e) { isDragging = true; draw(this, relCoords(e, this).x, relCoords(e, this).y, "blue", 10); },
        'mousemove' : function (e) { if (isDragging) { draw(this, relCoords(e, this).x, relCoords(e, this).y, "blue", 10); } },
        'mouseup'   : function (e) { isDragging = false; }
    });
    cheese.addRoute('route3', {
        'mousedown' : function (e) {
            isDragging = true;
            var c = colorSample(this, relCoords(e, this).x, relCoords(e, this).y);
            colorSampled.style.background = 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')';
        },
        'mousemove' : function (e) {
            if (isDragging) {
                var c = colorSample(this, relCoords(e, this).x, relCoords(e, this).y);
                colorSampled.style.backgroundColor = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + c[3] + ')';
            }
        },
        'mouseup'   : function (e) {
            isDragging = false;
        }
    });

    cheese.setRoute('route1');

    window.cheese = cheese;

}(Cheese, window, document));
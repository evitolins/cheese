# cheese
Routing your mouse events to preset behaviors.


Summary
----------------------------
Cheese allows you easily to route mouse events to specific sets of behaviors.


Getting Started
----------------------------

### Attach a DOM element
```javascript
var elem = document.getElementById('viewport');
var cheese = new Cheese(elem);
```


### Add Routes
Cheese routes expect 5 listener types: `mouseover`, `mouseout`, `mousedown`, `mousemove`, `mouseup`

Cheese-issued event listeners emit 3 arguments: `event`, `relX`, `relY`

```javascript
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
```


### Set Route
```javascript
cheese.setMode('route2');
```


### Disable Listeners
```javascript
cheese.bindEvents(false);
```


How it Works
----------------------------
Cheese removes all previous listeners before connecting the new routes

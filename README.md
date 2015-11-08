# cheese
Routing an element's mouse events to specific sets of behaviors.

```
___________________________________A 
| _____ |   | ___ | ___ ___ | |   | |
| |   | |_| |__ | |_| __|____ | | | |
| | | |_________|__ |______ |___|_| |
| |_|   | _______ |______ |   | ____|
| ___ | |____ | |______ | |_| |____ |
|___|_|____ | |   ___ | |________ | |
|   ________| | |__ | |______ | | | |
| | | ________| | __|____ | | | __| |
|_| |__ |   | __|__ | ____| | |_| __|
|   ____| | |____ | |__ |   |__ |__ |
| |_______|_______|___|___|___|_____|
 B
```



Getting Started
----------------------------
### Install
```bash
bower install -S cheese
```


### Attach a DOM element
```javascript
var elem = document.getElementById('viewport');
var cheese = new Cheese(elem);
```


### Add Routes
- Cheese routes expect 5 listener types: `mouseover`, `mouseout`, `mousedown`, `mousemove`, `mouseup`
- Cheese-issued event listeners deliver 3 arguments: `event`, `relX`, `relY`
- Each listener's `this` scope is assigned to the attached element

```javascript
cheese.addRoute('route1', {
    'mouseover' : function (event, relX, relY) { console.log('route1: mouseover', event, relX, relY); },
    'mouseout'  : function (event, relX, relY) { console.log('route1: mouseout', event, relX, relY); },
    'mousedown' : function (event, relX, relY) { console.log('route1: mousedown', event, relX, relY); },
    'mousemove' : function (event, relX, relY) { console.log('route1: mousemove', event, relX, relY); },
    'mouseup'   : function (event, relX, relY) { console.log('route1: mouseup', event, relX, relY); }
});
cheese.addRoute('route2', {
    'mouseover' : function (event, relX, relY) { console.log('route2: mouseover', event, relX, relY); },
    'mouseout'  : function (event, relX, relY) { console.log('route2: mouseout', event, relX, relY); },
    'mousedown' : function (event, relX, relY) { console.log('route2: mousedown', event, relX, relY); },
    'mousemove' : function (event, relX, relY) { console.log('route2: mousemove', event, relX, relY); },
    'mouseup'   : function (event, relX, relY) { console.log('route2: mouseup', event, relX, relY); }
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



Important Notes
----------------------------
- Cheese has no outside dependences
- Cheese removes all previously assigned listeners before connecting the new routes
    - Uses `bindEvents(false)` method
- `mouseup` listeners is applied to the `window` object, instead of the assigned element


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
- Cheese routes accepts listener types: `mouseover`, `mouseout`, `mousedown`, `mousemove`, `mouseup`
    - `mouseup` listeners is assigned to the `window` object, instead of the assigned element
- Cheese-issued event listeners deliver `event` as it's argument
- Each listener's `this` scope is assigned to Cheese's attached element (ie. #viewport)

```javascript
cheese.addRoute('route1', {
    'mouseover' : function (event) { console.log('route1: mouseover', event.clientX, event.clientY); },
    'mouseout'  : function (event) { console.log('route1: mouseout', event.clientX, event.clientY); },
    'mousedown' : function (event) { console.log('route1: mousedown', event.clientX, event.clientY); },
    'mousemove' : function (event) { console.log('route1: mousemove', event.clientX, event.clientY); },
    'mouseup'   : function (event) { console.log('route1: mouseup', event.clientX, event.clientY); }
});
cheese.addRoute('route2', {
    'mousedown' : function (event) { console.log('route2: mousedown', event.clientX, event.clientY); },
    'mouseup'   : function (event) { console.log('route2: mouseup', event.clientX, event.clientY); }
});
```


### Set Route
```javascript
cheese.setRoute('route2');
```


### Disable Listeners
```javascript
cheese.setRoute();
```



Important Notes
----------------------------
- Cheese has no outside dependences
- Cheese removes all previously assigned listeners before connecting the new routes
    - Uses `bindEvents(false)` method


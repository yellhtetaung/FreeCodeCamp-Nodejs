# Node.js Tutorial

## What is Node.js

A platform allow us to run javaScript on Computer or Server.

- Read, Delete, Upload Files
- Easy Communicate with Database
- Build on Chrome V8 Engine
- Huge Ecosystem with Thousands of Open Source Modules (Packages)
- Perfect for real-time service ( Chat , Video Streaming, 2D Gaming)
- Job Vacancies

## What is V8 Engine

V8 engine ဆိုတာ C++ နဲ့ ရေးထားတဲ့ chrome မှာ အသုံးပြုတဲ့ javascript engine တစ်ခုပဲ ဖြစ်ပါတယ်။

- Computer Doesn't understand JavaScript
- JS Engine make Computer Understand JS
- V8 is heart of Node.js
- Node.js embedded V8 inside

### How does working JavaScript Engine

JavaScript engine သည် JavaScript code ကို run တဲ့ အချိန်မှာ C++ က JavaScript Code တွေကို ယူပြီးတော့ Assembly Code
ပြောင်းပေးတယ်။​ ထို့နောက် Assembly code တွေကို Computer တွေနားလည်တဲ့ Machine Code ကိုပြောင်းပေးပါတယ်။

## Browser vs Node.js

| Browser                 | Node.js                 |
| ----------------------- | ----------------------- |
| DOM                     | No DOM                  |
| Window                  | No Window               |
| Interactive Application | Server Side Application |
| No Filesystem           | Filesystem              |
| Fragmentation           | Version                 |
| ES6 Module              | CommonJS                |

## GLOBALS - NO WINDOW

global variables are anywhere in your application you can access them so no matter how complex my application gets. How
nested it gets or whatever. I'll always have access to those variables and again let me repeat these are just some of
the variables.

| Global Variables | Description                                        |
| :--------------- | :------------------------------------------------- |
| \_\_dirname      | path to current directory                          |
| \_\_filename     | file name                                          |
| require          | function to use module (CommonJS)                  |
| module           | info about current module (file)                   |
| process          | info about env where the program is being executed |

## Module

### Export Module

- [4-name.js](./4-names.js)

```javascript
// local
const secret = "SUPER SECRET";
// share
const john = "john";
const peter = "peter";

module.exports = { john, peter };
```

- [5-utils.js](./5-utils.js)

```javascript
const sayHi = (name) => {
	console.log(`Hello there ${name}`);
};

module.exports = sayHi;
```

### Import Module

```javascript
const names = require("./4-names");
const sayHi = require("./5-utils");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
```

## Alternative Syntax

## EventEmitter

EventEmitter တွေသည် ၎င်း event ကို emit လုပ်တဲ့ အချိန်မှာ callback function ကို ပြန်ခေါ်ပေးတယ်။

EventEmitter မှာ လုပ်ဆောင်ချက် နှစ်ခုရှိတယ်။

1. event တစ်ခုကို စောင့်ရန်၊
2. စောင့်နေတဲ့ event ပေါ်လာရင် callback function ကိုခေါ်ပေးရန်၊

```javascript
myEmitter("eventName", callback);
```

```javascript
var event = require("events");
var myEmitter = new event.EventEmitter();

myEmitter.on("startWork", function () {
	console.log("I am start working");
});

myEmitter.emit("startWork");
```

### EventEmitter With Parameter

```javascript
var event = require("events");

var myEmitter = new event.EventEmitter();

myEmitter.on("donow", function (val) {
	console.log(val);
});

myEmitter.emit("donow", "Hello World");
```

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

JavaScript engine သည် JavaScript code ကို run တဲ့ အချိန်မှာ C++ က JavaScript Code တွေကို ယူပြီးတော့ Assembly Code ပြောင်းပေးတယ်။​ ထို့နောက် Assembly code တွေကို Computer တွေနားလည်တဲ့ Machine Code ကိုပြောင်းပေးပါတယ်။

## Browser vs Node.js

| Browser                 | Node.js                 |
| ----------------------- | ----------------------- |
| DOM                     | No DOM                  |
| Window                  | No Window               |
| Interactive Application | Server Side Application |
| No Filesystem           | Filesystem              |
| Fragmentation           | Version                 |
| ES6 Module              | CommonJS                |

## Global Methods

- setTimeOut ( တစ်ခေါက် အလုပ်လုပ်ပေးပြီးရင် ရပ်သွားမယ် )
- setInterval ( Interval တစ်ခုအတွင်းမှာ အမြဲတမ်း အလုပ်လုပ်နေမယ် )
- clearInterval

### setTimeOut

```javascript
setTimeOut(function () {
 console.log("I have already waited for 3 second.");
}, 3000);
```

### setInterval

```javascript
let i = 0;
setInterval(function () {
 i++;
 console.log(`I have start working! ${i}`);
}, 1000);
```

### clearInterval

```javascript
let i = 0;
const myInterval = setInterval(function () {
 i++;

 if (i === 5) clearInterval(myInterval);
 else console.log(`I have start working! ${i}`);
}, 1000);
```

## Function And Function Expression

### Function

```javascript
function func() {
 console.log("Hello");
}

func();
```

### Function Expression

```javascript
let myFunc = function () {
 console.log("Hello");
};

myFunc();
```

## Module Export And Import

### Export Module

- helper.js

```javascript
var help = function (val) {
 console.log("I will be helping you soon! => " + val);
};

module.exports = help;
```

### Import Module

- app.js

```javascript
var help = require("./helper");

help("Hello World!");
```

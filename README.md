# Node.js Tutorial

## What is Node.js

A platform allow us to run JavaScript on Computer or Server.

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
|-------------------------|-------------------------|
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
|:-----------------|:---------------------------------------------------|
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

- [3-modules.js](./3-modules.js)

```javascript
const names = require("./4-names");
const sayHi = require("./5-utils");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
```

## Build-in Modules

- OS (Operating System Module)
- PATH (Path Module)
- FS (File System Module)
- HTTP (Http Module)

### OS (Operating System Module)

1. Information about current user

   ```javascript
   const os = require("os");
   const user = os.userInfo();
   console.log(user);
   ```

    - result

   ```text
    {
        uid: 501,
        gid: 20,
        username: 'zen',
        homedir: '/Users/zen',
        shell: '/bin/zsh'
    }
   ```

2. Method returns the system uptime in seconds

   ```javascript
    const os = require("os");
    console.log(`The System uptime is ${os.uptime()} seconds`);
   ```

    - result

   ```text
   The System uptime is 534174 seconds
   ```

3. Other OS modules

   ```javascript
    const os = require("os");
    const currentOS = {
      name: os.type(),
      release: os.release(),
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
    };
    
    console.log(currentOS);
   ```

    - result

   ```text
    {
        name: 'Darwin',
        release: '23.1.0',
        totalMemory: 8589934592,
        freeMemory: 36913152
    }
   ```

### Path Module

1. Provides the platform-specific path segment separator

   ```javascript
   const path = require("path");
   console.log(path.sep);
   ```

    - result

   ```text
   /
   ```

2. The path.join() method joins all given path segments together using the platform-specific separator as a delimiter,
   then normalizes the resulting path.

   ```javascript
   const path = require("path");
   const filePath = path.join("/content", "subfolder", "test.txt");
   console.log(filePath);
   ```

    - result

   ```text
   /content/subfolder/test.txt
   ```

3. The path.basename() method returns the last portion of a path

   ```javascript
   const path = require("path");
   const filePath = path.join("/content", "subfolder", "test.txt");
   const base = path.basename(filePath);
   console.log(base);
   ```

    - result

   ```text
   test.txt
   ```

4. The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

   ```javascript
   const path = require("path");
   const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
   console.log(absolute);
   ```

    - result

   ```text
   /Users/zen/Development/Tutorial/Backend/FreeCodeCamp/content/subfolder/test.txt
   ```

### Fs Module (Sync)

- Read File Synchronously ( return string or buffer )

    ```javascript
    readFileSync(path, options);
    ```

   ```javascript
   const { readFileSync } = require("fs");
   
   const first = readFileSync("./content/first.txt", "utf-8");
   const second = readFileSync("./content/second.txt", "utf-8");
   console.log(first, second);
   ```

    - result

   ```text
   Hello this is first text file Hello this is second text file
   ```

- Write File Synchronously

    ```javascript
    writeFielSync(path, data, options);
    ```

   ```javascript
    const { writeFileSync } = require("fs");

    writeFileSync("./content/result-sync.txt", `Here is the result : ${first}, ${second}`, { flag: "a" });
   ```

### Fs Module (Async)

- Read File Asynchronously ( return string or buffer )

   ```javascript
    readFile(path, options, callback(err, data));
   ```

  ```javascript
    const { readFile, writeFile } = require("fs");
    
    readFile("./content/first.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    });
  ```

- Write File Asynchronously

    ```javascript
    writeFile(path, data, callback(err));
    ```

    ```javascript
    const { readFile, writeFile } = require("fs");
    
    readFile("./content/first.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      const first = result;
      readFile("./content/second.txt", "utf-8", (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
    
        const second = result;
        writeFile("./content/result-async.txt", `Here is the result: ${first}, ${second}`, (err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Success!");
        });
      });
    });
    ```

### Synchronous Vs Asynchronous

- **Asynchronous** is a non-blocking architecture, so the execution of one task isn’t dependent on another. Tasks can
  run simultaneously.
- **Synchronous** is a blocking architecture, so the execution of each operation depends on completing the one before
  it. Each task requires an answer before moving on to the next iteration.

The differences between asynchronous and synchronous include:

- **Async** is multi-thread, which means operations or programs can run in parallel.
- **Sync** is a single-thread, so only one operation or program will run at a time.
- **Async** is non-blocking, which means it will send multiple requests to a server.
- **Sync** is blocking — it will only send the server one request at a time and wait for that request to be answered by
  the server.
- **Async** increases throughput because multiple operations can run at the same time.
- **Sync** is slower and more methodical.

### HTTP Module

- Create Server

    ```javascript
    http.createServer(options, requestListener);
    ```

    ```javascript
    const http = require("http");

    const server = http.createServer((req, res) => {
      if (req.url === "/") {
        res.end("Welcome to our home page");
      } else if (req.url === "/about") {
        res.end("Here is our short history");
      } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
        `);
      }
    });
    
    server.listen(3000);
    ```

## NPM

### What is npm

npm is a package manager for JavaScript.

[Documentation of npm](https://docs.npmjs.com/)

### NPM Command

- npm &rarr; global command, comes with node
- npm --version
- local dependency &rarr; use it only in this particular project
    - npm i \<packageName>
- local development dependency &rarr; use it only in this particular project and development dependencies are not
  included in production mode
    - npm i \<packageName> -D
- global dependency &rarr; use it in any project
    - npm i -g \<packageName>
    - sudo npm i -g \<packageName> (for mac & linux)

### NPM initialization

- package.json - manifest file (stores important info about project/package)
- manual approach (create package.json in the root, create properties, etc.)
- npm init (step by step, press enter to skip)
- npm init -y (everything default)
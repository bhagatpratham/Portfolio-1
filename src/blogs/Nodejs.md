---
title: "Node Js for beginners + First Node Js program"
date: "22-11-2021"
---

So recently I started learning Node.js and I was looking for some blogs that can help me get started with Node.js and I didn't find any good blogs that give a brief introduction to Node.js So I thought why not write one.

In this article, we will look at:

1. Introducing Node.js
2. The Node architecture
3. How Node.js works
4. Installing Node.js
5. Your first Node.js program

## Introduction to Node.js

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on Chrome's V8 engine and executes JavaScript code outside a web browser.
Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

(Chrome's V8 Engine is a fast Javascript to the machine-code compiler to load, optimize and run Javascript code which is written in C++)

Node is single-threaded, based on event-driven architecture, and non-blocking based on the I/O model.

**Why we use Node.js ?**

We use Node to build backend services such as Application Programming Interface(API) and the backend of our web apps.

Node.js is ideal for building data-intensive, highly scalable, and real-time applications such as Chat apps, E-commerce apps, Streaming apps, etc.

## The Node Architecture

Node.js uses the “Single Threaded Event Loop” architecture to handle multiple concurrent clients. Node.js Processing Model is based on the JavaScript event-based model along with the JavaScript callback mechanism.

![figure-1.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1625593753798/N9QyHaClA.png)

**The Node Runtime**

-Node API: JavaScript utilities like file and network I/O, and a whole host of others, like cryptography and compression

-The Node core: a set of JavaScript modules that implement the Node API. (Apparently, some of the modules depend on libuv and other C++ code but that’s an implementation detail).

-JavaScript engine: Chrome’s V8 Engine: A fast JavaScript-to-machine code compiler to load, optimize, and run your JavaScript code

-The event loop: implemented using an event-driven, non-blocking I/O library called libuv to make it lightweight and efficient (and scalable)

**Event Loop**

Event-loop is the place where all our asynchronous code is executed.

Node uses [Libuv](https://libuv.org/) as the event loop implementation. To use a Node asynchronous API, you pass a callback function as an argument to that API function, and during the event loop, your callback is executed.

## How Node.js works

Node JS is a single-threaded javascript runtime environment. Basically, Node JS creator( Ryan Dahl ) concern was that parallel processing using multiple threads is not the right way or too complicated.

If node.js doesn't use threads how does it handle concurrent requests in parallel?

Ans: It's a completely wrong sentence when you say it doesn't use threads, Node Js use threads but in a smart way. It uses a single thread to serve all the HTTP requests & multiple threads in the thread pool(in libuv) for handling any blocking operation

Libuv: A library to handle asynchronous I/O.

What does the event I/O model mean?

Ans: The right term is non-blocking I/O. It almost never blocks as the Node.js official site says. When any request goes to the Node server it never queues the request. It takes request and starts executing if it's blocking operation then it's been sent to the working threads area and registered a callback for the same as soon as code execution gets finished, it triggers the same callback and goes to the event queue and processed by the event loop again after that create a response and send to the respective client.

## Installing Node.js

Installing Node on your machine is pretty much easy. If you are on windows, open up your command prompt, and if you use a Mac, open up your terminal. First things first. Let's check if you already have node installed on your machine:

On your command prompt/terminal, run:

```
node --version
```

![nodejs-1-logo.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1625594825011/tGr7KEIpR.png)

As you can see in the picture above, I'm running node version 14.4.0 In this tutorial, I'll run you through how to install the latest version of Node on Windows.

How to install Node on windows
The first step in building any Node.js application is by installing Node on the client system. To perform the installation of Node.js on a Windows machine, follow the steps below:

Step1) Navigate to [Nodejs.org](nodejs.org) in a web browser. Click the Windows Installer button to download the latest default version.

![-jwVJ-JOf.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1625594952784/wTlTxe3Pt.jpeg)

Step2) Once downloaded, double-click on the downloaded.msi file to start the installation. On the first screen, click the Run button to begin the installation.

![yYOprr_eY.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1625594997995/hcCfsR2vD.jpeg)

Step3) You will be welcomed to the Node.js set-up wizard- click Next

Step4) Following that, you will be directed to review the license agreement. Click Next if you agree to the terms and conditions.

![latest.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1625595053069/r6uxRIopR.png)

Step5) The installer will prompt you to choose a default location. Click Next if you're okay with the default location or change it if need be.

Step6) The wizard will prompt you to install some other components. Again, click on Next if you have no specific needs

![wECvqLkzH__.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1625595091112/v5bTzfOPH.png)

Step7)Click on the install button to complete the installation

![pFOkCbVkj....png](https://cdn.hashnode.com/res/hashnode/image/upload/v1625595132583/sdkRkfqPH.png)

## Your first Node.js program

In our first Node program, we will be creating a simple _hello world_ program

Step1) Go to your command prompt (for Windows users) or your terminal (for Mac users) and type the following lines of code:

```
mkdir helloworld
cd helloworld
```

The first command will create a new folder inside the directory that you're currently in, mkdir = "make directory". While the latter, cd = "change directory", in this case, to navigate to the new dir helloworld

Step2) Still on your command prompt/terminal, let's initialize our project and link it to npm-acronym for (Node Package Manager) in our folder.

Run:

```
npm init
```

Running npm init creates a package.json file in our helloworld folder. This file contains references to all npm packages you will download for use on your application.

Step5) Next, go to your preferred text editor and create a file- let's call it index.js

Inside index.js, write the following lines of code:

```
var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
```

Let's quickly explain the code snippet above.

Step 1 - Import Required Module
We use the require directive to load the HTTP module and store the returned HTTP instance into an HTTP variable

Step 2 - Create Server
We use the created HTTP instance and call http.createServer() method to create a server instance and then we bind it at port 8081 using the listen method associated with the server instance. Pass it a function with parameters request and response. Write the sample implementation to always return "Hello World".

Step6) Run the app Now to run the app, go back to your command prompt/terminal, and run:

```
node index.js
```

Now you will see

```
Server running at http://127.0.0.1:8081/
```

Make a Request to the Node.js Server
Open http://127.0.0.1:8081/ in any browser and observe the result.

Find this article useful? Kindly like/leave a comment.

**IF YOU LIKED THE POST, THEN YOU CAN BUY ME MY FIRST COFFEE EVER, THANK YOU**

<a href="https://www.buymeacoffee.com/pratham10" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Thank you for reading, If you enjoyed this post drop a like and comment your thoughts.

**IF YOU LIKED THE POST, THEN YOU CAN BUY ME MY FIRST COFFEE EVER, THANK YOU**

<a href="https://www.buymeacoffee.com/pratham10" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

**Follow me on twitter.**

[![](https://thepracticaldev.s3.amazonaws.com/i/gmrz82bjwhej1f1iqb1e.png)](https://twitter.com/pratham__10)

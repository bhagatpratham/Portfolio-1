---
title: "How to Set up a Node.js Express Server for React"
date: "25-07-2021"
---

[Readers: 14,689](https://dev.to/pratham10/how-to-set-up-a-node-js-express-server-for-react-2fja)

React is a JavaScript library used to build user interfaces and develop single-page applications using reusable UI components. React is used for building front-end apps that can communicate with the back-end server.

A React front-end connected to a Node back-end is a rock-solid combination for any application you want to build.

_This guide is designed to help you create full-stack projects with React as easily as possible._

## Prerequisites

- A text editor
- Node.js installed on your computer
- Prior knowledge of React, Node, and npm

## Tools You Will Need

1. Make sure Node and NPM are installed on your computer. You can download both at [nodejs.org](nodejs.org) (NPM is included in your Node installation)
2. Use a code editor of your choice. I am using and would personally recommend using VSCode. You can download VSCode at [code.visualstudio.com.](code.visualstudio.com)
3. Make sure you have Git installed on your computer. This is necessary for deploying our application with Heroku. You can get it at [git-scm.com](git-scm.com)

## STEP 1: BACKEND

First, create a folder of your project, name it as _react-node-app_ , open this folder in your text editor

To create our Node project open your terminal and run the following command

```
npm init -y
```

By running this you will see package.json file has been created in our folder, This file will help us to manage dependencies our app needs.

Now, in our terminal we will install express as a dependency

```
npm i express
```

After that, we will create a script in package.json that will start our web server when we run it with npm start:

```
...
"scripts": {
  "start": "node server/index.js"
},
...
```

Our package.json file should look like this

```
{
  "name": "react-node-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

Now, create a new folder in our project and name it server.
Inside server create index.js file.

We'll use Express to create a simple web server for us which runs on port 3001

```
// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```

We can now run our app using this script _npm start_ in our terminal

```
npm start

> node server/index.js

Server listening on 3001
```

## Step 2: Create an API Endpoint

We want to use our Node and Express server as an API, so that it can give our React app data.

set a GET route that we will, later on, fetch from our client-side React App.

```
// server/index.js
...

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```

Make sure you put this above app.listen

Here, we are simply sending "Hello from Express" to our react app

Since, we have made changes to our server we have to restart our server
To do that, open your terminal press commmand/ctrl + c, amd then restart the server by running npm start

Now we can simply visit http://localhost:3001/api in our browser and see our message:

**{"message": "Hello from Express"}**

## Step 3: Creating React front-end

Let's move to our front-end part now

Open another terminal tab and use create-react-app to create a new React project with the name client:

```
npx create-react-app client
```

### Setting up proxy

In this step, the Webpack development server was auto-generated when we ran the create-react-app command.

Webpack Development Server (WDS) is a tool that helps the developers make changes to the web app’s frontend and renders them to the browser with no need to refresh the browser.

The only change we have to make is to add a property called proxy to our package.json file.

This will allow us to make requests to our Node server without having to provide the origin it is running on (http://localhost:3001) every time we make a network request to it:

```
// client/package.json

...
"proxy": "http://localhost:3001",
...
```

The modified package.json file will look like this

```
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:3001"
}
```

Now we can start up our React app by running its start script, which is the same as our Node server. First make sure to cd into the newly-created client folder.

After that, will start up on localhost:3000:

```
cd client
npm start

Compiled successfully!

You can now view client in the browser.

http://localhost:3000
```

## Step 4: Make HTTP Requests from React to Node

Now that we have a working React app, we want to use it to interact with our API.

Let's see how to fetch data from the /api endpoint that we created earlier.

To do so, we can head to the App.js component in our src folder and make an HTTP request using useEffect.

We will make a simple GET request using the Fetch API to our backend and then have our data returned as JSON.

Once we have the data returned to us, we will get the message property (to grab our greeting that we sent from the server) and then put it in a state variable called data.

This will allow us to display that message in our page if we have it. We are using a conditional in our JSX to say that if our data is not there yet, show the text "Loading...".

```
// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
```

## Conclusion

A lot can be done with Express backend, like make calls to the database, but on this guide, we have concentrated on how to quickly connect to the backend Express server from client-side React App.

The code snippets and files used in this guide can be accessed at the [GitHub repository here](https://github.com/bhagatpratham/react-node-boilerplate) .

**IF YOU LIKED THE POST, THEN YOU CAN BUY ME MY FIRST COFFEE EVER, THANK YOU**

<a href="https://www.buymeacoffee.com/pratham10" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

**Happy coding!**

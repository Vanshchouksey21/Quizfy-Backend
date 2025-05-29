require('dotenv').config();  // Load env variables

const mongoose = require('mongoose');
const Question = require('./models/Question'); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    return Question.insertMany(questions);
  })
  .then(() => {
    console.log('Questions inserted successfully');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });


const questions = [
  // --- HTML ---
  {
    subject: "html",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Marking Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    subject: "html",
    question: "Which element is used to specify a footer for a document or section?",
    options: ["<footer>", "<bottom>", "<section>", "<foot>"],
    answer: "<footer>"
  },
  {
    subject: "html",
    question: "Which tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    subject: "html",
    question: "Which attribute specifies the destination URL of a link?",
    options: ["src", "href", "link", "url"],
    answer: "href"
  },
  {
    subject: "html",
    question: "What does the <canvas> element allow you to do?",
    options: [
      "Display video",
      "Draw graphics via scripting",
      "Add audio",
      "Create forms"
    ],
    answer: "Draw graphics via scripting"
  },
  {
    subject: "html",
    question: "Which element is used to embed an external webpage within the current page?",
    options: ["<embed>", "<iframe>", "<frame>", "<object>"],
    answer: "<iframe>"
  },
  {
    subject: "html",
    question: "Which attribute is used to specify an image's alternate text?",
    options: ["alt", "title", "src", "caption"],
    answer: "alt"
  },
  {
    subject: "html",
    question: "Which tag is used to add a line break?",
    options: ["<break>", "<br>", "<lb>", "<newline>"],
    answer: "<br>"
  },
  {
    subject: "html",
    question: "Which element contains metadata about the document?",
    options: ["<meta>", "<head>", "<data>", "<info>"],
    answer: "<head>"
  },
  {
    subject: "html",
    question: "How do you add a comment in HTML?",
    options: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
      "# This is a comment"
    ],
    answer: "<!-- This is a comment -->"
  },

  // --- CSS ---
  {
    subject: "css",
    question: "Which property controls the text color of an element?",
    options: ["color", "text-color", "font-color", "background-color"],
    answer: "color"
  },
  {
    subject: "css",
    question: "How do you select all elements with class 'button'?",
    options: [".button", "#button", "button", "*button"],
    answer: ".button"
  },
  {
    subject: "css",
    question: "Which CSS property is used to change the font size?",
    options: ["font-weight", "font-style", "font-size", "text-size"],
    answer: "font-size"
  },
  {
    subject: "css",
    question: "What is the default position value of an element?",
    options: ["static", "relative", "absolute", "fixed"],
    answer: "static"
  },
  {
    subject: "css",
    question: "Which property controls the spacing between letters?",
    options: ["letter-spacing", "word-spacing", "text-indent", "line-height"],
    answer: "letter-spacing"
  },
  {
    subject: "css",
    question: "How do you make an element float to the right?",
    options: ["float: right;", "align: right;", "position: right;", "text-align: right;"],
    answer: "float: right;"
  },
  {
    subject: "css",
    question: "Which property is used to change the background image?",
    options: ["background-img", "background-image", "bg-image", "image-background"],
    answer: "background-image"
  },
  {
    subject: "css",
    question: "How do you make text bold in CSS?",
    options: ["font-weight: bold;", "font-style: bold;", "text-decoration: bold;", "text-weight: bold;"],
    answer: "font-weight: bold;"
  },
  {
    subject: "css",
    question: "Which pseudo-class applies when the user mouses over an element?",
    options: [":hover", ":mouse", ":mouseover", ":focus"],
    answer: ":hover"
  },
  {
    subject: "css",
    question: "How do you write a comment in CSS?",
    options: ["/* This is a comment */", "// This is a comment", "<!-- This is a comment -->", "# This is a comment"],
    answer: "/* This is a comment */"
  },

  // --- JavaScript ---
  {
    subject: "javascript",
    question: "Which symbol is used for single line comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: "//"
  },
  {
    subject: "javascript",
    question: "Which method converts a JSON string to a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    answer: "JSON.parse()"
  },
  {
    subject: "javascript",
    question: "How do you declare a variable that cannot be reassigned?",
    options: ["const", "let", "var", "static"],
    answer: "const"
  },
  {
    subject: "javascript",
    question: "Which keyword declares a block-scoped variable?",
    options: ["let", "var", "const", "static"],
    answer: "let"
  },
  {
    subject: "javascript",
    question: "Which function is used to schedule code to run after a delay?",
    options: ["setTimeout()", "setInterval()", "setDelay()", "setSchedule()"],
    answer: "setTimeout()"
  },
  {
    subject: "javascript",
    question: "How do you check the type of a variable?",
    options: ["typeof", "type", "instanceof", "classOf"],
    answer: "typeof"
  },
  {
    subject: "javascript",
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    subject: "javascript",
    question: "What is the result of '2' + 2 in JavaScript?",
    options: ["'22'", "4", "NaN", "Error"],
    answer: "'22'"
  },
  {
    subject: "javascript",
    question: "How do you write an arrow function?",
    options: ["() => {}", "function() {}", "func => {}", "() => func"],
    answer: "() => {}"
  },
  {
    subject: "javascript",
    question: "Which method removes the last element from an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "pop()"
  },

  // --- React ---
  {
    subject: "react",
    question: "Which hook is used for side effects in functional components?",
    options: ["useEffect", "useState", "useReducer", "useContext"],
    answer: "useEffect"
  },
  {
    subject: "react",
    question: "What is JSX?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript and XHTML",
      "Java Syntax Expression"
    ],
    answer: "JavaScript XML"
  },
  {
    subject: "react",
    question: "How do you create a React component?",
    options: [
      "function MyComponent() {}",
      "component MyComponent() {}",
      "createComponent MyComponent() {}",
      "new Component()"
    ],
    answer: "function MyComponent() {}"
  },
  {
    subject: "react",
    question: "How do you pass data to a child component?",
    options: ["props", "state", "context", "hooks"],
    answer: "props"
  },
  {
    subject: "react",
    question: "How do you update state in a class component?",
    options: ["this.setState()", "this.state = {}", "setState()", "updateState()"],
    answer: "this.setState()"
  },
  {
    subject: "react",
    question: "What does 'key' prop do in lists?",
    options: [
      "Helps React identify which items have changed",
      "Assigns a unique ID",
      "Stores component state",
      "Triggers re-render"
    ],
    answer: "Helps React identify which items have changed"
  },
  {
    subject: "react",
    question: "Which hook is used to manage local component state?",
    options: ["useState", "useEffect", "useContext", "useRef"],
    answer: "useState"
  },
  {
    subject: "react",
    question: "How do you conditionally render content?",
    options: ["{condition && <Component />}", "if(condition) {<Component />}", "render if condition", "show component if condition"],
    answer: "{condition && <Component />}"
  },
  {
    subject: "react",
    question: "What lifecycle method is called after the component is rendered?",
    options: ["componentDidMount", "componentWillMount", "componentWillUnmount", "render"],
    answer: "componentDidMount"
  },
  {
    subject: "react",
    question: "What is the default export in a React component file?",
    options: ["Component", "default", "class", "function"],
    answer: "Component"
  },

  // --- Node ---
  {
    subject: "node",
    question: "Which module is used to create an HTTP server?",
    options: ["http", "https", "net", "url"],
    answer: "http"
  },
  {
    subject: "node",
    question: "How do you import a module in Node.js?",
    options: ["require()", "import", "include", "load"],
    answer: "require()"
  },
  {
    subject: "node",
    question: "Which command initializes a new Node.js project?",
    options: ["npm init", "node init", "npm start", "node start"],
    answer: "npm init"
  },
  {
    subject: "node",
    question: "What is npm?",
    options: [
      "Node Package Manager",
      "Node Project Manager",
      "New Package Manager",
      "Network Package Manager"
    ],
    answer: "Node Package Manager"
  },
  {
    subject: "node",
    question: "Which function reads a file asynchronously?",
    options: ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
    answer: "fs.readFile()"
  },
  {
    subject: "node",
    question: "Which global object provides file system operations?",
    options: ["fs", "file", "system", "path"],
    answer: "fs"
  },
  {
    subject: "node",
    question: "How do you listen on port 3000 in a Node server?",
    options: ["server.listen(3000)", "listen(3000)", "app.listen(3000)", "server.start(3000)"],
    answer: "server.listen(3000)"
  },
  {
    subject: "node",
    question: "Which of these is NOT a core Node.js module?",
    options: ["express", "http", "fs", "path"],
    answer: "express"
  },
  {
    subject: "node",
    question: "How do you install a package globally?",
    options: ["npm install -g package", "npm install package", "npm add package", "npm get package"],
    answer: "npm install -g package"
  },
  {
    subject: "node",
    question: "Which method synchronously writes data to a file?",
    options: ["fs.writeFileSync()", "fs.writeFile()", "fs.appendFile()", "fs.write()"],
    answer: "fs.writeFileSync()"
  },

  // --- Express ---
  {
    subject: "express",
    question: "Which method defines a route handler for GET requests?",
    options: ["app.get()", "app.post()", "app.put()", "app.delete()"],
    answer: "app.get()"
  },
  {
    subject: "express",
    question: "How do you parse JSON request bodies in Express?",
    options: [
      "app.use(express.json())",
      "app.use(bodyParser.json())",
      "app.json()",
      "app.parseJSON()"
    ],
    answer: "app.use(express.json())"
  },
  {
    subject: "express",
    question: "Which middleware is used to serve static files?",
    options: [
      "express.static()",
      "serve.static()",
      "static.serve()",
      "app.static()"
    ],
    answer: "express.static()"
  },
  {
    subject: "express",
    question: "Which object represents the HTTP request?",
    options: ["req", "res", "request", "response"],
    answer: "req"
  },
  {
    subject: "express",
    question: "How do you start an Express server on port 3000?",
    options: ["app.listen(3000)", "server.listen(3000)", "express.listen(3000)", "listen(3000)"],
    answer: "app.listen(3000)"
  },
  {
    subject: "express",
    question: "How do you define a POST route at '/submit'?",
    options: ["app.post('/submit', callback)", "app.get('/submit', callback)", "app.route('/submit').post(callback)", "app.submit('/submit', callback)"],
    answer: "app.post('/submit', callback)"
  },
  {
    subject: "express",
    question: "Which method sends a JSON response?",
    options: ["res.json()", "res.sendJSON()", "res.send()", "res.write()"],
    answer: "res.json()"
  },
  {
    subject: "express",
    question: "How can you handle errors in Express?",
    options: ["Using middleware with 4 arguments", "Using try-catch", "Using res.error()", "Using next()"],
    answer: "Using middleware with 4 arguments"
  },
  {
    subject: "express",
    question: "How do you extract route parameters?",
    options: ["req.params", "req.query", "req.body", "req.route"],
    answer: "req.params"
  },
  {
    subject: "express",
    question: "Which module is required to handle cookies?",
    options: ["cookie-parser", "express-cookies", "cookies", "cookie-handler"],
    answer: "cookie-parser"
  },

  // --- MERN ---
  {
    subject: "mern",
    question: "What does MERN stand for?",
    options: [
      "MongoDB, Express, React, Node.js",
      "MySQL, Express, React, Node.js",
      "MongoDB, Ember, React, Node.js",
      "MongoDB, Express, Redux, Node.js"
    ],
    answer: "MongoDB, Express, React, Node.js"
  },
  {
    subject: "mern",
    question: "Which database is used in the MERN stack?",
    options: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
    answer: "MongoDB"
  },
  {
    subject: "mern",
    question: "Which framework is used for the backend in MERN?",
    options: ["Express", "React", "Angular", "Vue"],
    answer: "Express"
  },
  {
    subject: "mern",
    question: "Which library is used for frontend in MERN?",
    options: ["React", "Angular", "Vue", "Ember"],
    answer: "React"
  },
  {
    subject: "mern",
    question: "Which runtime environment runs the backend in MERN?",
    options: ["Node.js", "Deno", "Java", ".NET"],
    answer: "Node.js"
  },
  {
    subject: "mern",
    question: "Which package manager is commonly used in MERN projects?",
    options: ["npm", "pip", "gem", "cargo"],
    answer: "npm"
  },
  {
    subject: "mern",
    question: "How do you start a React development server?",
    options: ["npm start", "npm run dev", "node server.js", "npm serve"],
    answer: "npm start"
  },
  {
    subject: "mern",
    question: "Which method is used to find documents in MongoDB?",
    options: ["find()", "search()", "get()", "query()"],
    answer: "find()"
  },
  {
    subject: "mern",
    question: "Which package is used to connect Node.js with MongoDB?",
    options: ["mongoose", "mongo", "mongodb-client", "mongojs"],
    answer: "mongoose"
  },
  {
    subject: "mern",
    question: "How do you define a schema in Mongoose?",
    options: ["new mongoose.Schema()", "new Schema()", "mongoose.schema()", "Schema()"],
    answer: "new mongoose.Schema()"
  },

  // --- C++ ---
  {
    subject: "c++",
    question: "Which of the following is a valid way to declare a variable in C++?",
    options: ["int x;", "var x;", "let x;", "dim x;"],
    answer: "int x;"
  },
  {
    subject: "c++",
    question: "Which operator is used to allocate memory dynamically?",
    options: ["new", "malloc", "alloc", "create"],
    answer: "new"
  },
  {
    subject: "c++",
    question: "What is the default access modifier for class members in C++?",
    options: ["private", "public", "protected", "internal"],
    answer: "private"
  },
  {
    subject: "c++",
    question: "Which keyword is used to inherit a class?",
    options: ["public", "extends", "inherits", "implements"],
    answer: "public"
  },
  {
    subject: "c++",
    question: "What is the correct syntax to define a function that returns an int?",
    options: ["int functionName() {}", "functionName int() {}", "int functionName[] {}", "function intName() {}"],
    answer: "int functionName() {}"
  },
  {
    subject: "c++",
    question: "Which header file is required for input/output operations?",
    options: ["<iostream>", "<stdio.h>", "<conio.h>", "<stdlib.h>"],
    answer: "<iostream>"
  },
  {
    subject: "c++",
    question: "Which operator is used to access members of a pointer to an object?",
    options: ["->", ".", "*", "&"],
    answer: "->"
  },
  {
    subject: "c++",
    question: "Which of these is NOT a loop in C++?",
    options: ["foreach", "for", "while", "do-while"],
    answer: "foreach"
  },
  {
    subject: "c++",
    question: "What is the output of this code: cout << 3 + 4 << endl;",
    options: ["7", "34", "3+4", "Error"],
    answer: "7"
  },
  {
    subject: "c++",
    question: "Which statement is used to exit a loop early?",
    options: ["break", "continue", "exit", "return"],
    answer: "break"
  },

  // --- DSA ---
  {
    subject: "dsa",
    question: "What does DSA stand for?",
    options: [
      "Data Structures and Algorithms",
      "Digital Systems Architecture",
      "Distributed System Application",
      "Data Science Analysis"
    ],
    answer: "Data Structures and Algorithms"
  },
  {
    subject: "dsa",
    question: "Which data structure uses FIFO principle?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    answer: "Queue"
  },
  {
    subject: "dsa",
    question: "Which algorithm is used for sorting?",
    options: ["QuickSort", "DFS", "BFS", "Dijkstra"],
    answer: "QuickSort"
  },
  {
    subject: "dsa",
    question: "What is the time complexity of binary search?",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
    answer: "O(log n)"
  },
  {
    subject: "dsa",
    question: "Which data structure uses LIFO principle?",
    options: ["Stack", "Queue", "Heap", "Graph"],
    answer: "Stack"
  },
  {
    subject: "dsa",
    question: "Which graph traversal algorithm uses a queue?",
    options: ["BFS", "DFS", "Dijkstra", "Prim"],
    answer: "BFS"
  },
  {
    subject: "dsa",
    question: "What is the height of a balanced binary tree with n nodes?",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
    answer: "O(log n)"
  },
  {
    subject: "dsa",
    question: "Which data structure is used to implement recursion?",
    options: ["Stack", "Queue", "Heap", "Graph"],
    answer: "Stack"
  },
  {
    subject: "dsa",
    question: "Which algorithm finds the shortest path in a weighted graph?",
    options: ["Dijkstra", "DFS", "BFS", "Kruskal"],
    answer: "Dijkstra"
  },
  {
    subject: "dsa",
    question: "What is the worst-case time complexity of QuickSort?",
    options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
    answer: "O(n^2)"
  }
]  





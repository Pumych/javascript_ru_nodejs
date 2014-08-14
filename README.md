Summary of course:

1. About course

2. Why node.js
    2.1. JS instead of PHP (or other server side language )
    2.2. Same code on client and on server
    2.3. Easy start
    2.4. Packet manager

3.1. Install
    - How to in google: node.js debian (http://sekati.com/etc/install-nodejs-on-debiaqn-squeeze)

3.2. Run:
    - /ex3$ node 1.js

4. Documentation
    4.1. Source code examples (http://nodejs.org/download) C++ codes or JS codes (node/lib folder)
    4.2. API - http://nodejs.org/api/
    4.3. Stability: 3+

5. Modules
    5.1. PhpStorm configurations for autocomplete and highlighting
        5.1.1. Settings -> Search: node.js -> JavaScript/Node.js -> Edit usage scope -> Project level: library, set "Node.js Globals" and
            "Node.js Core"
    5.2. Include files:
        require('./filename.js');
        require('./filename');
    5.3. Export files:
        function User(){ ... }
        exports.User = User;
    5.4. Global function:
        global.User = User;
6. Module - methods (module variable)
    6.1. module inside: id, exports, parent, filename, loaded, children, path
    6.2. module.exports = Obj;
    6.3. exports.Obj = Obj;
    6.4. Caching required modules
    6.5. Require module - module search order (by file name, folder name, node_modules folder in current and in parents, NODE_PATH)





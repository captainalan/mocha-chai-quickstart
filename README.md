# Mocha & Chai Quickstart

This repository is a sort of work-in-progress "notebook" of things I'm learning
to do with Chai/Mocha. I'm compiling many different things I learned from many
different tutorials, unifying things with:

- ES6 syntax
- What I consider humor 😒 

## Getting started

Start the express server:

```bash
node index.js
```

Run the tests:

```bash
npm test
```

All the tests should pass. Admittedly, this project doesn't really *do* anything
now 😅

However, it does show a basic set up for how a useful program *could* be put
together using the JavaScript based technologies Express (server),
Mocha/Chai(testing), and custom modules (here, in the `app/` directory).

## What's included

The file `index.js` is an Express server.

The `app/` directory contains a custom module in the file `onesies.js`. It's
very short; I'll even copy/paste it here.

```javascript
exports.getOne = () => "one";
exports.get1 = () => "1";
```

The `tests/` directory contains tests for the functions in `app/` when they are
"offline" as well as in the context of an Express server, such as the one
written in `index.js`. In order for all tests to pass, the server must be
running *à la* `node index.js` from this project's root directory.

## Where to go from here

[Test-driven development
(TDD)](https://en.wikipedia.org/wiki/Test-driven_development) seems to be a
fine way to build and deploy working software. By making use of testing tools
like Mocha (a "test framework") and Chai (an "assertion library") you can spend
more time fooling and less time tooling.


## References

- [Getting Started with Node.js and
  Mocha](https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha)
  (2015)

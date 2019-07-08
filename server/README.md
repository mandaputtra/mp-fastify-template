# Matterhorn 🏔

An API Boilerplate project built with Node.js and Typescript.

- ⏱ Runtime: [Node.js](https://nodejs.org/en/)
- 🖥 API Framework: [Fastify](https://www.fastify.io/)
- 🔏 Type System: [TypeScript](https://www.typescriptlang.org/)
- 🧪 Test Runner: [Jest](https://jestjs.io/)
- 👕 Linter: [ESLint](https://eslint.org/)
- 📦 Continuous Integration: [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/)

## Quick Start
1. 🍴 Fork the repository
2. 👯‍♀️ Clone it to your computer 
3. 🏃‍♀️ Run npm run install && npm run dev
4. 📝 Edit any of the files in src/
5. 👀 Watch as the app magically rebuilds and relaunches itself

## Scripts

The following npm scripts can be run using `npm run <script>`. This project relies on `opn` and `rimraf` utilities in order to support cross-platform opening and deleting files.

- `build` - build the TypeScript files and output to `lib/`
- `build:watch` - automatically rebuild files if changes are detected in `src/`
- `clean `- recursively delete the `lib/` and `coverage/` directories
- `clean:build `- recursively delete the `lib/` directory
- `clean:coverage` - recursively delete the `coverage/` directory
- `coverage `- run the test suite and generate code coverage reports
- `coverage:open` - run npm run coverage then open the results in a browser
- `dev `- concurrently run `build:watch` and `start:watch` 
- `lint `- run the linter configured by TSLint on the `src/` directory
- `start` - run the app from `lib/`. Make sure to use npm run build first!
- `start:watch` - relaunch the server if new changes are detected in `lib/` 
- `test `- run unit tests defined in the `tests/` directory
- `test:ci `- run unit tests and generate necessary files for CI integration

## Command Line Arguments & Environment Variables

Matterhorn implements example usage of both command line arguments and environment variables. It uses `yargs-parser` to manage command line arguments. Command line arguments are passed in through the start command: `node lib/index.js <command line arguments>`. The `--log` argument has been enabled as an example. Running `npm run start` starts up the project without any command line arguments. This command is intended to be used in production, so logging is disabled by default (i.e. we don't pass the `--log` argument). If you are using this command to test your code locally and want to see the logging output, then run `npm run start -- --log`. This passes the command line argument through npm and into the aliased command.

Environment variables work in a similar way to command line arguments. They can be set in multiple ways depending on the terminal and operating system you are using. In a bash terminal you can specify environment variables as you use any of the above mentioned scripts by prepending the assignment to the command. For example, this project has the *PORT* environment variable enabled. In a bash terminal run `PORT=8080 npm run start` to run the API on port 8080.

## Contributing

Open an **issue** if you'd like to report a bug or a feature. Make sure to write a detailed description and indicate if you will or will not be resolving the issue yourself.

If you are interested in contributing make sure to follow these practices:
- Prepend branches with `fix/`, `feature/`, or `docs/` depending on the change being made
- NPM commands `test`, `lint`, and `build` run without failing. 
- If you are solving an open issue, reference it in the Pull Request description using `Ref #<issue number>`.

## Jest

Matterhorn has a unique Jest set up. Under the [`jest/`](./jest) directory there are three configuration files [`ci.config.json`](./jest/ci.config.json), [`coverage.config.json`](./jest/coverage.config.json), and [`test.config.json`](./jest/test.config.json). Each configuration file maps to a specific jest experience.

#### npm run test

Runs jest with the `test.config.json` configuration. This configuration does not collect any code coverage.

#### npm run coverage

Runs jest with the `coverage.config.json` configuration. It runs the same test suite as `npm run test` and collects coverage from all files under the [`src/`](./src) directory. It outputs the coverage information in the following formats: `json`, `text`, `lcov`, and `html`. It does not rely on any external reporter dependencies.

#### npm run test:ci

Runs jest with the `ci.config.json` configuration. It runs the same test suite as `npm run test` and collects coverage similar to the `npm run coverage` command, but utilizes jest's built in `ci` caching functionality. Additionally, it outputs the coverage in the following formats: `html`, `json`, and `cobertura`. It utilizes `jest-junit` reporter to generate compatible junit xml files for Azure DevOps test reporting, and the `cobertura` format for the code coverage reporting.

<hr>

### Maintainers
🦉 Ethan Arrowood _Original Author_ - Follow on: Twitter [@ArrowoodTech](https://twitter.com/arrowoodtech) & GitHub [@Ethan-Arrowood](https://github.com/Ethan-Arrowood/)

🚀 Alyssa Cooper _Maintainer_ - Follow on: Twitter [@ayecoops](https://twitter.com/ayecoops) & GitHub [@Alyssa-Cooper](https://github.com/Alyssa-Cooper/)

<hr>

### Integration Statuses

[![Build Status](https://dev.azure.com/matterhorndev/matterhorn/_apis/build/status/MatterhornDev.matterhorn?branchName=master)](https://dev.azure.com/matterhorndev/matterhorn/_build/latest?definitionId=1&branchName=master) [![Greenkeeper badge](https://badges.greenkeeper.io/MatterhornDev/matterhorn.svg)](https://greenkeeper.io/)
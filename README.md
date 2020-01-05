# Mandaputtra Fastify Project Template

My go to tempate for creating REST API. These will be planned as monolith REST APP, but can be easly torn apart to be a Microservices.

## Requirements

1. Node.js (Latest LTS)
2. Postgress (You can change the SQL Client on knexfile.js)


## Getting Started

Clone this repo to your folder

```
$ git clone git@github.com:mandaputtra/mp-fastify-template.git api
```

Install dependencies

```
$ npm i -g nodemon # if you don't had one
$ npm i
```

Specify your environment variable on `.env` and start the project.

```
$ npm run dev # development mode
$ npm start # production mode
$ npm test # test mode
```

For windows please install `win-node-env` for ENV terminal compatibility with UNIX.

```
$ npm i -g win-node-env
```

## Acknowledgement

Some major library this project use :

1. fastify
2. knex
3. husky
4. eslint

Other can be found on [package.json](./package.json)


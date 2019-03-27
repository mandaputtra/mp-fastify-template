# Server

```bash
\\ install

npm intall

\\ run dev mode with hot reload (chokidar)

npm run dev

\\ run production, no hot reload

npm run start

```

Please use env to specify your ENV and another things, pretty print with `pino` will be disabled in
production mode. Thanks


### Note on using JWT

Please make your own signed key, at least it blocks you from other human trying to decode your payload.
but always make sure the payload you are sending arent user secret information.

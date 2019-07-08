# vf-cms
A CMS starter with vuejs and fastify (WIP)

This happen because i think every project are must have a CMS, but even I cant spell the right name of this project.

This project are still WIP and not open on contribution before the skeleton was ready. This would not be like stripe.io (they are great as hell), this will be like super simple cms that you can edit to the core without being confused.

For the sake of learn I'll use fastify and vuejs together.

The roadmap :

### Front-end:
  - [x] Login page
  - [ ] Admin page
  - [x] Other than Admin page
  - [ ] Chart
  - [ ] User
    - [ ] User Permission
    - [ ] User CRUD
  - [ ] Menu
    - [ ] Menu Permission
  - [ ] Some other menu to provide example
  - [ ] Docs


### Back-end
  - [x] Implement fastify service per module
  - [x] Auth (login/register)
  - [ ] User permissions
  - [x] Database setup
  - [ ] Provide API to front-end
  - [ ] Docs
  - [ ] Websockets using primus.io / native ws

  Thanks hope i'll finish it as fast as I can

#### Stories

This section kind of give me a track on what decision I make when building this app.

- Not RESTfull anymore :( there is an article about how to storing [JWT](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage) it makes me think and use cookies and sessions instead of use it as usual on `localStorage`

- I'm using [Yarn](https://yarnpkg.com/en/) its still faster thatn NPM so yeah...
- Long not updated! Changed database to SQL based! Postgress\
- I decided to throw auth on localStorage, instead of cookies, more reliable instead of cookies.

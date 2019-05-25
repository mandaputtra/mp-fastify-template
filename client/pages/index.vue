<template>
  <v-layout justify-center column fill-height>
    <v-flex>
      <v-card class="elevation-0 mb-3">
        <v-card-title>
          <div>
            <p class="headline mb-2">
              <b>Welcome to <i>vf-cms</i></b>
            </p>
            <p class="caption mb-0">
              the list of feature on this cms :
            </p>
          </div>
        </v-card-title>
      </v-card>
      <v-card class="elevation-0 mb-3">
        <v-card-text>
          <p>
            This CMS are handmade by
            <a href="https://github.com/mandaputtra">mandaputtra</a> because
            working with many client arent like startup, I'm just tired of
            choosing the right CMS that flexible if I need that I can add this
            or that, and almost every client need some custom CMS.
          </p>
          <p>
            Wordpress are great had many plugins, Strapi.io are great too, but I
            just need CMS that I easly understand to the core. That makes this
            maintainable whatsoever.
          </p>
          <p>
            So I keep this very flexible to manage, and to customize along with
            the back-end module. I love <b>Vue.js</b> and <b>fastify</b>, thats
            why I choose this as a main framework for this apps.
          </p>
        </v-card-text>
      </v-card>
      <v-card class="elevation-0">
        <v-card-actions class="pa-0">
          <v-btn flat block @click="$router.push('/login')">
            Login
          </v-btn>
          <v-btn flat block @click="$router.push('/register')">
            Register
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-card />
  </v-layout>
</template>

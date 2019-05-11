<template>
  <v-toolbar flat class="transparent">
    <v-list class="pa-0">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <!-- eslint-disable-next-line vue/html-self-closing -->
          <img
            src="https://api.adorable.io/avatars/285/aadatt@adorable.io.png"
          />
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            {{ $store.state.users.data.email }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-toolbar>
</template>

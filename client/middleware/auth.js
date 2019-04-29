export default function({ app, store, redirect }) {
  // const cookies = app.$cake.get('_sessions')
  if (!store.state.users.authUser) {
    redirect('/login')
  }
}

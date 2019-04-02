export default function({ store, redirect }) {
  if (!store.state.users.authUser) {
    redirect('/login')
  }
}

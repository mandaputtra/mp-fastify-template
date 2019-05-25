const mongoose = require('mongoose')
const UserModel = require('../../models/user.model')

mongoose.connect(`mongodb://localhost:27017/vfcms`, {
  useNewUrlParser: true,
  useCreateIndex: true
})

// programatically later
const superAdmin = new UserModel({
  email: 'manda2@mail.com',
  role: 'superadmin',
  password: '$2b$10$53xFQ4giPL6KDsA1o5ywIOr.78i6rDQUQu9GF8TWhs4HxH4iOyUA2' // 12345678
})

superAdmin
  .save()
  .then(() => {
    console.log('Database <vfcms> created')
    console.log('Superadmin with <manda2@mail.com>12345678 Generated')
    process.exit()
  })
  .catch(err => err)

import app from './app'

const port = 1111

app.listen(port, () => {
  console.log('at', port)
  console.log('db host is', process.env.DB_HOST)
})

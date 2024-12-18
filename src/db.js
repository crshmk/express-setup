const connectDb = async () => {
  await Promise.resolve()
  console.log('connected to db', '\n')
}

connectDb().catch(console.error)
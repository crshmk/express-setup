export default function getUser(req, res, next) {
  const { userId } = req.params

  req.user = { userId, name: 'jo'}

  next()
}
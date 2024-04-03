export default function sendPublicUser(req, res) {
  const { user } = req 

  res.json({ user })
}
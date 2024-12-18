Basic express setup

- api on :8001/api/v1
- web socket on :8002

```javascript
get('http://localhost:8001/api/v1/users')
```

```javascript
const chatWsUrl = `http://localhost:8002/chat?id=42`

const socketConfig = {
  path: '/',
  autoConnect: false
}

const chatSocket = io(chatWsUrl, socketConfig)
```
chat wired to [this](https://github.com/crshmk/webpack-react) front end setup
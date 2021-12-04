const controllersRegiao = require('../controllers/regiaoControllers.js')

server.get('/regiao', controllersRegiao.regiaoGetAll)

server.get('/regiao/:id', controllersRegiao.regiaoById)

server.post('/regiao', controllersRegiao.regiaoNew)

server.put('/regiao/:id', controllersRegiao.regiaoEdit)
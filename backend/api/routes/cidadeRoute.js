const controllersCidade = require('../controllers/cidadeControllers.js')

server.get('/cidade', controllersCidade.cidadeGetAll)

server.get('/cidade/:id', controllersCidade.cidadeById)

server.post('/cidade', controllersCidade.cidadeNew)

server.put('/cidade/:id', controllersCidade.cidadeEdit)
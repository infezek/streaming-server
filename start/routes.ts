import Route from '@ioc:Adonis/Core/Route'
// import Redis from '@ioc:Adonis/Addons/Redis'
//import Ws from 'App/Services/Ws'


Route.get('/', async ({ response }) => {
    return response.send({ hello: 'webrtc' })
})
Route.get('/testew', async ({ view }) => {
    return view.render('home')
})

Route.get('/redis', async () => {
    // await Redis.set('foo', 'bar')
    return 'handled'
})
Route.get('/redis/get', async () => {
    // return Redis.get('foo')
})

Route.get('/socket', async () => {
    // const dados = await Redis.get('email@gmail.com')
    // console.log("UID", dados)
    // Ws.io.to(dados!).emit('chat', 'Hello World')
    //Ws.io.emit('email@gmail.com', { dasdasdas: "123das45d6asd" })
})

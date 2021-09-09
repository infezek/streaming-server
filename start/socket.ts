import Ws from 'App/Services/Ws'
// import Redis from '@ioc:Adonis/Addons/Redis'

Ws.boot()


Ws.io.on('connection', async (socket) => {
    console.log(socket.id)
    // const uid: any = socket.handshake.query.uid!


    // await Redis.set(uid, socket.id)


    Ws.io.to(socket.id).emit('me', socket.id)


    socket.on("callUser", (data) => {
        Ws.io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
    })
    socket.on("answerCall", (data) => {
        Ws.io.to(data.to).emit("callAccepted", data.signal)
    })

})

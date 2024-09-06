var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://athiathira828:athira@cluster0.dr7sn.mongodb.net/ccsit?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('connected successfully')
    })
    .catch((err) => {
        consoles.log(err)
})
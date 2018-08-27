module.exports={
    getInfo:(req, res) =>{
        res.send('here is your info!').status(200)
    },
    deleteInfo:(req,res)=>{
    let {id} = req.params
        res.send('info deleted').status(200)
    },
    postInfo:(req, res)=>{
        res.send('info posted').status(200)
    },
    putInfo:(req, res)=>{
        // let {} = req.body
        res.send('info putted').status(200)
    }
}
const validagerente = (req, res, next) =>{
    const usuario = req.headers['user'];
    if(usuario.cargo.toLowerCase() === "gerente"){
        next();
    }else{
        res.status(401).json({
            msg: "Usuario sem permissão"
        }).end();
    }
};
const validaeditor =( req, res, next)=>{
    const usuario = req.headers['user'];
    if(usuario.cargo.toLowerCase() === "editor" || usuario.cargo.toLowerCase() === "gerente"){
        next();
    }else{
        res.status(401).json({
            msg: "Usuario sem permissão"
        }).end();
    }
}

module.exports ={
    validagerente,
    validaeditor
};
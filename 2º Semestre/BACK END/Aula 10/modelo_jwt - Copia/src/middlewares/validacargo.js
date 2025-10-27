const validaadm = (req, res, next) =>{
    const usuario = req.headers['user'];
    if(usuario.cargo.toLowerCase() === "administrador"){
        next();
    }else{
        res.status(401).json({
            msg: "Usuario sem permissão"
        }).end();
    }
};

const validaatendente =( req, res, next)=>{
    const usuario = req.headers['user'];
    if(usuario.cargo.toLowerCase() === "atendente" || usuario.cargo.toLowerCase() === "administrador"){
        next();
    }else{
        res.status(401).json({
            msg: "Usuario sem permissão"
        }).end();
    }
}
module.exports ={
    validaadm,
    validaatendente
};
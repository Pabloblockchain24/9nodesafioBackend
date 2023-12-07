import EErrors from "../../services/errors/enums.js";

export default (error,req,res,next)=>{
    console.log(error.cause)
    switch(error.code){
        case EErrors.INVALID_TYPES_ERROR:
            res.send({status:"error", error:error.name})
            break
        case EErrors.ROUTING_ERROR:
            res.send({status:"error", error:"Error en el routing"})
            break
        case EErrors.DATABASE_ERROR:
            res.send({status:"error", error:"Error en la conexion a BBDD"})
            break
        case EErrors.INVALID_PARAM:
            res.send({status:"error", error:"Parametro ingresado no es valido"})
            break
        
        default:
            res.send({status:"error", error:"Unhandled error"})
    }
}
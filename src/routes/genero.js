const {Router} = require('express');
const router = Router();
const BD = require('../configuration/oracle');

router.get('/getGeneros',async(req,res) => {
    let sql = "select * from genero";
    try{
        let resultado = await BD.Open(sql,[],true);
        res.status(200).json({
            registros: resultado.rows
        })
    } catch(err) {
        res.status(500).json({
            err
        });
    }
});

router.post('/registrarGenero', async(req,res) => {
    let {id,nombre} = req.body;
    let sql = "insert into genero values(:id,:nombre)";
    try{
        await BD.Open(sql,[id, nombre],true);
        res.status(200).json({
            mensaje: 'información grabada con éxito en la base de datos'
        })
    }catch(err) {
        res.status(500).json({
            err
        });
    }
});

router.put('/actualizarGenero', async(req, res)=>{
    let{id,nombre}= req.body;
    let sql="update genero set nombre=:nombre where idgenero=:id";
    try{
        await BD.Open(sql,[nombre,id],true);
        res.status(200).json({
            mensaje:'información actualizada correctamente en la base de datos'
        })
        
    }catch(err){
        res.status(500).json({
            err
        });
    } 
});

// let tania = {
//      edad: 23,
//     estatura: '2m'
//  }


// let {edad, estatura} = tania;

// console.log(edad);
router.delete('/borrarGenero',async(req,res) => {
    let nombre = req.body.nombre;
    let sql = "delete from genero where nombre=:nombre";
    try{
        await BD.Open(sql,[nombre],true);
        res.status(200).json({
            mensaje: `El género con nombre ${nombre} ha sido borrado`
        });
    }catch(err){
        res.status(500).json({
            err
        });
    }
});


module.exports = router;
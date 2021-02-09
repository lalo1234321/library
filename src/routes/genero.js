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


module.exports = router;
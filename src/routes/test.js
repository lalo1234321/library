const {Router} = require('express');
const router = Router();
let persona = {
    nombre: 'lalo',
    edad: 40
}

router.get('/',(req,res) => {
    res.status(200).json({
        persona
    });
});


module.exports = router;
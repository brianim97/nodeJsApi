const {Router} = require('express');
const { check } = require('express-validator');
const { usersGet, usersPost, usersDelete } = require('../controllers/users');
const validarCampos = require('../middlewares/validar-campos');
const {existMail, exisUserForID} = require('../helpers/db-validators')

const router = Router();

router.get('/',usersGet);

router.post('/',[
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('mail','El email es invalido').isEmail(),
    check('mail').custom(existMail),
    check('password','La contraseña debe contener al menos 3 caracteres').isLength({min:3}),
    validarCampos
],
usersPost);

router.delete('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(exisUserForID),
    validarCampos
],
usersDelete);


module.exports = router;


const {Schema, model} = require('mongoose')

const UserSchema = Schema({
    name:{
        type: String,
        required:[true,'El nombre es obligatiorio'],

    },
    mail:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatoria'],
    },
})


//modifico el objeto user para que no devuelva los datos que no quiero que el usuario vea

UserSchema.methods.toJSON = function(){
    const {__v, password, mail, ...user} = this.toObject();
    //user.uid = _id;
    return user;
}

module.exports = model('User',UserSchema);
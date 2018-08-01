const assert = require("assert");

const loginWithFirebase = require("../src/js/login");//Llamo al archivo que quiero testear
const newResident = require("../src/js/community-register");
const limpiar = require("../src/js/community-register");
const logoutWithFirebase = require("../src/js/main");

describe("loginWithFirebase()", () =>{//Llamar a la función que quiero testear
    it ("Debe haber una función de logearse con firebase", ()=>{
        assert.ok(loginWithFirebase);
    })
});

describe("newResident()", () =>{//Llamar a la función que quiero testear
    it ("Debe haber una función de ingresar nuevo residente al cowork", ()=>{
        assert.ok(newResidente);
    })
});

describe("limpiar()", () =>{//Llamar a la función que quiero testear
    it ("Debe haber una función para limpiar los imputs luego que se envía información", ()=>{
        assert.ok(limpiar);
    })
});

describe("logoutWithFirebase()", () =>{//Llamar a la función que quiero testear
    it ("Debe haber una función para salirse del loggin de firebase", ()=>{
        assert.ok(logoutWithFirebase);
    })
});
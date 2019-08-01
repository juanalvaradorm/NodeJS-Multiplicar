const fs = require('fs');
var colors = require('colors');

let Listar = (Base, Limite = 10) => {

    console.log('====================='.red);
    console.log(`=====Tabla del ${Base}=====`.red);
    console.log('====================='.red);

    return new Promise((resolve, reject) => {
        if (!Number(Base)) {
            reject(`Base ${ Base } no es un numero`);
            return
        }

        let Data = '';
        for (let r = 1; r <= Limite; r++) {
            Data += `${ Base } * ${ r } = ${ Base * r }\n`
        }

        resolve(Data);

    });

}

let CrearArchivo = (Base, Limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(Base)) {
            reject(`Base ${ Base } no es un numero`);
            return;
        }


        let Data = '';
        for (let r = 1; r <= Limite; r++) {
            Data += `${ Base } * ${ r } = ${ Base * r}\n`;
        }

        let DataArchivo = new Uint8Array(Buffer.from(Data));

        fs.writeFile(`Archivos/Tabla-${ Base }-al-${ Limite }.txt`, DataArchivo, (err) => {
            if (err) reject(err);
            else
                resolve(`Tabla-${ Base }-al-${ Limite }.txt`);
        });


    });
}


module.exports = {
    CrearArchivo,
    Listar
}
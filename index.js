const totalvoice = require('totalvoice-node');


/**
 * ADICIONAR O TOKEN
 * 
 * OBS: SÓ ENVIA MENSAGEM PARA O NUMERO CADASTRADO NA CONTA DO TOKEN 
 */
const client = new totalvoice("2ce382408d5b1da08a6e26e3b688edfc");


/**
 * Enviad mensagem 
 */
client.sms.enviar("16982653538", "Mensagem TTS", "resposta_usuario: true" )
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });


/**
 * Verifica o status do envio
 */
    client.sms.buscar("53214599")
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });


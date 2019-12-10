const totalvoice = require('totalvoice-node');


/**
 * ADICIONAR O TOKEN
 * 
 * OBS: SÓ ENVIA MENSAGEM PARA O NUMERO CADASTRADO NA CONTA DO TOKEN 
 */
const client = new totalvoice("DIGITE SEU TOKEN AQUI!!!!"); // PRENECHER TOKEN


/**
 * ENVIAR MENSAGEM 
 */
client.sms.enviar("DIGITE O CELULAR AQUI ", "DIGITE A MENSAGEM AQUI", "resposta_usuario: true" ) // PREENCHER NUMERO E MENSAGEM 
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });


/**
 * VERIFICAR STATUS DO ENVIO DA MENSAGEM
 */
    client.sms.buscar("DIGITAR O ID DO ENVIO DA MENSAGEM AQUI") // PREENCHER ID DO ENVIO DA MENSAGEM 
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });


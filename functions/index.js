const functions = require('firebase-functions');
const cors = require('cors')({ origin: true});
const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://phmartinchatbot.firebaseio.com"
});

const { SessionsClient } = require('dialogflow');


exports.dialogflowGateway = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const { queryInput, sessionId } = request.body;


    const sessionClient = new SessionsClient({ credentials: serviceAccount});
    const session = sessionClient.sessionPath('phmartinchatbot', sessionId);


    const responses = await sessionClient.detectIntent({ session, queryInput});

    const result = responses[0].queryResult;

    response.send(result);
  });
});



const { WebhookClient } = require('dialogflow-fulfillment');
const { Payload } = require("dialogflow-fulfillment");

exports.dialogflowWebhook = functions.https.onRequest(async (request, response) => {
    const agent = new WebhookClient({ request, response });

    const result = request.body.queryResult;

    async function lastInvoice(agent) {

     const db = admin.firestore();
     const lastInvoice = await db.collection('facturas').orderBy('date', 'desc').limit(1).get();
     let docs = [];
     lastInvoice.docs.map(doc => docs.push(doc.data()));

     agent.add(
        new Payload(agent.UNSPECIFIED, {payload: docs}, {rawPayload: true, sendAsMessage: true})
     );
    }

    async function facturas(agent){
      const payload = {
        linkUrl: 'facturas'
      };

      agent.add(
        new Payload(agent.UNSPECIFIED, payload, {rawPayload: true, sendAsMessage: true})
      );
    }

    async function incidencias(agent){
      const payload = {
        linkUrl: 'incidencias'
      };

      agent.add(
        new Payload(agent.UNSPECIFIED, payload, {rawPayload: true, sendAsMessage: true})
      );
    }

    async function humanchat(agent){
      const payload = {
        linkUrl: 'humanchat'
      };

      agent.add(
        new Payload(agent.UNSPECIFIED, payload, {rawPayload: true, sendAsMessage: true})
      );
    }

    async function incidenciafactura(agent){

      const status = 'abierta';

      const { date, description } = result.parameters;

      const db = admin.firestore();
      const incidencias = db.collection('incidencias').doc();

      await incidencias.set({ date,
                              description,
                              status,
                              timestamp: admin.firestore.FieldValue.serverTimestamp(),
                              id: incidencias.id
                            });

      agent.add('Tu incidencia está abierta. Normalmente tardamos en gestionar las incidencias unas 48 horas, aunque si deseas ver el estado de tus incidencias solo tienes que pedírmelo. Gracias por contactar conmigo. ¿Puedo ayudarte en algo más?');
    }


    let intentMap = new Map();
    intentMap.set('lastInvoice', lastInvoice);
    intentMap.set('infofacturas', facturas);
    intentMap.set('infoincidencias', incidencias);
    intentMap.set('humanchat', humanchat);
    intentMap.set('incidenciafactura', incidenciafactura)
    agent.handleRequest(intentMap);
});

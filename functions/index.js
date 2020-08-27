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


    const sessionClient = new SessionsClient({ credentials: serviceAccount  });
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


    let intentMap = new Map();
    intentMap.set('lastInvoice', lastInvoice);
    intentMap.set('infofacturas', facturas);
    agent.handleRequest(intentMap);
});

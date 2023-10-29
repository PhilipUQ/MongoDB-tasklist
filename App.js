
const express = require('express');

const { MongoClient, ObjectId } = require('mongodb');

 


//enlace para conectar la aplicacion con mongoDB Atlas

const uri = "mongodb+srv://durriago82:86C1WEJr8TnlqMH6@cluster0.hciuucl.mongodb.net/?retryWrites=true&w=majority";



const client = new MongoClient(uri, {useNewUrlParser: true});

async function mongoDbConect() {

    try {

        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });

        console.log("conectado con mongo exitosa");
    
      } catch (e) {
    
        console.log("error conectando a mongo", e)
    
      };


}

mongoDbConect()







const app =express();

app.use(express.json());

const port = 3000




//servicios para la base de datos

app.get('/tareas' , async (req, res) => {

    

    try {

        await client.connect();

        const db = client.db("lista_de_tareas");

        const collection = db.collection("tareas_descanso");

        const documentos = await collection.find().toArray();

        client.close();

        res.send(documentos)
        
    } catch (error) {

        res.status(500).send({message: "hubo un error"})
        
    }


});

app.post('/tareas' , async (req, res) => {

    try {

        const body = req.body;

        await client.connect();

        const db = client.db("lista_de_tareas");

        const collection = db.collection("tareas_descanso");

        const nuevoDocuemnto = await collection.insertOne(body)

        if (nuevoDocuemnto) {

            res.status(200).send(nuevoDocuemnto)


        } else {

            res.status(500).send("error al intentar agregar la tarea");


        }
        
    } catch (error) {

        res.status(500).send("error al intentar agregar la tarea");

        
    }

    

   

    

});


app.put('/tareas/:id' , async (req, res) => {

    const id = req.params.id

    const body = req.body;


    try {

        await client.connect();

        const db = client.db("lista_de_tareas");

        const collection = db.collection("tareas_descanso");

        const documentoActualizado = await collection.updateOne({_id: new ObjectId(id)}, {$set: body}) 

        if (documentoActualizado) {

            res.status(201).send(documentoActualizado)


        } else {

            res.status(500).send("error al intentar actualizar la tarea");


        }


        
    } catch (error) {

        res.status(500).send("error al intentar actualizar la tarea");
        
    }



});


app.delete('/tareas/:id' , async (req, res) => {

    const id = req.params.id


    try {

        await client.connect();

        const db = client.db("lista_de_tareas");

        const collection = db.collection("tareas_descanso");

        const removerDocumento = await collection.deleteOne({_id: new ObjectId(id)})

        if (removerDocumento.deletedCount > 0) {

            res.status(200).send("tarea eliminada")

        } else {

            res.status(500).send("algo salio mal")
        }

        
    } catch (error) {

        res.status(500).send("algo salio mal")
        
    }


});


app.listen(port, () => {

    console.log("servidor corriendo");

  });
// const express =require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const {GoogleGenerativeAI} =  require("@google/generative-ai");

// const app = express();
// const port='3000';
// //const MODEL_NAME = "gemini-pro";
// //const API_KEY = "AIzaSyB_x81KxqQ_QjsmOCupFiR9UPi02O4m3-o";

// app.use(bodyParser.json());
// app.use(cors());

// app.post('/api/chat',async (req,res)=>{

    // try {

    //     const userInput=req.body.userInput;
    //     const genAI= new GoogleGenerativeAI(API_KEY);
    //     const model = genAI.getGenerativeModel({model:MODEL_NAME})

    //     const generationConfig = {
    //         temperature: 0.9,
    //         topK: 1,
    //         topP: 1,
    //         maxOutputTokens: 2048,
    //       };

    //       const chat = model.startChat({
    //         generationConfig,

    //         history: [ 
    //         ],
    //       });

    //       const result= await chat.sendMessage(userInput)

    //       if (result && result.response) {

    //         const responseText = result.response.text();

    //         if (responseText) {
    //             res.json({text:responseText})
    //         }else{

    //             res.status(500).json({error:'Respuesta Vacia del modelo'})

    //         }
            
    //       }else{
    //         res.status(500).json({error:'Respuesta inesperada del modelo'})

    //       }
        
        
    // }  catch (error) {
    //     console.error('Error:', error);
    //     res.status(500).json({ error: 'Error en el servidor', details: error.message });
    // }

//     const {
//         GoogleGenerativeAI,
//         HarmCategory,
//         HarmBlockThreshold,
//       } = require("@google/generative-ai");
      
//       const MODEL_NAME = "gemini-1.0-pro";
//       const API_KEY = "AIzaSyB_x81KxqQ_QjsmOCupFiR9UPi02O4m3-o";
      
//       async function runChat() {
//         const genAI = new GoogleGenerativeAI(API_KEY);
//         const model = genAI.getGenerativeModel({ model: MODEL_NAME });
      
//         const generationConfig = {
//           temperature: 0.9,
//           topK: 1,
//           topP: 1,
//           maxOutputTokens: 2048,
//         };
      
        
//         const chat = model.startChat({
//           generationConfig,
//           history: [
//             {
//                 role: "user",
//                 parts: `Nombre de la Empresa: Café VIP
          
//                 Misión: En Café VIP, nos dedicamos a ofrecer a nuestros clientes una experiencia excepcional de café artesanal. Nos esforzamos por proporcionar la más alta calidad en cada taza, desde la selección de granos hasta el proceso de preparación, con un enfoque en la excelencia, la sostenibilidad y la satisfacción del cliente.
                
//                 Visión: Nos visualizamos como líderes en la industria del café artesanal, reconocidos por nuestra dedicación a la calidad, la innovación y el servicio al cliente. Buscamos expandir nuestra presencia a nivel nacional e internacional, manteniendo siempre nuestros estándares de excelencia y compromiso con la comunidad y el medio ambiente.
                
//                 Fecha de Creación: Café VIP fue fundado en el año 2015 por un grupo de amantes del café con una pasión compartida por la calidad y la autenticidad en cada taza.
                
//                 Descripción General:
//                 Café VIP se distingue por su compromiso con el café de alta calidad y su enfoque en el arte de la preparación. Nuestros granos son cuidadosamente seleccionados de las regiones cafetaleras más prestigiosas del mundo, y nuestro equipo de expertos baristas se dedica a perfeccionar cada técnica para ofrecer una experiencia sensorial única a nuestros clientes.
                
//                 Nuestro compromiso con la sostenibilidad se refleja en nuestras prácticas comerciales, desde la relación directa con los productores de café hasta la utilización de métodos de cultivo y procesamiento responsables. Además, nos esforzamos por contribuir positivamente a las comunidades locales donde operamos, apoyando iniciativas sociales y ambientales que promuevan el bienestar y el desarrollo sostenible.
                
//                 Café VIP ofrece una amplia variedad de productos, que van desde café tostado y molido hasta bebidas especializadas y accesorios para café. Nuestras tiendas están diseñadas para brindar un ambiente acogedor y sofisticado, donde los clientes pueden disfrutar de su café favorito mientras se sumergen en una experiencia sensorial única.
                
//                 Nuestra pasión por el café se refleja en cada aspecto de nuestro negocio, desde la selección de ingredientes hasta la atención al cliente. En Café VIP, estamos comprometidos a superar las expectativas de nuestros clientes y a convertir cada visita en una experiencia memorable.`,
//               },
//               {
//                 role: "model",
//                 parts: "Genial empresa!",
//               },{
//                 role: "user",
//                 parts: `Nombre de la Empresa: mitiendapp
//                 horario de apertura: 7:00 A:m`
//               }, {
//                 role: "model",
//                 parts: "Horario de apertura a las 7:00 A:m!",
//               }

//            ],
//         });
        
//         const result= await chat.sendMessage("que es mitiendapp")
//         // const result = await chat.sendMessage("YOUR_USER_INPUT");
//         const response = result.response;
//         console.log(response.text());
//     }
//       runChat();
    

// })

// app.listen(port, ()=>{
//     console.log(`Servidor escuchando en http://localhost:${port}`);
// })




//----------------------------------------------------


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = '3000';

app.use(bodyParser.json());
app.use(cors());

app.post('/api/chat', async (req, res) => {
    try {
        const {
            GoogleGenerativeAI,
            HarmCategory,
            HarmBlockThreshold,
        } = require("@google/generative-ai");

        const MODEL_NAME = "gemini-1.0-pro";
        const API_KEY = "AIzaSyB_x81KxqQ_QjsmOCupFiR9UPi02O4m3-o";

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const generationConfig = {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
        };

        const chat = model.startChat({
            generationConfig,
            history: [
                {
                    role: "user",
                    parts: `Nombre de la Empresa: Café VIP
              
                  Misión: En Café VIP, nos dedicamos a ofrecer a nuestros clientes una experiencia excepcional de café artesanal. Nos esforzamos por proporcionar la más alta calidad en cada taza, desde la selección de granos hasta el proceso de preparación, con un enfoque en la excelencia, la sostenibilidad y la satisfacción del cliente.
                  
                  Visión: Nos visualizamos como líderes en la industria del café artesanal, reconocidos por nuestra dedicación a la calidad, la innovación y el servicio al cliente. Buscamos expandir nuestra presencia a nivel nacional e internacional, manteniendo siempre nuestros estándares de excelencia y compromiso con la comunidad y el medio ambiente.
                  
                  Fecha de Creación: Café VIP fue fundado en el año 2015 por un grupo de amantes del café con una pasión compartida por la calidad y la autenticidad en cada taza.
                  
                  Descripción General:
                  Café VIP se distingue por su compromiso con el café de alta calidad y su enfoque en el arte de la preparación. Nuestros granos son cuidadosamente seleccionados de las regiones cafetaleras más prestigiosas del mundo, y nuestro equipo de expertos baristas se dedica a perfeccionar cada técnica para ofrecer una experiencia sensorial única a nuestros clientes.
                  
                  Nuestro compromiso con la sostenibilidad se refleja en nuestras prácticas comerciales, desde la relación directa con los productores de café hasta la utilización de métodos de cultivo y procesamiento responsables. Además, nos esforzamos por contribuir positivamente a las comunidades locales donde operamos, apoyando iniciativas sociales y ambientales que promuevan el bienestar y el desarrollo sostenible.
                  
                  Café VIP ofrece una amplia variedad de productos, que van desde café tostado y molido hasta bebidas especializadas y accesorios para café. Nuestras tiendas están diseñadas para brindar un ambiente acogedor y sofisticado, donde los clientes pueden disfrutar de su café favorito mientras se sumergen en una experiencia sensorial única.
                  
                  Nuestra pasión por el café se refleja en cada aspecto de nuestro negocio, desde la selección de ingredientes hasta la atención al cliente. En Café VIP, estamos comprometidos a superar las expectativas de nuestros clientes y a convertir cada visita en una experiencia memorable.`,
                },
                {
                    role: "model",
                    parts: "Genial empresa!",
                }, {
                    role: "user",
                    parts: `Nombre de la Empresa: mitiendapp
                    horario de apertura: 7:00 A:m`
                }, {
                    role: "model",
                    parts: "Horario de apertura a las 7:00 A:m!",
                }
            ],
        });
        let userInput;
        const result = await chat.sendMessage(userInput);
        const response = result.response;
        console.log(response.text());

        // Enviar la respuesta al cliente y finalizar la ejecución
        res.json({ text: response.text() });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error en el servidor', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

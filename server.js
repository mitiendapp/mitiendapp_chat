// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const app = express();
// const port = '3700';

// app.use(bodyParser.json());
// app.use(cors());

// app.post('/api/chat', async (req, res) => {
//     try {
//         const {
//             GoogleGenerativeAI,
//             HarmCategory,
//             HarmBlockThreshold,
//         } = require("@google/generative-ai");

//         const MODEL_NAME = "gemini-1.0-pro";
//         const API_KEY = "AIzaSyB_x81KxqQ_QjsmOCupFiR9UPi02O4m3-o";

//         const genAI = new GoogleGenerativeAI(API_KEY);
//         const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//         const generationConfig = {
//             temperature: 0.9,
//             topK: 1,
//             topP: 1,
//             maxOutputTokens: 2048,
//         };

//         const chat = model.startChat({
//             generationConfig,
//             history: [
//                 {
//                     role: "user",
//                     parts: `que es mitiendapp 
                    
//                     es una empresa dedicada a la venta de productos y servicios a través de una plataforma en línea. Ofrece una amplia gama de categorías, que incluyen: 
//                     Electrónica: Teléfonos inteligentes, computadoras portátiles, televisores y más.Hogar y cocina: 
//                     Electrodomésticos, muebles, decoración y artículos para el hogar. Moda: Ropa, zapatos, accesorios y artículos de belleza.
//                     Salud y bienestar: Vitaminas, suplementos, productos para el cuidado personal y equipos de fitness.
//                     Juguetes y juegos: Juguetes para niños de todas las edades, juegos de mesa y videojuegos.
//                     Libros y papelería:** Libros, material escolar y suministros de oficina.
//                     Deportes y aire libre: Ropa deportiva, equipos y accesorios para una variedad de actividades al aire libre.
//                     mitiendapp se compromete a brindar una experiencia de compra conveniente y confiable, ofreciendo: 
//                     Una amplia selección de productos de alta calidad. 
//                     Precios competitivos y ofertas regulares.
//                     Entrega rápida y confiable. 
//                     Servicio al cliente receptivo y servicial.
//                     Ya sea que estés buscando los últimos dispositivos electrónicos, artículos esenciales para el hogar o regalos únicos, mitiendapp tiene algo para todos. Con su horario de atención a partir de las 7:00 a. m., puedes comenzar a comprar temprano y aprovechar las mejores ofertas."`,
//                 },
//                 {
//                     role: "model",
//                     parts: "Genial empresa!",
//                 }, {
//                     role: "user",
//                     parts: `Nombre de la Empresa: mitiendapp
//                     horario de apertura: 7:00 A:m`
//                 }, {
//                     role: "model",
//                     parts: "Horario de apertura a las 7:00 A:m!",
//                 }
//             ],
//         });
//         let {userInput}=req.body;
//         const result = await chat.sendMessage(userInput);
//         const response = result.response;
//         console.log(response.text());

//         // Enviar la respuesta al cliente y finalizar la ejecución
//         res.json({ text: response.text() });
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ error: 'Error en el servidor', details: error.message });
//     }
// });

// app.listen(port, () => {
//     console.log(`Servidor escuchando en http://localhost:${port}`);
// });

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const app = express();
// const port = '3700';

// app.use(bodyParser.json());
// app.use(cors());

// // Historial inicial
// const initialHistory = [
//     {
//         role: "user",
//         parts: `que es mitiendapp 
                    
//         es una empresa dedicada a la venta de productos y servicios a través de una plataforma en línea. Ofrece una amplia gama de categorías, que incluyen: 
//         Electrónica: Teléfonos inteligentes, computadoras portátiles, televisores y más.Hogar y cocina: 
//         Electrodomésticos, muebles, decoración y artículos para el hogar. Moda: Ropa, zapatos, accesorios y artículos de belleza.
//         Salud y bienestar: Vitaminas, suplementos, productos para el cuidado personal y equipos de fitness.
//         Juguetes y juegos: Juguetes para niños de todas las edades, juegos de mesa y videojuegos.
//         Libros y papelería:** Libros, material escolar y suministros de oficina.
//         Deportes y aire libre: Ropa deportiva, equipos y accesorios para una variedad de actividades al aire libre.
//         mitiendapp se compromete a brindar una experiencia de compra conveniente y confiable, ofreciendo: 
//         Una amplia selección de productos de alta calidad. 
//         Precios competitivos y ofertas regulares.
//         Entrega rápida y confiable. 
//         Servicio al cliente receptivo y servicial.
//         Ya sea que estés buscando los últimos dispositivos electrónicos, artículos esenciales para el hogar o regalos únicos, mitiendapp tiene algo para todos. Con su horario de atención a partir de las 7:00 a. m., puedes comenzar a comprar temprano y aprovechar las mejores ofertas.`,
//     },
//     {
//         role: "model",
//         parts: "Genial empresa!",
//     },
// ];

// // Obtener respuesta del modelo dentro del contexto
// const getModelResponse = async (context, userInput) => {
//     // Preguntas válidas dentro del contexto
//     const validQuestions = [
//         "que es mitiendapp",
//         "que puedo comprar en mitiendapp",
//         "a que hora abre mitiendapp",
//         "hola"
//     ];

//     // Verificar si la pregunta está dentro del contexto esperado
//     if (!validQuestions.includes(userInput.toLowerCase())) {
//         throw new Error('Pregunta fuera de contexto');
//     }

//     const MODEL_NAME = "gemini-1.0-pro";
//     const API_KEY = "AIzaSyB_x81KxqQ_QjsmOCupFiR9UPi02O4m3-o";

//     const genAI = new GoogleGenerativeAI(API_KEY);
//     const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//     const generationConfig = {
//         temperature: 0.9,
//         topK: 1,
//         topP: 1,
//         maxOutputTokens: 2048,
//     };

//     const chat = model.startChat({
//         generationConfig,
//         history: context,
//     });

//     const result = await chat.sendMessage(userInput);
//     return result.response.text();
// };

// app.post('/api/chat', async (req, res) => {
//     try {
//         let { userInput } = req.body;

//         // Obtener respuesta del modelo dentro del contexto inicial
//         const modelResponse = await getModelResponse(initialHistory, userInput);

//         // Enviar la respuesta al cliente y finalizar la ejecución
//         res.json({ text: modelResponse });
//     } catch (error) {
//         console.error('Error:', error);
//         if (error.toString().includes('Pregunta fuera de contexto')) {
//             res.status(500).json({ error: 'Error en el servidor', details: 'El modelo no está entrenado para responder a esta pregunta.' });
//         } else {
//             res.status(500).json({ error: 'Error en el servidor', details: error.message });
//         }
//     }
// });

// app.listen(port, () => {
//     console.log(`Servidor escuchando en http://localhost:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = '3000';

app.use(bodyParser.json());
app.use(cors());

// Historial inicial
const initialHistory = [
    {
        role: "user",
        parts: `que es mitiendapp 
                    
        es una empresa dedicada a la venta de productos y servicios a través de una plataforma en línea. Ofrece una amplia gama de categorías, que incluyen: 
        Electrónica: Teléfonos inteligentes, computadoras portátiles, televisores y más.Hogar y cocina: 
        Electrodomésticos, muebles, decoración y artículos para el hogar. Moda: Ropa, zapatos, accesorios y artículos de belleza.
        Salud y bienestar: Vitaminas, suplementos, productos para el cuidado personal y equipos de fitness.
        Juguetes y juegos: Juguetes para niños de todas las edades, juegos de mesa y videojuegos.
        Libros y papelería:** Libros, material escolar y suministros de oficina.
        Deportes y aire libre: Ropa deportiva, equipos y accesorios para una variedad de actividades al aire libre.
        mitiendapp se compromete a brindar una experiencia de compra conveniente y confiable, ofreciendo: 
        Una amplia selección de productos de alta calidad. 
        Precios competitivos y ofertas regulares.
        Entrega rápida y confiable. 
        Servicio al cliente receptivo y servicial.
        Ya sea que estés buscando los últimos dispositivos electrónicos, artículos esenciales para el hogar o regalos únicos, mitiendapp tiene algo para todos. Con su horario de atención a partir de las 7:00 a. m., puedes comenzar a comprar temprano y aprovechar las mejores ofertas.`,
    },
    {
        role: "model",
        parts: "Genial empresa!",
    },
];

// Obtener respuesta del modelo dentro del contexto
const getModelResponse = async (context, userInput) => {
    // Preguntas válidas dentro del contexto
    const validQuestions = [
        "que es mitiendapp",
        "que puedo comprar en mitiendapp",
        "a que hora abre mitiendapp",
        "hola",
        "como puedo crear un producto en mitiendapp",
        "como puedo comprar en mitiendapp",
        "gracias",
        "adios",
        "no adios",
        "si adios"
    ];

    // Verificar si la pregunta está dentro del contexto esperado
    if (!validQuestions.includes(userInput.toLowerCase())) {
        return 'El modelo no está entrenado para responder a esta pregunta.';
    }

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
        history: context,
    });

    const result = await chat.sendMessage(userInput);
    return result.response.text();
};

app.post('/api/chat', async (req, res) => {
    try {
        let { userInput } = req.body;

        // Obtener respuesta del modelo dentro del contexto inicial
        const modelResponse = (await getModelResponse(initialHistory, userInput)).replace(/\"|\\\"|\*|\*\*|\n\*|\n/g, '').trim();
     
        // Enviar la respuesta al cliente y finalizar la ejecución
        res.json({ text: modelResponse });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error en el servidor', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

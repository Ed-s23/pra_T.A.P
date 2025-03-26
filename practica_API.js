const express = require ("express");
const app = express();
const port = 3000;
//ruta de la prueva
app.get("/",(req,res)=>{
    res.json({mensaje : "Hola mundoo"})
});
//iniciar en el sercidor 
app.listen(port, () => {
    console.log('servidor API en -->  http://localhost${port}')
})

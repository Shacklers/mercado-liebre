const express = require('express');
const path = require('path');
const app = express();
 
/*Si se ejecuta desde express no se visualiza el css - probar manualmente, 
o en su defecto con el plugin Live Server de visual Code*/ 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.use(express.static('public'));

const port = process.eventNames.PORT|| 3001;
app.listen(port,()=>console.log('Servidor corriendo en el puerto ${port}'));


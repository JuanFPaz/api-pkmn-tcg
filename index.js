import express from "express";
import cors from "cors";
import readDir from 'node:fs/promises'

const PORT = 4200

const app = express()
app.uso(cors({origin: '*'}))

app.get('/',(req,res)=>{
    
})

app.listen(PORT,()=>{
    console.log('Servidor levantado en el puerto *:'+PORT);
})


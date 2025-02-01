const express=require('express')
const cors=require('cors')
const {PORT}=require('./config/constants')
const errorHandler=require('./middlewares/errorHandler')


const moneyRoutes=require('./routes/moneyRoutes')
const goldRoutes=require('./routes/goldRoutes')

const app=express()
app.use(cors())
app.use(express.json())

app.use('/money',moneyRoutes)
app.use('/gold',goldRoutes)


app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
    })
    





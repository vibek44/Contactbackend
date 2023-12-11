const config=require ('./utils/config')
const app=require('./app')

const PORT=config.PORT || 3001

app.listen(PORT, () => console.log(`server is running on ${PORT}`))

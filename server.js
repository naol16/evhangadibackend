const express=require("express")
const cors=require("cors")
const app=express()
const port= process.env.PORT|| 6214
const user=require("./routes/user")
const question=require("./routes/question")
const authmiddle=require("./middleware/authmiddleware")
const answer= require("./routes/answer")
const database=require("./db_config/db")
app.use(express.json())
app.use(cors())
app.use('/', express.static('dist'))

app.use('/api/user',user)
app.use('/api/question',authmiddle,question)
app.use('/api/answer',authmiddle,answer)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
async function start() {
    try {
      const result = await database.execute("select 'test'");
      console.log("Database is connected");
      await app.listen(port);
      console.log(`Listing port ${port}`);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
  start();
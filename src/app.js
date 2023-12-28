import express from 'express';
import '../src/database/db.js';
import cors from "cors"
import { UserModel } from './model/model.js';

const app = express();
app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    console.log("hello world");
    res.send("hi this is sudhna");
});

app.post('/data', async (req, res) => {
    try {
      const formData = req.body;
      console.log(formData);
  
      // Create a new user document using the UserModel
      const newUser = new UserModel(formData);
  
      // Save the document to the database
      await newUser.save();
  
      res.json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error saving to MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen(process.env.PORT || 5000 , ()=>{
    console.log(`Server is running at port ${process.env.PORT ||5000}`);
})
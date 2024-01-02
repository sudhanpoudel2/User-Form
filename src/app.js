import express from 'express';
import '../src/database/db.js';
import cors from "cors"
import { UserModel } from './model/model.js';

const app = express();
app.use(cors())
app.use(express.json());

app.get('/getUserData',async (req,res)=>{
    //req = send file from front to back
    //res = send file from back to front
    console.log("hello");
    try {
      // Find all users
      const users = await UserModel.find();

      console.log(users);
  
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
    
});

app.put('/updateUser',(req,res)=>{
  const formData = req.body;
  console.log(formData);
})

app.post('/data', async (req, res) => {
    try {
      const formData = req.body;
      console.log(formData);
  
      // Create a new user document using the UserModel
      const newUser = new UserModel(formData);
  
      // Save the document to the database
      await newUser.save();
  
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error saving to MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen(process.env.PORT || 5000 , ()=>{
    console.log(`Server is running at port ${process.env.PORT ||5000}`);
})
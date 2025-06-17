import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Category from "./model/category.model.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/category", async (req, res) => {
    const category = req.body;
    const newCategory = new Category(category);
    await newCategory.save();
    res.send(newCategory);
});

mongoose
  .connect("mongodb+srv://jorinluitel:jorinL77@cluster0.fuiyl5x.mongodb.net/Mern-Express?retryWrites=true&w=majority&appName=Cluster0/")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
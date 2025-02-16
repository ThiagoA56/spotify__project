// JavaScript assincrono
// await assync
// fullfield
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://thiagoa56:7Fo5tuLYDOvUohEn@spotcluster.dp0gd.mongodb.net/?retryWrites=true&w=majority&appName=spotCluster";

const client = new MongoClient(URI);

export const db = client.db("spotDb");
// console.log(db);

// const songCollection = await db.collection("songs").find({}).toArray();
// console.log(songCollection);

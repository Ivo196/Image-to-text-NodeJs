import {HfInference} from "@huggingface/inference";
import { config } from "dotenv";
 config()
const hf = new HfInference(process.env.HF_ACCESS_TOKEN)

const imageURL = "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg" 
const response = await fetch(imageURL)
const model = "Salesforce/blip-image-captioning-base"
const blob =  await response.blob()
const result = await hf.imageToText({
       data: blob,
       model: model,
 })

 console.log(result)
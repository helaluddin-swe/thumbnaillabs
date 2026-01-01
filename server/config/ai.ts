import { GoogleGenAI } from "@google/genai";
const genai=new GoogleGenAI({
    apiKey:process.env.GOOGLE_API_KEY  as string
})
export default genai
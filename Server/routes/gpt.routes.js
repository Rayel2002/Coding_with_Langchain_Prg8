import { askGPT } from "../controller/promptcall.js";
import { Router } from "express";

const chatLLMRouter = Router();

//chatLLM route
chatLLMRouter.post('/chat', async (req, res) => {
  if (!req.body.message) {
      res.status(400).send('Message is required')
  } else {
      console.log(req.body.message)
      res.send(await askGPT(req.body.message)).status(200)
  }
})

export default chatLLMRouter;

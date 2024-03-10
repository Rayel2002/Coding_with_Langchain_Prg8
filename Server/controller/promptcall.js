import { chatModel } from "../utils/api-connection.js";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

export const askGPT = async (req) => {
  let prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      "you are a tech lead at an succesfull company who loves to teach and explain to people",
    ],
  ]);

  const outputParser = new StringOutputParser();
  const chain = prompt.pipe(chatModel).pipe(outputParser);
  const message = await chain.invoke({input: req});

  console.log(message.content);
  return message.content
};

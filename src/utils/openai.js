import OpenAI from 'openai';
import { OPENAI_GPT_KEY } from './constants';

const client = new OpenAI({
organization:"org-iGkZryLLb3pfNFfa6xpg9Idh",
  apiKey:OPENAI_GPT_KEY,dangerouslyAllowBrowser: true, // This is the default and can be omitted
});


export default client;  
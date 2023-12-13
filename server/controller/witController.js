// witController.js
import pkg from 'node-wit';
const { Wit, log } = pkg;

const witClient = new Wit({
  accessToken: process.env.WIT_AI_ACCESS_TOKEN,
  logger: new log.Logger(log.DEBUG),
});

const processMessage = async (message) => {
  try {
    const witResponse = await witClient.message(message);
    console.log('Wit.ai Response:', witResponse);
    // Handle and process the Wit.ai response here
    return witResponse;
  } catch (error) {
    console.error('Error processing message with Wit.ai:', error);
    throw error;
  }
};

export { processMessage };

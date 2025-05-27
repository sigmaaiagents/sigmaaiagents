import React, { useRef, useState } from 'react'
import './ChatBot.css'
import axios from 'axios';

const ChatBot = () => {
  const [jsonFile, setJsonFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const conversationRef = useRef(null);

  const handleFileUpload = (e) => {
    setJsonFile(e.target.files[0]);
  };

  const scrollToBottom = () => {
    if (conversationRef.current) {
      conversationRef.current.scrollTo({
        top: conversationRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const sendMsgToOpenAI = async (faqPrompt) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', // Or 'gpt-3.5-turbo' if you don't have GPT-4 access
        messages: [
          {
            role: 'system',
            content: "You are an intelligent assistant that answers user questions based only on the provided FAQs.",
          },
          {
            role: 'user',
            content: faqPrompt
          }
        ],
        temperature: 0.5,
        max_tokens: 300,
      },
      {
        headers: {
          Authorization: `Bearer API_KEY`,
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI API Error:', error.response?.data || error.message);
    return 'There was a problem generating the response.';
  }
};

  const handleSendQuestion = async () => {
  if (!jsonFile || !question) {
    alert('Please upload a JSON file and enter a question.');
    return;
  }

  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const jsonData = JSON.parse(e.target.result);

      // Prepare the FAQ data as a prompt for GPT-3/4
      const faqPrompt = jsonData.map(faq => `${faq.question}\nAnswer: ${faq.answer}`).join('\n\n');
      const fullPrompt = `Here are some frequently asked questions and their answers:\n\n${faqPrompt}\n\nUser's Question: ${question}\nAnswer:`;

      // Send the question and formatted FAQ data to OpenAI
      const res = await sendMsgToOpenAI(fullPrompt);

      // Display the user question and bot response
      const humanDiv = document.createElement('div');
      humanDiv.className = 'message-human';
      humanDiv.textContent = question;
      document.getElementById('conversation').appendChild(humanDiv);
      scrollToBottom();

      const botDiv = document.createElement('div');
      botDiv.className = 'message-bot';
      botDiv.textContent = res;
      document.getElementById('conversation').appendChild(botDiv);
      scrollToBottom();

      setResponse(res);
    } catch (err) {
      console.error('Error parsing JSON or sending question:', err);
      setResponse('Error reading JSON or fetching response.');
    }
  };
  reader.readAsText(jsonFile);
};


  return (
    <div className="chatbot-main-container">
      <div className="upload-section">
        <h1>Upload FAQ JSON</h1>
        <input type="file" accept=".json" onChange={handleFileUpload} />
      </div>

      <div className="message-main-container">
        <div className="messages-container" id='conversation' ref={conversationRef}>
          <div className="message-bot">👋 Hi there! I'm your assistant. You can upload a JSON file and ask me anything based on its content. I'm here to help — just type your question to get started!</div>
        </div>
        <div className="input-container">
          <input type="text" placeholder='Enter your Question...?' value={question} onChange={(e) => setQuestion(e.target.value)} />
          <button className='send' onClick={handleSendQuestion}><i class="bi bi-send"></i></button>
        </div>
      </div>
    </div>
  )
}

export default ChatBot
import  { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "👋 Hi! I'm Muhammad Hunain's AI Assistant. How can I help you today?",
    },

  ]);

  const [input, setInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false); // New state to control chat window visibility

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: input,
    };

    // Add bot reply (static)
    const botReply = {
      id: messages.length + 2,
      sender: "bot",
      text:"Hello! Great to meet you! I'm here to help you learn more about Muhammad Muhammad and his work. What would you like to know about his portfolio, skills, or services?"
    };

    setMessages([...messages, newMessage, botReply]);
    setInput("");
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Floating Button to Open/Close Chat */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        {isChatOpen ? "Close AI Assistant" : "Open AI Assistant"}
      </button>

      {/* Chat Window - conditionally rendered */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-5 w-80 shadow-xl rounded-xl overflow-hidden border border-gray-300 bg-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-lime-600 to-lime-800 text-white p-3 font-bold">
            🤖 AI Assistant
            <span onClick={toggleChat} className="float-right cursor-pointer text-lg">
              X
            </span>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-3 space-y-3 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "bot"
                    ? "bg-lime-100 text-gray-800 self-start"
                    : "bg-lime-600 text-white ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t p-2 bg-white">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded-md px-2 py-1 text-sm outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-lime-600 hover:bg-lime-700 text-white px-3 py-1 rounded-md text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

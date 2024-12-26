import React, { useState } from "react";

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Chatbot Icon */}
      <div
        onClick={toggleChatbot}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        <img
          src="https://your-chatbot-icon-url.com" // Replace with your chatbot icon URL
          alt="Chatbot"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "350px",
            height: "500px",
            backgroundColor: "#fff",
            // border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 9999,
            padding: "10px",
          }}
        >
          <iframe
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/24/05/20241224055239-62NNHQSH.json"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              backgroundColor: "transparent",
            }}
            title="Chatbot"
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotIcon;

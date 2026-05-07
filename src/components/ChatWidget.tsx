import React, { useState, useRef, useEffect } from 'react';
import { CHAT_RESPONSES } from '../data';
import type { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'bot', text: 'Halo! 👋 Saya NexaBot, asisten AI NexaMind Solutions. Ada yang bisa saya bantu?' },
  ]);
  const [input, setInput] = useState('');
  const [chatIdx, setChatIdx] = useState(0);
  const msgsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (msgsRef.current) {
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    }
  }, [messages]);

  const sendChat = () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const botMsg: ChatMessage = {
        role: 'bot',
        text: CHAT_RESPONSES[chatIdx % CHAT_RESPONSES.length],
      };
      setChatIdx((i) => i + 1);
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-box open" id="chat-box">
          <div className="chat-head">
            <div className="chat-head-icon">🤖</div>
            <div className="chat-head-text">
              <h4>NexaBot AI</h4>
              <p>Asisten Digital NexaMind</p>
            </div>
            <div className="chat-online" />
          </div>
          <div className="chat-msgs" id="chat-msgs" ref={msgsRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.role}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chat-input-row">
            <input
              className="chat-input"
              placeholder="Ketik pesan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendChat()}
            />
            <button className="chat-send" onClick={sendChat}>➤</button>
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setOpen((v) => !v)} title="AI Assistant">
        🤖
      </button>
    </div>
  );
};

export default ChatWidget;

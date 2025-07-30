import React, { useState, useRef, useEffect } from 'react';

import { Card, Form, Button, InputGroup } from 'react-bootstrap';

import { BsFillSendFill, BsEmojiSmile, BsPaperclip, BsFillMicFill } from 'react-icons/bs';

import Picker from 'emoji-picker-react';

const Forum = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSend = () => {
    if (text.trim()) {
      const newMessage = {
        text,
        sender: 'Mkulima Juma',
        time: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setText('');
    }
  };

  const handleEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="d-flex flex-column" style={{ height: '100vh', overflow: 'hidden' }}>
      <Card className="flex-grow-1 rounded-0 d-flex flex-column" style={{ backgroundColor: '#e5ddd5' }}>
        
        {/* 🟢 Chat Scrollable Area */}
        <div className="flex-grow-1 overflow-auto px-3 py-2">
          {messages.map((msg, idx) => (
            <div key={idx} className="mb-2 d-flex justify-content-end">
              <div className="bg-white rounded px-3 py-2 shadow-sm" style={{ maxWidth: '75%' }}>
                <strong>{msg.sender}</strong>
                <div>{msg.text}</div>
                <small className="text-muted">{msg.time}</small>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* 🟡 Emoji Picker */}
        {showEmojiPicker && (
          <div className="position-absolute bottom-100 mb-2 start-0">
            <Picker onEmojiClick={handleEmojiClick} />
          </div>
        )}

        {/* 🔵 Input Bar Fully Down */}
        <Card.Footer className="bg-light border-0">
          <InputGroup>
            <Button variant="outline-secondary" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
              <BsEmojiSmile />
            </Button>
            <Button variant="outline-secondary">
              <BsPaperclip />
            </Button>
            <Form.Control
              placeholder="Andika ujumbe..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ borderRadius: '30px' }}
            />
            <Button variant="outline-secondary">
              <BsFillMicFill />
            </Button>
            <Button variant="success" onClick={handleSend}>
              <BsFillSendFill />
            </Button>
          </InputGroup>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Forum;

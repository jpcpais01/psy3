'use client';

import { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  id: string;
}

export function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages.length]);

  const handleSend = async () => {
    if (message.trim()) {
      const userMessage = { 
        role: 'user' as const, 
        content: message.trim(),
        id: Date.now().toString() 
      };
      setMessages(prev => [...prev, userMessage]);
      setMessage('');
      setIsLoading(true);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessage.content }),
        });

        // Log the full response for debugging
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));

        if (!response.ok) {
          // Try to get error details from the response
          const errorText = await response.text();
          console.error('Error response:', errorText);
          
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const data = await response.json();
        const assistantMessage = {
          role: 'assistant' as const,
          content: data.response,
          id: (Date.now() + 1).toString()
        };
        setMessages(prev => [...prev, assistantMessage]);
      } catch (error) {
        console.error('Full error:', error);
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`,
            id: (Date.now() + 1).toString()
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleReset = () => {
    setMessages([]);
    setMessage('');
  };

  return (
    <div className="h-full w-full p-4 sm:p-6 bg-[var(--app-bg)] overflow-hidden">
      <div className="page-container overflow-hidden">
        <div className="content-container overflow-hidden">
          <h1 className="title mb-4">Chat</h1>
          <div className="card flex-1 flex flex-col p-4 relative overflow-hidden max-h-[calc(100vh-130px)]">
            <div className="flex-1 overflow-y-auto overflow-x-hidden chat-messages-container">
              <div className="chat-messages-inner-container w-full">
                {messages.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center h-full w-full">
                    <div className="text-[var(--text-secondary)] text-center max-w-md px-6">
                      <h2 className="text-2xl font-light text-[var(--text-primary)] mb-4 tracking-tight">
                        Welcome to Mindful AI
                      </h2>
                      <p className="text-base opacity-80 leading-relaxed">
                        A compassionate space to explore your thoughts, feelings, and personal growth. 
                        Begin by asking anything that&apos;s on your mind.
                      </p>
                      <div className="mt-6 border-t border-[var(--border-subtle)] pt-4">
                        <p className="text-sm italic opacity-60">
                          Your journey of self-discovery starts here.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 px-2 w-full">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`message-wrapper w-full ${msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
                      >
                        <div
                          className={`message ${
                            msg.role === 'user'
                              ? 'user-message'
                              : 'assistant-message'
                          }`}
                        >
                          {msg.content}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="message-wrapper flex justify-start">
                        <div className="assistant-message">
                          <div className="typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>
            </div>
            <div className="chat-input-container mt-4 relative w-full flex items-center gap-3">
              <button
                className="reset-button group p-3 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] hover:border-[var(--border-color)]"
                onClick={handleReset}
                aria-label="Reset chat"
              >
                <ArrowPathIcon className="w-5 h-5 transition-all duration-200 group-hover:rotate-180" />
              </button>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="chat-input pr-12 w-full"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                />
                <button
                  className={`send-button group absolute right-2 top-1/2 -translate-y-1/2 ${
                    !message.trim() || isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
                  }`}
                  onClick={handleSend}
                  disabled={!message.trim() || isLoading}
                  aria-label="Send message"
                >
                  <PaperAirplaneIcon className="w-5 h-5 transition-all duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

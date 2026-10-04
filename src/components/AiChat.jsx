import { useState, useRef, useEffect } from 'react';

import flowersImg from '../assets/flower.svg';
import dessertImg from '../assets/dessert.svg';


export default function AiChat() {
    // 1. State for the chat history
    const [messages, setMessages] = useState([
        { id: 1, sender: 'bot', text: 'What do you want to talk about today?' }
    ]);

    const [isTyping, setIsTyping] = useState(false);

    // 1. Create a reference to the bottom of the chat
    const messagesEndRef = useRef(null);

    // 2. Make it scroll smoothly to the reference
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // 3. Run the scroll function every time 'messages' or 'isTyping' changes
    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Helper function to turn **text** into bold HTML
    const formatText = (text) => {
        // Splits the text by **, then wraps every odd piece in a <strong> tag
        return text.split('**').map((part, index) =>
            index % 2 === 1 ? <strong key={index} className="font-bold text-sb-dark">{part}</strong> : part
        );
    };

    // 2. State for whatever the user is currently typing
    const [inputValue, setInputValue] = useState('');


    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // 1. Add the user's message to the UI instantly
        const newUserMessage = { id: Date.now(), sender: 'user', text: inputValue };
        setMessages((prevMessages) => [...prevMessages, newUserMessage]);
        setInputValue('');

        // 1. Turn on the typing indicator
        setIsTyping(true);

        // 2. Send the message to your Python backend
        fetch('http://127.0.0.1:5000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: inputValue })
        })
            .then(res => res.json())
            .then(data => {
                // 3. Add Gemini's reply to the chat!
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { id: Date.now(), sender: 'bot', text: data.reply }
                ]);

                // 2. Turn off the typing indicator when the reply arrives
                setIsTyping(false);
            })
            .catch(error => 
                console.error("Error chatting with AI:", error));
                  // 3. Turn it off if there is an error, too
                  setIsTyping(false);
    };











    // 5. Function for clicking the quick suggestion chips
    const handleSuggestionClick = (text) => {
        setInputValue(text); // Puts the chip's text into the input
    };

    return (
        <div className="flex-1 bg-sb-surface/80 rounded-[32px] p-6 border border-white shadow-sm flex flex-col min-h-[400px]">

            {/* Decorative SVG Stickers */}
            <img src={flowersImg} alt="Flowers" className="absolute -top-5 -left-4 w-14 h-14 drop-shadow-sm rotate-12 z-10" />


            {/* ... the rest of your chat messages code ... */}
            <h3 className="font-bold text-sb-dark flex items-center gap-2 mb-1">
                <span className="text-xl">🐰</span> Talk to StudyBuddy AI
            </h3>
            <p className="text-xs font-bold text-sb-text-sec mb-4">Need motivation? I'm here! ♡</p>

            {/* Chat History Area */}
            <div className="flex-1 bg-sb-bg/50 rounded-2xl p-4 mb-4 flex flex-col gap-3 overflow-y-auto border border-sb-primary/10">

                {/* Render all messages dynamically */}
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`text-sm font-bold p-3 w-[85%] shadow-sm ${msg.sender === 'bot'
                            ? 'bg-white text-sb-text-main rounded-2xl rounded-tl-sm border border-sb-bg self-start'
                            : 'bg-sb-primary text-white rounded-2xl rounded-tr-sm self-end'
                            }`}
                    >
                        {formatText(msg.text)}
                    </div>
                ))}


                {/* The Typing Indicator Bubble */}
                {isTyping && (
                    <div className="flex justify-start mb-4">
                        <div className="bg-white border border-sb-primary/20 p-4 rounded-2xl rounded-tl-sm shadow-sm flex gap-1.5 items-center">
                            <span className="w-2 h-2 bg-sb-primary/40 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-sb-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-2 h-2 bg-sb-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                    </div>
                )}

                

                {/* Hide suggestion chips after the user sends the first message */}
                {messages.length === 1 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {['Give me motivation', 'Summarize my day', 'Suggest what to study'].map((chipText) => (
                            <button
                                key={chipText}
                                onClick={() => handleSuggestionClick(chipText)}
                                className="text-[11px] font-bold border border-sb-primary/30 text-sb-primary px-3 py-1.5 rounded-full hover:bg-sb-primary hover:text-white transition-colors bg-white text-left"
                            >
                                {chipText}
                            </button>
                        ))}
                    </div>
                )}
                <div ref={messagesEndRef} />
                     
            </div>

            


            {/* Input Area (Converted to a Form) */}
            <form onSubmit={handleSendMessage} className="relative mt-auto shrink-0">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full bg-white border border-sb-primary/20 rounded-full py-3 pl-7 pr-12 text-sm font-bold text-sb-text-main focus:outline-none focus:border-sb-primary focus:ring-2 focus:ring-sb-primary/20 transition-all placeholder:text-sb-text-sec/50 shadow-sm"
                />
                <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 bg-sb-primary text-white px-3.5 rounded-full hover:bg-sb-dark transition-colors flex items-center justify-center shadow-sm"
                >
                    <span className="text-sm">➤</span>
                </button>
                <img src={flowersImg} alt="Flowers" className="absolute -top-5 -left-4 w-14 h-14 drop-shadow-sm rotate-12 z-10" />

                

            </form>

            

        </div>
    );
}
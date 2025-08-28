"use client";

import { useState } from "react";

export default function ChatWindow() {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Agregar mensaje del usuario
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);

    // Respuesta mock del bot
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Hola! Soy el bot.", sender: "bot" }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg flex flex-col h-[80vh]">
      {/* Mensajes */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-2 p-2 rounded-lg max-w-[75%] ${
              m.sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-200 text-black"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-2 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border rounded-lg px-3 py-2"
          placeholder="Escribe un mensaje..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

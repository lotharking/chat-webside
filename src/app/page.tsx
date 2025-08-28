"use client";

import ChatWindow from "@/components/ChatWindow";
import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      {!started ? (
        <button
          onClick={() => setStarted(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Start Chat
        </button>
      ) : (
        <ChatWindow />
      )}
    </main>
  );
}

"use client";

import { FormEvent, useMemo, useState } from "react";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

const WEBHOOK_URL = "https://thaligonra.app.n8n.cloud/webhook/thali-ia";
const ERROR_MESSAGE =
  "Não consegui responder agora. Tente novamente em alguns instantes.";

function extractReply(data: unknown): string {
  if (typeof data === "string") {
    return data;
  }

  if (Array.isArray(data)) {
    const firstText = data.map(extractReply).find(Boolean);
    return firstText ?? "";
  }

  if (data && typeof data === "object") {
    const record = data as Record<string, unknown>;
    const candidate =
      record.response ??
      record.answer ??
      record.reply ??
      record.message ??
      record.text ??
      record.output;

    if (typeof candidate === "string") {
      return candidate;
    }

    if (candidate) {
      return extractReply(candidate);
    }
  }

  return "";
}

export function ThaliAIChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      text: "Oi! Eu sou a thali.IA. Pergunte sobre a trajetória, habilidades ou projetos da Thalita.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const canSend = useMemo(() => message.trim().length > 0 && !isLoading, [message, isLoading]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedMessage = message.trim();
    if (!trimmedMessage || isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      text: trimmedMessage,
    };

    setMessages((current) => [...current, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Webhook request failed");
      }

      const contentType = response.headers.get("content-type") ?? "";
      const payload = contentType.includes("application/json")
        ? await response.json()
        : await response.text();
      const reply = extractReply(payload).trim() || ERROR_MESSAGE;

      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: reply,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: ERROR_MESSAGE,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="chat-card" aria-label="Mini chat thali.IA">
      <div className="chat-window" aria-live="polite">
        {messages.map((item) => (
          <div className={`chat-message chat-message-${item.role}`} key={item.id}>
            <span>{item.role === "user" ? "Você" : "thali.IA"}</span>
            <p>{item.text}</p>
          </div>
        ))}
        {isLoading ? (
          <div className="chat-message chat-message-assistant">
            <span>thali.IA</span>
            <p>thali.IA está digitando...</p>
          </div>
        ) : null}
      </div>

      <form className="chat-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="thali-ai-message">
          Pergunte algo sobre a Thalita
        </label>
        <input
          id="thali-ai-message"
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Pergunte algo sobre a Thalita..."
          disabled={isLoading}
        />
        <button type="submit" disabled={!canSend}>
          Enviar
        </button>
      </form>
    </div>
  );
}

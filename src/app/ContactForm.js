// components/sections/ContactForm.js
"use client";
import { useState } from "react";

export default function ContactForm({ heading, description }) {
  const [status, setStatus] = useState("idle");

  return (
    <section className="py-10">
      <div className="mx-auto max-w-xl px-4">
        <h2 className="text-2xl font-semibold">{heading}</h2>
        {description && (
          <div
            className="mt-2 opacity-80"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("sent");
          }}
        >
          <input className="w-full rounded border p-3" placeholder="Your name" />
          <input className="w-full rounded border p-3" placeholder="Your email" />
          <textarea className="w-full rounded border p-3" rows={5} placeholder="Message" />
          <button className="rounded bg-black px-4 py-2 text-white">Send</button>
          {status === "sent" && <p className="text-green-600">Thanks! We’ll get back to you.</p>}
        </form>
      </div>
    </section>
  );
}

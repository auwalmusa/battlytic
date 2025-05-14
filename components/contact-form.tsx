"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("meogvgze");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (state.succeeded) {
    return (
      <div className="w-full max-w-xl mx-auto text-center mt-8">
        <h3 className="text-2xl font-bold mb-2 text-[#00e5ff]">Thank You!</h3>
        <p className="text-gray-200">We've received your message and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto flex flex-col gap-6 mt-8">
      <Input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
        className="bg-[#222] border-none text-gray-100 placeholder:text-gray-400 rounded-2xl h-14 px-6 text-lg focus:ring-2 focus:ring-[#00e5ff]"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <Input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        required
        className="bg-[#222] border-none text-gray-100 placeholder:text-gray-400 rounded-2xl h-14 px-6 text-lg focus:ring-2 focus:ring-[#00e5ff]"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <Textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
        required
        className="bg-[#222] border-none text-gray-100 placeholder:text-gray-400 rounded-2xl px-6 py-4 text-lg min-h-[120px] focus:ring-2 focus:ring-[#00e5ff]"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button
        type="submit"
        disabled={state.submitting}
        className="bg-[#00e5ff] hover:bg-[#00bcd4] text-black font-semibold rounded-full h-14 text-lg mt-2 transition-colors"
        style={{ boxShadow: "0 2px 16px 0 #00e5ff33" }}
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
} 
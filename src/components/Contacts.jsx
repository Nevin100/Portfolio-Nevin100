/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {  
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaUser,
  FaEnvelopeOpenText,
  FaGithubAlt,
  FaLink,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const EMAILJS_SERVICE_ID = "service_nosk5as";   
const EMAILJS_TEMPLATE_ID = "template_aeuohlj"; 
const EMAILJS_PUBLIC_KEY = "Cbd9cT9wFkGdasJv1";   

const SOCIALS = [
  {
    href: "https://linkedin.com/in/nevinbali1012",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    color: "hover:text-blue-400",
  },
  {
    href: "https://github.com/Nevin100",
    label: "GitHub",
    icon: <FaGithub />,
    color: "hover:text-zinc-300",
  },
  {
    href: "mailto:nevinbali10@gmail.com",
    label: "Email",
    icon: <FaEnvelope />,
    color: "hover:text-red-400",
  },
];

const INITIAL_FORM = {
  name: "",
  email: "",
  message: "",
  github: "",
  meeting: "",
};

const INITIAL_ERRORS = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty.";
      valid = false;
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message is too short (min 10 chars).";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      github_id: form.github || "Not provided",
      meeting_link: form.meeting || "Not provided",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="relative w-full py-24 px-4 md:px-8 lg:px-2 bg-transparent min-h-[800px]">
      {/* Subtle ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute bottom-16 right-8 w-96 h-96 rounded-full bg-pink-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* ── Header ── */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-3">
            Get in touch
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-none tracking-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            {/* Social icons */}
            <div className="flex gap-5 text-2xl text-zinc-400">
              {SOCIALS.map(({ href, label, icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`${color} transition-all duration-200 hover:scale-110 hover:-translate-y-0.5`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6 h-px bg-gradient-to-r from-purple-500/50 via-pink-500/30 to-transparent" />
        </div>

        {/* ── Card ── */}
        <div
          ref={cardRef}
          className="relative rounded-2xl border border-zinc-800/60 overflow-hidden"
          style={{
            background: `radial-gradient(ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(192,132,252,0.07) 0%, rgba(236,72,153,0.04) 40%, rgba(24,24,27,0.95) 70%)`,
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

          <div className="p-8 md:p-10">
            {/* ── Status Banners ── */}
            {status === "success" && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-400 text-sm font-medium">
                <FaCheckCircle className="shrink-0 text-lg" />
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400 text-sm font-medium">
                <FaTimesCircle className="shrink-0 text-lg" />
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            {/* ── Form ── */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <Field
                  id="name"
                  label="Your Name"
                  type="text"
                  icon={<FaUser />}
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />

                {/* Email */}
                <Field
                  id="email"
                  label="Your Email"
                  type="email"
                  icon={<FaEnvelopeOpenText />}
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />

                {/* Message */}
                <div className="md:col-span-2">
                  <Field
                    id="message"
                    label="Your Message"
                    type="textarea"
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                    required
                    rows={5}
                  />
                </div>

                {/* GitHub */}
                <Field
                  id="github"
                  label="GitHub ID (optional)"
                  type="text"
                  icon={<FaGithubAlt />}
                  value={form.github}
                  onChange={handleChange}
                />

                {/* Meeting */}
                <Field
                  id="meeting"
                  label="Meeting Link (optional)"
                  type="url"
                  icon={<FaLink />}
                  value={form.meeting}
                  onChange={handleChange}
                />

                {/* Submit */}
                <div className="md:col-span-2 mt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-sky-600 py-4 font-semibold text-white text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {/* shimmer */}
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                    <span className="relative flex items-center justify-center gap-2.5">
                      {status === "loading" ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  icon,
  value,
  onChange,
  error,
  required,
  rows = 5,
}) {
  const baseInput =
    "peer w-full rounded-xl border bg-zinc-900/60 text-white text-sm transition-all duration-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 " +
    (error
      ? "border-red-500/60 focus:ring-red-500/40"
      : "border-zinc-800 hover:border-zinc-700");

  return (
    <div className="relative">
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={rows}
          placeholder=" "
          value={value}
          onChange={onChange}
          className={`${baseInput} py-4 px-4 resize-none`}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder=" "
          value={value}
          onChange={onChange}
          className={`${baseInput} py-4 ${icon ? "pl-11 pr-4" : "px-4"}`}
        />
      )}

      {/* Floating label */}
      <label
        htmlFor={id}
        className={`absolute text-sm transition-all duration-200 select-none pointer-events-none text-zinc-400
          ${type === "textarea" ? "left-4" : icon ? "left-11" : "left-4"}
          top-4
          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-zinc-500
          peer-focus:top-1.5
          peer-focus:text-[10px]
          peer-focus:text-purple-400
          peer-not-placeholder-shown:top-1.5
          peer-not-placeholder-shown:text-[10px]
          peer-not-placeholder-shown:text-zinc-400
        `}
      >
        {label}
        {required && <span className="text-pink-400 ml-0.5">*</span>}
      </label>

      {/* Icon */}
      {icon && type !== "textarea" && (
        <span className="absolute left-4 top-4 text-zinc-500 text-sm pointer-events-none">
          {icon}
        </span>
      )}

      {/* Error */}
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
          <FaTimesCircle className="text-[10px]" />
          {error}
        </p>
      )}
    </div>
  );
}
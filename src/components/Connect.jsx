/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin, FaGithub, FaEnvelope, FaUser, FaEnvelopeOpenText,
  FaGithubAlt, FaLink, FaPaperPlane, FaCheckCircle, FaTimesCircle,
} from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { Code2, Rss, Newspaper, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";

const EMAILJS_SERVICE_ID = "service_nosk5as";
const EMAILJS_TEMPLATE_ID = "template_aeuohlj";
const EMAILJS_PUBLIC_KEY = "Cbd9cT9wFkGdasJv1";

const PROFILES = [
  { name: "GitHub", tag: "Connect", handle: "@Nevin100", glimpse: "98+ public repos · open source", href: "https://github.com/Nevin100", Icon: FaGithub, color: "hover:text-zinc-200 hover:border-zinc-500/50" },
  { name: "LinkedIn", tag: "Connect", handle: "@nevinbali1012", glimpse: "Full-stack SDE · open to opportunities", href: "https://linkedin.com/in/nevinbali1012", Icon: FaLinkedin, color: "hover:text-blue-400 hover:border-blue-400/50" },
  { name: "LeetCode", tag: "Practice", handle: "@Nevin_100", glimpse: "50-day streak · Arrays, Strings, DP", href: "https://leetcode.com/u/Nevin_100/", Icon: SiLeetcode, color: "hover:text-orange-400 hover:border-orange-400/50" },
  { name: "HackerRank", tag: "Practice", handle: "@Nevin-Bali100", glimpse: "Problem-solving badges", href: "https://www.hackerrank.com/profile/opopopopop100000", Icon: SiHackerrank, color: "hover:text-emerald-400 hover:border-emerald-400/50" },
  { name: "NeetCode", tag: "Practice", handle: "@Nevin-Bali100", glimpse: "Structured DSA practice", href: "https://neetcode.io/practice", Icon: Code2, color: "hover:text-yellow-400 hover:border-yellow-400/50" },
  { name: "dev.to", tag: "Writing", handle: "@Nevin-Bali100", glimpse: "devdocxai series", href: "https://dev.to/nevin100", Icon: Rss, color: "hover:text-zinc-200 hover:border-zinc-500/50" },
  { name: "daily.dev", tag: "Writing", handle: "@nevinbali100", glimpse: "devdocxai series", href: "https://daily.dev/nevinbali100", Icon: Newspaper, color: "hover:text-violet-400 hover:border-violet-400/50" },
  { name: "Hashnode", tag: "Writing", handle: "@nevinbali100", glimpse: "devdocxai series", href: "https://nevinbali.hashnode.dev/", Icon: BookOpen, color: "hover:text-sky-40０ hover:border-sky-4００/5０" },
  { name: "Email", tag: "Connect", handle: "nevinbali10@gmail.com", glimpse: "Direct message, fastest reply", href: "mailto:nevinbali10@gmail.com", Icon: FaEnvelope, color: "hover:text-red-400 hover:border-red-400/50" },
];

const TAG_COLOR = { Connect: "text-purple-400 bg-purple-500/10", Practice: "text-orange-400 bg-orange-500/10", Writing: "text-sky-400 bg-sky-500/10" };

const INITIAL_FORM = { name: "", email: "", message: "", github: "", meeting: "" };
const INITIAL_ERRORS = { name: "", email: "", message: "" };

export default function Connect() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [status, setStatus] = useState("idle");
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let valid = true;
    if (!form.name.trim()) { newErrors.name = "Name is required."; valid = false; }
    if (!form.email.trim()) { newErrors.email = "Email is required."; valid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { newErrors.email = "Enter a valid email."; valid = false; }
    if (!form.message.trim()) { newErrors.message = "Message cannot be empty."; valid = false; }
    else if (form.message.trim().length < 10) { newErrors.message = "Message is too short (min 10 chars)."; valid = false; }
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
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
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
    <>
      <Helmet>
        <title>Connect | Nevin Bali – Full Stack & GenAI Engineer</title>
        <meta name="description" content="Find Nevin Bali on GitHub, LinkedIn, LeetCode, HackerRank, and the devdocxai writing series, or send a direct message." />
      </Helmet>

      <section className="relative w-full py-24 px-4 md:px-8 lg:px-2 bg-transparent min-h-[800px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-8 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl" />
          <div className="absolute bottom-16 right-8 w-96 h-96 rounded-full bg-pink-500/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-sky-500/5 blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-3">Find me anywhere</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-none tracking-tight">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="mt-6 h-px bg-gradient-to-r from-purple-500/50 via-pink-500/30 to-transparent" />
          </div>

          {/* One big "find me anywhere" card, all profiles as glimpse tiles */}
          <div className="relative rounded-2xl border border-zinc-800/60 overflow-hidden mb-10">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
            <div className="p-6 md:p-10 bg-zinc-900/40 backdrop-blur-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PROFILES.map(({ name, tag, handle, glimpse, href, Icon, color }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-start gap-4 p-5 rounded-xl border border-zinc-800/70 bg-zinc-950/40 text-zinc-300 transition-all duration-200 hover:-translate-y-1 hover:bg-zinc-900/60 ${color}`}
                  >
                    <span className={`absolute top-3 right-3 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${TAG_COLOR[tag]}`}>
                      {tag}
                    </span>
                    <Icon className="text-2xl shrink-0 mt-0.5" />
                    <span className="flex flex-col leading-tight pr-10">
                      <span className="text-base font-bold text-white">{name}</span>
                      <span className="text-xs text-zinc-500 mt-0.5">{handle}</span>
                      <span className="text-xs text-zinc-400 mt-2 group-hover:text-zinc-300">{glimpse}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
          </div>

          {/* Form card */}
          <div
            ref={cardRef}
            className="relative rounded-2xl border border-zinc-800/60 overflow-hidden"
            style={{
              background: `radial-gradient(ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(192,132,252,0.07) 0%, rgba(236,72,153,0.04) 40%, rgba(24,24,27,0.95) 70%)`,
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

            <div className="p-8 md:p-10">
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

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field id="name" label="Your Name" type="text" icon={<FaUser />} value={form.name} onChange={handleChange} error={errors.name} required />
                  <Field id="email" label="Your Email" type="email" icon={<FaEnvelopeOpenText />} value={form.email} onChange={handleChange} error={errors.email} required />
                  <div className="md:col-span-2">
                    <Field id="message" label="Your Message" type="textarea" value={form.message} onChange={handleChange} error={errors.message} required rows={5} />
                  </div>
                  <Field id="github" label="GitHub ID (optional)" type="text" icon={<FaGithubAlt />} value={form.github} onChange={handleChange} />
                  <Field id="meeting" label="Meeting Link (optional)" type="url" icon={<FaLink />} value={form.meeting} onChange={handleChange} />

                  <div className="md:col-span-2 mt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-sky-600 py-4 font-semibold text-white text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                      <span className="relative flex items-center justify-center gap-2.5">
                        {status === "loading" ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
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

            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, type = "text", icon, value, onChange, error, required, rows = 5 }) {
  const baseInput =
    "peer w-full rounded-xl border bg-zinc-900/60 text-white text-sm transition-all duration-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 " +
    (error ? "border-red-500/60 focus:ring-red-500/40" : "border-zinc-800 hover:border-zinc-700");

  return (
    <div className="relative">
      {type === "textarea" ? (
        <textarea id={id} rows={rows} placeholder=" " value={value} onChange={onChange} className={`${baseInput} py-4 px-4 resize-none`} />
      ) : (
        <input type={type} id={id} placeholder=" " value={value} onChange={onChange} className={`${baseInput} py-4 ${icon ? "pl-11 pr-4" : "px-4"}`} />
      )}
      <label
        htmlFor={id}
        className={`absolute text-sm transition-all duration-200 select-none pointer-events-none text-zinc-400
          ${type === "textarea" ? "left-4" : icon ? "left-11" : "left-4"}
          top-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500
          peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-purple-400
          peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-zinc-400`}
      >
        {label}{required && <span className="text-pink-400 ml-0.5">*</span>}
      </label>
      {icon && type !== "textarea" && <span className="absolute left-4 top-4 text-zinc-500 text-sm pointer-events-none">{icon}</span>}
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
          <FaTimesCircle className="text-[10px]" />
          {error}
        </p>
      )}
    </div>
  );
}
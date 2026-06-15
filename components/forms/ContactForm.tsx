"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inquiryTypes = [
  { value: "", label: "Select inquiry type" },
  { value: "general", label: "General Inquiry" },
  { value: "media", label: "Media / Press Inquiry" },
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "volunteer", label: "Volunteer" },
  { value: "other", label: "Other" },
];

const inputClasses =
  "w-full rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(5,5,48,0.6)] px-4 py-3 text-white placeholder:text-[#8080A0] backdrop-blur-sm transition-colors duration-200 focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric";

const labelClasses =
  "mb-2 block text-sm font-medium tracking-wide text-[#C0C0D0]";

const errorClasses = "mt-1 text-sm text-crimson";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <div className="glass-card p-8 md:p-10">
      <h2
        className="mb-2 text-2xl font-bold text-white"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Send Us a Message
      </h2>
      <p
        className="mb-8 text-[#C0C0D0]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        We respond to all inquiries within 2 business days. For urgent media
        requests, please indicate in your subject line.
      </p>

      {submitted && (
        <div className="mb-6 rounded-xl border border-electric/30 bg-electric/10 p-4 text-electric">
          Thank you for reaching out. We will get back to you within 2 business
          days.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Name */}
          <div>
            <label htmlFor="name" className={labelClasses} style={{ fontFamily: "var(--font-body)" }}>
              Name <span className="text-crimson">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              className={inputClasses}
              style={{ fontFamily: "var(--font-body)" }}
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className={errorClasses} role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClasses} style={{ fontFamily: "var(--font-body)" }}>
              Email <span className="text-crimson">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className={inputClasses}
              style={{ fontFamily: "var(--font-body)" }}
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className={errorClasses} role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Subject / Inquiry Type */}
        <div>
          <label htmlFor="subject" className={labelClasses} style={{ fontFamily: "var(--font-body)" }}>
            Inquiry Type <span className="text-crimson">*</span>
          </label>
          <select
            id="subject"
            className={inputClasses}
            style={{ fontFamily: "var(--font-body)" }}
            {...register("subject")}
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          >
            {inquiryTypes.map((type) => (
              <option key={type.value} value={type.value} className="bg-midnight text-white">
                {type.label}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p id="subject-error" className={errorClasses} role="alert">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClasses} style={{ fontFamily: "var(--font-body)" }}>
            Message <span className="text-crimson">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us how we can help..."
            className={`${inputClasses} resize-y`}
            style={{ fontFamily: "var(--font-body)" }}
            {...register("message")}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className={errorClasses} role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="cta"
          size="lg"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}

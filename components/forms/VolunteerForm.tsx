"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const volunteerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  interests: z
    .array(z.string())
    .min(1, "Please select at least one area of interest"),
  message: z.string().optional(),
});

type VolunteerFormData = z.infer<typeof volunteerSchema>;

const interestOptions = [
  { value: "legislative-advocacy", label: "Legislative Advocacy" },
  { value: "digital-literacy-training", label: "Digital Literacy Training" },
  { value: "event-support", label: "Event Support" },
  { value: "research-writing", label: "Research & Writing" },
  { value: "community-outreach", label: "Community Outreach" },
];

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interests: [],
      message: "",
    },
  });

  const onSubmit = (data: VolunteerFormData) => {
    console.log("Volunteer form submitted:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <GlassCard variant="navy" hover={false} className="text-center">
        <div
          className="mb-2 text-4xl text-electric"
          aria-hidden="true"
        >
          &#10003;
        </div>
        <h3
          className="mb-2 text-xl font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Thank You
        </h3>
        <p
          className="text-[#C0C0D0]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Your volunteer interest has been received. We will be in touch
          within two business days.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-electric underline underline-offset-4 hover:text-electric-soft"
        >
          Submit another response
        </button>
      </GlassCard>
    );
  }

  return (
    <GlassCard variant="default" hover={false}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="volunteer-name"
            className="mb-2 block text-sm font-medium text-white"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Name <span className="text-crimson">*</span>
          </label>
          <input
            id="volunteer-name"
            type="text"
            {...register("name")}
            className="w-full rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(5,5,48,0.6)] px-4 py-3 text-white placeholder:text-[#8080A0] focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
            style={{ fontFamily: "var(--font-body)" }}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-crimson">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="volunteer-email"
            className="mb-2 block text-sm font-medium text-white"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Email <span className="text-crimson">*</span>
          </label>
          <input
            id="volunteer-email"
            type="email"
            {...register("email")}
            className="w-full rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(5,5,48,0.6)] px-4 py-3 text-white placeholder:text-[#8080A0] focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
            style={{ fontFamily: "var(--font-body)" }}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-crimson">{errors.email.message}</p>
          )}
        </div>

        {/* Phone (optional) */}
        <div>
          <label
            htmlFor="volunteer-phone"
            className="mb-2 block text-sm font-medium text-white"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Phone <span className="text-[#8080A0]">(optional)</span>
          </label>
          <input
            id="volunteer-phone"
            type="tel"
            {...register("phone")}
            className="w-full rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(5,5,48,0.6)] px-4 py-3 text-white placeholder:text-[#8080A0] focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
            style={{ fontFamily: "var(--font-body)" }}
            placeholder="(555) 555-5555"
          />
        </div>

        {/* Areas of Interest (checkboxes) */}
        <fieldset>
          <legend
            className="mb-3 text-sm font-medium text-white"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Areas of Interest <span className="text-crimson">*</span>
          </legend>
          <div className="space-y-3">
            {interestOptions.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-3 text-[#C0C0D0] hover:text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <input
                  type="checkbox"
                  value={option.value}
                  {...register("interests")}
                  className="h-4 w-4 rounded border-[rgba(255,255,255,0.20)] bg-[rgba(5,5,48,0.6)] text-electric accent-electric focus:ring-electric"
                />
                {option.label}
              </label>
            ))}
          </div>
          {errors.interests && (
            <p className="mt-2 text-sm text-crimson">
              {errors.interests.message}
            </p>
          )}
        </fieldset>

        {/* Message (optional) */}
        <div>
          <label
            htmlFor="volunteer-message"
            className="mb-2 block text-sm font-medium text-white"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Message <span className="text-[#8080A0]">(optional)</span>
          </label>
          <textarea
            id="volunteer-message"
            rows={4}
            {...register("message")}
            className="w-full rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(5,5,48,0.6)] px-4 py-3 text-white placeholder:text-[#8080A0] focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
            style={{ fontFamily: "var(--font-body)" }}
            placeholder="Tell us about your experience or what brought you here..."
          />
        </div>

        <Button type="submit" variant="cta" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Volunteer Interest"}
        </Button>
      </form>
    </GlassCard>
  );
}

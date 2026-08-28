"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDownIcon, ClockIcon, MailIcon } from "@/components/icons/UtilityIcons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { usePlanContext } from "@/components/PlanContext";
import { campaignOffer } from "@/data/campaign";
import { pricingPlans } from "@/data/pricing";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";
import type { ContactSubmitResult } from "@/lib/contact";
import { ContactBlob } from "./ContactBlob";

type Status = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

const inputClass =
  "w-full min-h-11 rounded-[14px] border border-line bg-white px-4 py-3.5 text-[0.95rem] text-ink transition-[border-color,box-shadow] duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(136,120,255,0.14)] focus:outline-none";

const GENERIC_ERROR_MESSAGE = "送信できませんでした。時間をおいて再度お試しください。";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: { name: string; email: string; message: string; consent: boolean }): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "お名前を入力してください。";
  }

  if (!values.email.trim()) {
    errors.email = "メールアドレスを入力してください。";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "メールアドレスの形式をご確認ください。";
  }

  if (!values.message.trim()) {
    errors.message = "お問い合わせ内容を入力してください。";
  }

  if (!values.consent) {
    errors.consent = "プライバシーポリシーへの同意が必要です。";
  }

  return errors;
}

export function Contact() {
  const { selectedPlan, setSelectedPlan } = usePlanContext();
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [consent, setConsent] = useState(false);

  function clearFieldError(field: keyof FormErrors) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      shop: String(formData.get("shop") ?? ""),
      plan: String(formData.get("plan") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const nextErrors = validate({ ...payload, consent });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setFeedback("未入力・入力形式に誤りがある項目があります。ご確認ください。");
      return;
    }

    setStatus("submitting");
    setFeedback("送信中...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as ContactSubmitResult;

      if (response.ok && result.ok) {
        setStatus("success");
        setFeedback(result.message);
        form.reset();
        setSelectedPlan("");
        setConsent(false);
        setErrors({});
      } else {
        setStatus("error");
        setFeedback(result.message || GENERIC_ERROR_MESSAGE);
      }
    } catch {
      setStatus("error");
      setFeedback(GENERIC_ERROR_MESSAGE);
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-[var(--header-h)] overflow-hidden pb-10 pt-16 sm:pb-[clamp(40px,7vw,88px)] sm:pt-[clamp(72px,10vw,120px)]"
    >
      <ContactBlob />
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="CONTACT"
          title="お問い合わせ"
          description={
            <span className="text-pretty break-keep">
              まだ依頼するか決まっていなくても大丈夫です。
              <br />
              お店のお悩みやご希望をお聞きしたうえで、
              <br className="hidden nav:inline" />
              最適な制作内容をご提案します。
              <br />
              ご相談・お見積りは無料です。
            </span>
          }
        />

        <div className="-mt-4 grid gap-[clamp(24px,4vw,48px)] rounded-[28px] bg-surface-alt p-[clamp(28px,4vw,48px)] tablet:grid-cols-[0.85fr_1.15fr] sm:-mt-6">
          <Reveal delay={0.15} duration={0.5}>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-[var(--shadow-sm)]">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="mb-0.5 text-[0.8rem] text-ink-soft">メール</p>
                  <a href={`mailto:${siteConfig.email}`} className="font-semibold transition-colors hover:text-accent">
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-[var(--shadow-sm)]">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="mb-0.5 text-[0.8rem] text-ink-soft">対応時間</p>
                  <p className="font-semibold text-ink">{siteConfig.hours}</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.3} duration={0.5}>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
              <p className="text-[0.78rem] text-ink-faint">通常1〜2日以内にご返信します。</p>

              <Field label="お名前" htmlFor="name" required error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={() => clearFieldError("name")}
                  className={inputClass}
                />
              </Field>

              <Field label="店舗・会社名" htmlFor="shop" optional>
                <input id="shop" name="shop" type="text" autoComplete="organization" className={inputClass} />
              </Field>

              <Field label="ご希望のプラン" htmlFor="plan" optional>
                <div className="relative">
                  <select
                    id="plan"
                    name="plan"
                    value={selectedPlan}
                    onChange={(event) => setSelectedPlan(event.target.value)}
                    className={cn(inputClass, "appearance-none pr-10")}
                  >
                    <option value="">選択してください（未定でも大丈夫です）</option>
                    <option value={campaignOffer.planValue}>{campaignOffer.planValue}</option>
                    {pricingPlans.map((plan) => (
                      <option key={plan.id} value={plan.planValue}>
                        {plan.planValue}
                      </option>
                    ))}
                    <option value="まだ決めていない・相談したい">まだ決めていない・相談したい</option>
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
                </div>
              </Field>

              <Field label="メールアドレス" htmlFor="email" required error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={() => clearFieldError("email")}
                  className={inputClass}
                />
              </Field>

              <Field label="お問い合わせ内容" htmlFor="message" required error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={() => clearFieldError("message")}
                  className={cn(inputClass, "resize-y")}
                />
              </Field>

              <div>
                <div className="flex items-start gap-3 py-1">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(event) => {
                      setConsent(event.target.checked);
                      clearFieldError("consent");
                    }}
                    aria-invalid={errors.consent ? true : undefined}
                    aria-describedby={errors.consent ? "consent-error" : undefined}
                    className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer rounded border-line text-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                  <label htmlFor="consent" className="cursor-pointer text-[0.85rem] leading-relaxed text-ink-soft">
                    {siteConfig.privacyPolicyUrl ? (
                      <Link
                        href={siteConfig.privacyPolicyUrl}
                        className="font-semibold text-ink underline underline-offset-2 hover:text-accent"
                        onClick={(event) => event.stopPropagation()}
                      >
                        プライバシーポリシー
                      </Link>
                    ) : (
                      <span className="font-semibold text-ink underline decoration-dotted underline-offset-2">
                        プライバシーポリシー
                      </span>
                    )}
                    に同意する
                    <span className="ml-2 inline-block rounded-full bg-accent px-2 py-0.5 align-middle text-[0.68rem] font-bold text-white">
                      必須
                    </span>
                  </label>
                </div>
                {errors.consent && (
                  <p id="consent-error" className="mb-3 text-[0.8rem] text-red-600">
                    {errors.consent}
                  </p>
                )}

                <Button type="submit" size="lg" block disabled={status === "submitting"}>
                  {status === "submitting" ? "送信中..." : "無料で相談する"}
                </Button>
                <p className="mt-2.5 text-center text-[0.78rem] text-ink-faint">
                  ご相談・お見積りは無料です。無理な営業はいたしません。
                </p>
              </div>

              <p
                role="status"
                aria-live="polite"
                className={cn(
                  "min-h-5 text-[0.88rem] font-semibold",
                  status === "error" ? "text-red-600" : "text-accent"
                )}
              >
                {feedback}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required,
  optional,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-[0.88rem] font-semibold text-ink">
        {label}
        {required && (
          <span className="ml-2 inline-block rounded-full bg-accent px-2 py-0.5 align-middle text-[0.68rem] font-bold text-white">
            必須
          </span>
        )}
        {optional && <span className="ml-2 align-middle text-[0.75rem] font-normal text-ink-faint">任意</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-[0.8rem] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

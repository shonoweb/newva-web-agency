"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ChevronDownIcon, ClockIcon, MailIcon, PhoneIcon } from "@/components/icons/UtilityIcons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { usePlanContext } from "@/components/PlanContext";
import { pricingPlans } from "@/data/pricing";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";
import type { ContactSubmitResult } from "@/lib/contact";
import { ContactBlob } from "./ContactBlob";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full min-h-11 rounded-[14px] border border-line bg-white px-4 py-3.5 text-[0.95rem] text-ink transition-[border-color,box-shadow] duration-300 focus:border-ink focus:shadow-[0_0_0_3px_rgba(22,22,26,0.06)] focus:outline-none";

export function Contact() {
  const { selectedPlan, setSelectedPlan } = usePlanContext();
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus("error");
      setFeedback("未入力の必須項目があります。ご確認ください。");
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      shop: String(formData.get("shop") ?? ""),
      plan: String(formData.get("plan") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

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
      } else {
        setStatus("error");
        setFeedback(result.message || "送信に失敗しました。しばらくしてから再度お試しください。");
      }
    } catch {
      setStatus("error");
      setFeedback("通信エラーが発生しました。お手数ですがメールまたはお電話にてご連絡ください。");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-[var(--header-h)] overflow-hidden py-16 sm:py-[clamp(72px,10vw,120px)]">
      <ContactBlob />
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="CONTACT"
          title="お問い合わせ"
          description={
            <>
              Webサイトの新規制作・リニューアルなど、まずはお気軽にご相談ください。
              <br />
              初めての方にも、丁寧にご案内いたします。
            </>
          }
        />

        <div className="grid gap-[clamp(32px,5vw,64px)] rounded-[28px] bg-surface p-[clamp(32px,5vw,56px)] tablet:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <ul className="flex flex-col gap-6">
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
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="mb-0.5 text-[0.8rem] text-ink-soft">お電話</p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/-/g, "")}`}
                    className="font-semibold transition-colors hover:text-accent"
                  >
                    {siteConfig.phone}
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

          <Reveal delay={0.1}>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Field label="お名前" htmlFor="name" required>
                <input id="name" name="name" type="text" autoComplete="name" required className={inputClass} />
              </Field>

              <Field label="店舗・会社名" htmlFor="shop">
                <input id="shop" name="shop" type="text" autoComplete="organization" className={inputClass} />
              </Field>

              <Field label="ご希望のプラン" htmlFor="plan">
                <div className="relative">
                  <select
                    id="plan"
                    name="plan"
                    value={selectedPlan}
                    onChange={(event) => setSelectedPlan(event.target.value)}
                    className={cn(inputClass, "appearance-none pr-10")}
                  >
                    <option value="">選択してください（未定でも大丈夫です）</option>
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

              <Field label="メールアドレス" htmlFor="email" required>
                <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
              </Field>

              <Field label="お問い合わせ内容" htmlFor="message" required>
                <textarea id="message" name="message" rows={5} required className={cn(inputClass, "resize-y")} />
              </Field>

              <Button type="submit" size="lg" block disabled={status === "submitting"}>
                {status === "submitting" ? "送信中..." : "送信する"}
              </Button>

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
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
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
      </label>
      {children}
    </div>
  );
}

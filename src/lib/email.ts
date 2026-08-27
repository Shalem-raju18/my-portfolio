import type { EmailJSResponseStatus } from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = "RFMxBPoTS5-9xg996";
const EMAILJS_SERVICE_ID = "service_4m76um3";
const EMAILJS_TEMPLATE_ID = "template_w94wx8s";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<EmailJSResponseStatus> {
  const emailjs = await import("@emailjs/browser");

  return emailjs.default.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    },
    {
      publicKey: EMAILJS_PUBLIC_KEY,
    },
  );
}

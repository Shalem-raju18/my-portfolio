import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { sendContactEmail } from "./email";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name (at least 2 characters)." })
    .max(100, { message: "Name must be under 100 characters." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be under 255 characters." }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Please add a short subject." })
    .max(150, { message: "Subject must be under 150 characters." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please write at least 10 characters." })
    .max(2000, { message: "Message must be under 2000 characters." }),
});

export type ContactValues = z.infer<typeof contactSchema>;
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export async function submitContactMessage(values: ContactValues): Promise<void> {
  const { error } = await supabase.from("contact_messages").insert(values);
  if (error) throw error;

  // Best-effort email notification — never fails the submission.
  try {
    await sendContactEmail(values);
  } catch (err) {
    console.warn("Contact email notification failed", err);
  }
}

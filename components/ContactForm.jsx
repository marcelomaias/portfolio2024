import { sendEmail } from "@/actions/sendEmail";

export default function ContactForm() {

  return (
    <>
    <h2>Get in touch</h2>

    <form action={sendEmail}>
      <input type="email" name="email" placeholder="e-mail" />

      <textarea name="email" rows={4} placeholder="message" />

      <button type="submit">Send message</button>

    </form>
    </>
  )
}

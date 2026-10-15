import { useState, type ChangeEvent, type FormEvent } from "react";

import mailIcon from "../assets/svg/mail-heart-svgrepo-com.svg";
import linkedinIcon from "../assets/svg/linkedin-svgrepo-com.svg";
import githubIcon from "../assets/svg/github-svgrepo-com.svg";

type ContactProps = {
  language: "en" | "sv";
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function Contact({ language }: ContactProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const isEnglish = language === "en";

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = isEnglish
        ? "Name is required."
        : "Namn är obligatoriskt.";
    }

    if (!form.email.trim()) {
      newErrors.email = isEnglish
        ? "Email is required."
        : "E-post är obligatoriskt.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = isEnglish
        ? "Please enter a valid email address."
        : "Ange en giltig e-postadress.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = isEnglish
        ? "Phone number is required."
        : "Telefonnummer är obligatoriskt.";
    }

    if (!form.subject.trim()) {
      newErrors.subject = isEnglish
        ? "Subject is required."
        : "Ämne är obligatoriskt.";
    }

    if (!form.message.trim()) {
      newErrors.message = isEnglish
        ? "Message is required."
        : "Meddelande är obligatoriskt.";
    }

    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="section-heading">
        <p className="section-label">{isEnglish ? "Contact" : "Kontakt"}</p>

        <h2>
          {isEnglish
            ? "Have a project in mind?"
            : "Har du ett projekt i åtanke?"}
        </h2>

        <p>
          {isEnglish
            ? "Have a question or want to get in touch? Send me a message."
            : "Har du en fråga eller vill du komma i kontakt? Skicka ett meddelande."}
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h3>{isEnglish ? "Get in touch" : "Kontakta mig"}</h3>

          <p>
            {isEnglish
              ? "I'm always interested in discussing web development, creative ideas and new opportunities."
              : "Jag är alltid intresserad av att prata om webbutveckling, kreativa idéer och nya möjligheter."}
          </p>

          <div className="contact-links">
            <a
              href="mailto:minai.karlsson@outlook.com"
              className="contact-link"
            >
              <img src={mailIcon} alt="" />
              <span>
                <span>{isEnglish ? "Email" : "E-post"}</span>
                <span>minai.karlsson@outlook.com</span>
              </span>
            </a>

            <a
              href="https://github.com/minza-42"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="" />
              <span>
                <span>GitHub</span>
                <span>github.com/minza-42 ↗</span>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/minai-karlsson-7192a4392/"
              className="contact-link"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="" />
              <span>
                <span>LinkedIn</span>
                <span>{isEnglish ? "View profile ↗" : "Visa profil ↗"}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name">{isEnglish ? "Name" : "Namn"}</label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder={isEnglish ? "Your name" : "Ditt namn"}
              />

              {errors.name && (
                <p className="form-error" id="name-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">{isEnglish ? "Email" : "E-post"}</label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder={isEnglish ? "your@email.com" : "din@epost.se"}
              />

              {errors.email && (
                <p className="form-error" id="email-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="phone">{isEnglish ? "Phone" : "Telefon"}</label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                placeholder={
                  isEnglish ? "Your phone number" : "Ditt telefonnummer"
                }
              />

              {errors.phone && (
                <p className="form-error" id="phone-error">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="subject">{isEnglish ? "Subject" : "Ämne"}</label>

              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                placeholder={
                  isEnglish ? "What is it about?" : "Vad gäller det?"
                }
              />

              {errors.subject && (
                <p className="form-error" id="subject-error">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="message">
                {isEnglish ? "Message" : "Meddelande"}
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder={
                  isEnglish
                    ? "Write your message here..."
                    : "Skriv ditt meddelande här..."
                }
              />

              {errors.message && (
                <p className="form-error" id="message-error">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="contact-submit">
              {isEnglish ? "Send message" : "Skicka meddelande"}
            </button>

            {submitted && (
              <p className="form-success" role="status">
                {isEnglish
                  ? "Your message has been sent successfully!"
                  : "Ditt meddelande har skickats!"}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

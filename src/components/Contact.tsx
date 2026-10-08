import { useState, type ChangeEvent, type FormEvent } from "react";

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
      newErrors.name =
        language === "en" ? "Name is required." : "Namn är obligatoriskt.";
    }

    if (!form.email.trim()) {
      newErrors.email =
        language === "en" ? "Email is required." : "E-post är obligatoriskt.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email =
        language === "en"
          ? "Please enter a valid email address."
          : "Ange en giltig e-postadress.";
    }

    if (!form.phone.trim()) {
      newErrors.phone =
        language === "en"
          ? "Phone number is required."
          : "Telefonnummer är obligatoriskt.";
    }

    if (!form.subject.trim()) {
      newErrors.subject =
        language === "en" ? "Subject is required." : "Ämne är obligatoriskt.";
    }

    if (!form.message.trim()) {
      newErrors.message =
        language === "en"
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
        <p className="section-label">
          {language === "en" ? "Contact" : "Kontakt"}
        </p>

        <h2>
          {language === "en"
            ? "Have a project in mind?"
            : "Har du ett projekt i åtanke?"}
        </h2>

        <p>
          {language === "en"
            ? "Have a question or want to get in touch? Send me a message."
            : "Har du en fråga eller vill du komma i kontakt? Skicka ett meddelande."}
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="name">{language === "en" ? "Name" : "Namn"}</label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
          />

          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="email">
            {language === "en" ? "Email" : "E-post"}
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
          />

          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="phone">
            {language === "en" ? "Phone" : "Telefon"}
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
          />

          {errors.phone && <p className="form-error">{errors.phone}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="subject">
            {language === "en" ? "Subject" : "Ämne"}
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            aria-invalid={Boolean(errors.subject)}
          />

          {errors.subject && <p className="form-error">{errors.subject}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="message">
            {language === "en" ? "Message" : "Meddelande"}
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
          />

          {errors.message && <p className="form-error">{errors.message}</p>}
        </div>

        <button type="submit" className="contact-submit">
          {language === "en" ? "Send message" : "Skicka meddelande"}
        </button>

        {submitted && (
          <p className="form-success" role="status">
            {language === "en"
              ? "Your message has been sent successfully!"
              : "Ditt meddelande har skickats!"}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;

import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xovaoaje");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    let newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      await handleSubmit(e);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  if (state.succeeded) {
    return (
      <div
        className="p-4 mb-6 text-sm text-black bg-[#C5FF41] hover:bg-[#6f9c05] py-4 px-4 rounded w-full max-w-[400px]"
        role="alert">
        <span className="font-medium">Successfully Sent:</span> Thank you for
        your message, I will get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 w-full max-w-[400px]">
      <h1 className="bricolage-grotesque-black uppercase text-6xl md:text-7xl text-white leading-[1.1]">
        LET US
      </h1>
      <h1 className="bricolage-grotesque-black uppercase text-6xl md:text-7xl text-[#998f8fdf] leading-[1.1]">
        CONNECT
      </h1>
      <p className="text-[#bcbcbc] text-sm md:text-base">
        Please feel free to reach out to me if you want to know more.
      </p>

      {/* Name */}
      <fieldset className="bg-[#353334] h-[60px] rounded-md ring-1 ring-black relative">
        <legend className="text-sm text-white ml-4">
          <label htmlFor="name">What is your Name?</label>
        </legend>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full h-full bg-inherit rounded-md px-4 text-white capitalize focus:outline-none placeholder:text-[#aaa]"
          autoComplete="off"
          placeholder="Your Name"
        />
        {errors.name && (
          <p className="text-red-400 text-xs absolute bottom-[-1.25rem] left-1">
            {errors.name}
          </p>
        )}
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </fieldset>

      {/* Email */}
      <fieldset className="bg-[#353334] h-[60px] rounded-md ring-1 ring-black relative">
        <legend className="text-sm text-white ml-4">
          <label htmlFor="email">What is your Email?</label>
        </legend>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full h-full bg-inherit rounded-md px-4 text-white lowercase focus:outline-none placeholder:text-[#aaa]"
          autoComplete="off"
          placeholder="Your Email Address"
        />
        {errors.email && (
          <p className="text-red-400 text-xs absolute bottom-[-1.25rem] left-1">
            {errors.email}
          </p>
        )}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </fieldset>

      {/* Message */}
      <div className="relative">
        <textarea
          name="message"
          id="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#353334] rounded-md ring-1 ring-black px-4 py-2 text-white placeholder:text-[#aaa] resize-none"
          placeholder="Your message goes here..."
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message}</p>
        )}
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      {/* Button */}
      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-[#C5FF41] hover:bg-[#6f9c05] text-black font-bold py-2 px-4 rounded transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

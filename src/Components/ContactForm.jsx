import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xovaoaje");
  if (state.succeeded) {
    return (
      <div
        className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 md:w-[40%]"
        role="alert">
        <span className="font-medium">Successfully Sent!</span> Thank you for your message, I will get back to you shortly.
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="protest-guerrilla-regular uppercase text-8xl w-[60%] text-white">
        LET US
      </h1>
      <h1 className="protest-guerrilla-regular uppercase text-8xl w-[60%] text-[#998f8fdf]">
        CONNECT
      </h1>
      <br />
      <br />

      <fieldset className="bg-[#353334] w-[30%] h-[60px] rounded-md ring-[1px] ring-black box-border">
        <legend className="inria-sans-regular text-white ml-4">
          <label htmlFor="email">Email</label>
        </legend>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full rounded-md focus:outline-none h-full px-4 bg-inherit"
          autoComplete="off"
          placeholder="Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </fieldset>
      <br />

      <label
        htmlFor="message"
        className="hidden inria-sans-regular text-white ml-4">
        Message
      </label>
      <br />
      <textarea
        name="message"
        id="message"
        rows="6"
        className="bg-[#353334] w-[30%] min-h-[60px] rounded-md ring-[1px] ring-black box-border px-2 py-2"
        required
        placeholder="Your message goes here..."
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <br />
      <br />

      <div className="flex items-start justify-start w-[30%]">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-[#C5FF41] hover:bg-[#6f9c05] text-black font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </div>
      <br />
    </form>
  );
};

export default ContactForm;

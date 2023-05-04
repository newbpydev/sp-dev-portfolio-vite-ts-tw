import { useRef, useState } from "react";
import Button from "../ui/buttons/Button";
import InputError from "../error/InputError";
// * TYPES
// interface Props {}
interface InvalidError {
  field: "name" | "email" | "msg";
  msg: string;
}

// * COMPONENT: ContactForm
function ContactForm() {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const msg = useRef<HTMLTextAreaElement>(null);
  const [invalid, setInvalid] = useState<InvalidError | null>(null);

  const submitHandler: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (name.current) {
      if (name.current.value.trim() === "") {
        setInvalid({ field: "name", msg: "Sorry, please insert a name here" });
        // name.current.focus();
        return;
      }
    }
    if (email.current) {
      if (email.current.value.trim() === "") {
        setInvalid({ field: "email", msg: "Sorry, invalid format here" });
        return;
      }
    }
    if (msg.current) {
      if (msg.current.value.trim() === "") {
        setInvalid({ field: "msg", msg: "Sorry, please enter a message" });
        return;
      }
    }

    if (!name.current) {
      setInvalid({ field: "name", msg: "Sorry, please insert a name here" });
    } else if (!email.current) {
      setInvalid({ field: "email", msg: "Sorry, invalid format here" });
    } else if (!msg.current) {
      setInvalid({ field: "msg", msg: "Sorry, please enter a message" });
    } else {
      setInvalid(null);
    }
  };

  // @ Output
  return (
    <form className="flex flex-col space-y-8" onSubmit={submitHandler}>
      {/* <input type="text" placeholder="Name" /> */}

      <div className="flex flex-col relative">
        <input
          placeholder="Name"
          type="text"
          className={`uppercase pb-4 px-6 text-[16px] text-white leading-[26px] tracking-[-0.22px] border-b-[1px] bg-transparent ${
            invalid
              ? invalid.field === "name"
                ? " border-b-rose-500"
                : " border-b-green"
              : ""
          }`}
          ref={name}
        />
        {invalid && invalid.field === "name" && (
          <InputError msg={invalid.msg} />
        )}
      </div>

      <input
        placeholder="Email"
        type="email"
        ref={email}
        className={`uppercase pb-4 px-6 text-[16px] text-white leading-[26px] tracking-[-0.22px] border-b-[1px] bg-transparent ${
          invalid && invalid.field === "email"
            ? " border-b-rose-500"
            : " border-b-green"
        }`}
      />
      {invalid && invalid.field === "email" && <InputError msg={invalid.msg} />}

      <textarea
        name="message"
        id="message"
        cols={10}
        rows={3}
        ref={msg}
        placeholder="Message"
        className={`uppercase pb-4 px-6 text-[16px] text-white leading-[26px] tracking-[-0.22px] border-b-[1px] bg-transparent ${
          invalid && invalid.field === "msg"
            ? " border-b-rose-500"
            : " border-b-green"
        }`}
      ></textarea>
      {invalid && invalid.field === "msg" && <InputError msg={invalid.msg} />}
      <Button type="submit">Send Message</Button>
    </form>
  );
}

export default ContactForm;

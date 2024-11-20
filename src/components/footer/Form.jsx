import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const message = useRef();

  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  function handleForm(e) {
    e.preventDefault();
    if (
      firstName.current.value == "" &&
      firstName.current.value == "" &&
      firstName.current.value == "" &&
      firstName.current.value == ""
    ) {
      setMessageText("Enter Valid Data");
      setShowMessage(true);
    } else {
      emailjs
        .sendForm("service_wj9blhq", "template_ilsh38r", form.current, {
          publicKey: "I-dM-ABqtWD4HY59C",
        })
        .then(
          () => {
            setMessageText("The message send successfully");
            setShowMessage(true);
            firstName.current.value = "";
            lastName.current.value = "";
            email.current.value = "";
            message.current.value = "";
          },
          () => {
            setShowMessage(false);
          }
        );
    }

    setTimeout(() => {
      setShowMessage(false);
    }, 7000);
  }

  return (
    <div className="isolate bg-white shadow-2xl p-7">
      <div className="mx-auto max-w-2xl text-start">
        <h2 className="text-xl font-bold tracking-tight text-main sm:text-xl">
          Contact Us
        </h2>
        {showMessage && (
          <p className="text-red-700 p-3 font-semibold">{messageText}</p>
        )}
      </div>
      <form
        ref={form}
        onSubmit={(e) => handleForm(e)}
        className="mx-auto  max-w-xl mt-5"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                ref={firstName}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                ref={lastName}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                ref={email}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                ref={message}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-main hover:bg-sky-600 transition-all ease-in-out delay-100 duration-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

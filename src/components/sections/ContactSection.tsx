// * TYPES
// interface Props {}

import ContactForm from "../form/ContactForm";

// * COMPONENT: ContactSection
function ContactSection() {
  // @ Output
  return (
    <section
      id="contact"
      className="relative pb-10 space-y-12 text-center section-container bg-dark-gray pt-[60px] contact-bg-image"
    >
      <div className="border-b-[1px] pb-24 flex flex-col md:items-center md:pb-[92px] ">
        <div className="flex flex-col space-y-5  mb-[50px] md:mb-[48px] md:w-[445px]">
          <h2 className="text-[40px] font-bold leading-10 tracking-[-1.14px] md:text-h1md md:leading-[72px]">
            Contact
          </h2>

          <p className="text-[16px] leading-[26px] text-light-gray md:text-base">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;

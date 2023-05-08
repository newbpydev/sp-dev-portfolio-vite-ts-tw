// * TYPES
// interface Props {}

import ContactForm from "../form/ContactForm";

// * COMPONENT: ContactSection
function ContactSection() {
  // @ Output
  return (
    <section
      id="contact"
      className="relative pb-10 space-y-12 text-center section-container bg-dark-gray pt-14 contact-bg-image"
    >
      <div className="border-b-[1px] pb-24">
        <div className="flex flex-col space-y-5  mb-[50px]">
          <h2 className="text-[40px] font-bold leading-10 tracking-[-1.14px]">
            Contact
          </h2>

          <p className="text-[16px] leading-[26px] text-light-gray">
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

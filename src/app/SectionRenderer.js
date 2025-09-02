// components/SectionRenderer.js
import Hero from "./Hero";
import RichText from "./RichText";
import ContactForm from "./ContactForm";


export default function SectionRenderer({ section }) {
  switch (section?.__component) {
    case "section.hero":
      return <Hero {...section} />;
    case "section-contact-form":
      return <ContactForm {...section} />;
    case "section-rich-text":
      return <RichText {...section} />;
    default:
      return null;
  }
}


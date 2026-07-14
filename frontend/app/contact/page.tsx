import SmoothScroll from "@/components/common/SmoothScroll";
import ContactForm from "@/components/contacts/ContactForm";
import ContactsHero from "@/components/contacts/ContactsHero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const ContactPage = () => {
  return (
    <>
      <SmoothScroll>
        <Navbar />
        <ContactsHero />
        <ContactForm/>
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default ContactPage;

// Page components
import BaseLayout from "layouts/sections/components/BaseLayout";
import Contact from "pages/LandingPages/AboutUs/sections/Contact";

function ContactUs() {
  return (
    <BaseLayout
      title="Contact Us"
      breadcrumb={[
        { label: "AI Club", route: "pages/LandingPages/AboutUs/sections/Contact" },
        { label: "Contact" },
      ]}
    >
        <Contact />
    </BaseLayout>
  );
}

export default ContactUs;

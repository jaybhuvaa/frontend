import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg mb-4">
        Have questions, feedback, or suggestions? We'd love to hear from you!
      </p>
      <p className="text-lg mb-4">
        You can reach out to us using the contact information below:
      </p>
      <h3 className="text-2xl font-bold mb-2">Contact Information:</h3>
      <ul className="list-disc ml-6 mb-4">
        <li className="text-lg">Email: jaybhuva57@gmail.com</li>
        <li className="text-lg">Phone: +91 7096116179</li>
        <li className="text-lg">Address: Surat,Gujarat,India</li>
      </ul>
      <h3 className="text-2xl font-bold mb-2">Support:</h3>
      <p className="text-lg mb-4">
        If you require assistance with using our job portal or encounter any
        issues, our support team is here to help!
      </p>
      <p className="text-lg mb-4">
        Contact our support team at support@jobportal.com or submit a support
        ticket through our platform.
      </p>
      <h3 className="text-2xl font-bold mb-2">Feedback:</h3>
      <p className="text-lg mb-4">
        We value your feedback and are constantly striving to improve our
        platform. Whether you have suggestions for new features or ways we can
        enhance your experience, we want to hear from you!
      </p>
      <p className="text-lg mb-4">
        Email us at feedback@jobportal.com to share your thoughts and ideas.
      </p>
      <h3 className="text-2xl font-bold mb-2">Business Inquiries:</h3>
      <p className="text-lg">
        For partnership opportunities, advertising inquiries, or other
        business-related matters, please contact our business development team
        at bizdev@jobportal.com.
      </p>
    </div>
  );
};

export default Contact;

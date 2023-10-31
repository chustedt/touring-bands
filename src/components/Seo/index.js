import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, description }) => {
  return (
    // Helmet puts an error in the console that needs to be resolved as it is needed for SEO and accessibility
    <Helmet>
      <meta charSet="utf-8" />
      <title>Ticket Bazaar - {title}</title>
      <meta name="description" content={description} />
      <link
        rel="canonical"
        href={window.location.origin + window.location.pathname}
      />
    </Helmet>
  );
};

export default Seo;

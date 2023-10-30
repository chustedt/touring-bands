import React from "react";
import * as DOMPurify from "dompurify";

function HtmlContent({ htmlContent }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }}
    />
  );
}

export default HtmlContent;

import React from "react";
import PropTypes from "prop-types";

const PageContent = ({ children }) => {
  return (
    <div className="bg-white h-screen overflow-auto">
      <div className=" max-w-screen-2xl m-auto p-4 pt-20">{children}</div>
    </div>
  );
};

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;

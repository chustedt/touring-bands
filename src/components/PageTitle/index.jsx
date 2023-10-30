import React from "react";
import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
  return <h1 className="font-bold text-2xl mb-4">{title}</h1>;
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;

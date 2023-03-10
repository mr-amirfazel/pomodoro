import React from "react";
import PropTypes from "prop-types";

interface FooterProps extends React.PropsWithChildren {}
export const Footer: React.FunctionComponent<FooterProps> = (props) => {
  return <div className="absolute bottom-0 flex justify-center items-center w-full p-4">
    <h6 className="text-sm ">made with &#10084; by <a className="font-bold" target="_blank" href="https://github.com/mr-amirfazel">mr-amirfazel</a></h6>
  </div>;
};
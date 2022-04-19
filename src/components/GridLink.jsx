import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import PropTypes from "prop-types";
import "./GridLink.css";

export default function GridLink({ title, subtitle, className, ...props }) {
  return (
    <Link
      className={clsx(
        "hover:dyte-shadow flex break-words rounded-md border-[1.5px] border-border bg-background-100 p-6 text-text transition hover:border-primary hover:text-text hover:no-underline",
        className,
        "box"
      )}
      {...props}
    >
      <div className="flex flex-1 flex-col">
        {title && <div className="font-medium leading-6">{title}</div>}
        {subtitle && (
          <p className="m-0 mt-2 text-xs text-text-100">{subtitle}</p>
        )}
      </div>
    </Link>
  );
}

GridLink.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

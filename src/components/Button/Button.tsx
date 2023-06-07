import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page??
   */
  primary?: boolean;
  /**
   * Need a custom color, provide a value to set which will change the border and text color?
   */
  outlineColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button Text Content
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  primary,
  size,
  outlineColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "button-color--primary" : "button-color--secondary";
  const buttonClasses = ["button-container", `button-size--${size}`, mode].join(
    " "
  );
  const buttonStyles = {
    borderColor: outlineColor,
    color: outlineColor,
  };

  return (
    <button
      type="button"
      className={buttonClasses}
      style={buttonStyles}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  primary: false,
  size: "medium",
};

import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Defines what type of button it should be. Use primary for main CTA's and others for other use cases
   */
  type?: "primary" | "default" | "dashed" | "link";
  /**
   * Need a custom color, provide a value to set the text color to?
   */
  textColor?: string;
  /**
   * Custom border color
   */
  borderColor?: string;
  /**
   * Provide a custom background color to primary buttons
   */
  backgroundColor?: string;
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
  /**
   * Boolean value to set button to disabled
   */
  disabled?: boolean;
}

export const Button = ({
  type,
  size,
  textColor,
  label,
  disabled,
  borderColor,
  backgroundColor,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled ? "button-disabled" : "";
  const buttonClasses = [
    isDisabled,
    "button-container",
    `button-size--${size}`,
    `button-color--${type}`,
  ].join(" ");
  const buttonStyles = {
    borderColor,
    backgroundColor,
    color: textColor,
  };

  return (
    <button
      type="button"
      className={buttonClasses}
      style={buttonStyles}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  type: "default",
  color: "white",
  size: "medium",
  disabled: false,
};

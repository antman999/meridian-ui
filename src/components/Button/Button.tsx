import React from "react";
import classnames from "classnames";
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
  /**
   * pass a hover color to show focus on the button
   */
  hoverColor?: string;
  /**
   * Use this along a hover color to show a focused text color
   */
  textHoverColor?: string;
}

export const Button = ({
  type = "default",
  size = "medium",
  textColor = type === "primary" ? "white" : "black",
  label,
  disabled,
  borderColor = "#d9d9d9",
  backgroundColor = type === "primary" ? "#f42995" : "transparent",
  hoverColor = type === "primary" ? "#f01e8ecc" : "",
  textHoverColor = type === "primary" ? "white" : "#f42995",
  ...props
}: ButtonProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick && onClick();
  };

  const buttonStyles = {
    borderColor: type === "default" || type === "dashed" ? borderColor : "",
    backgroundColor:
      type === "primary" && (isHovered || isPressed)
        ? hoverColor
        : backgroundColor,
    color: textColor,
    borderStyle: type === "link" ? "" : type === "dashed" ? "dashed" : "solid",
    borderWidth: "2px",
    ...(isHovered && {
      color: textHoverColor,
      borderColor: type !== "primary" && hoverColor,
    }),
  };

  const disabledStyles = disabled
    ? {
        cursor: "not-allowed",
        borderColor: "#d9d9d9",
        color: "rgba(0, 0, 0, .25)",
        backgroundColor: "rgba(0, 0, 0, .04)",
        boxShadow: "none",
      }
    : {};
  const mergedStyles = { ...buttonStyles, ...disabledStyles };

  const buttonClasses = classnames("button-container", `button-size--${size}`);

  return (
    <button
      type="button"
      className={buttonClasses}
      style={mergedStyles}
      disabled={disabled}
      onClick={handleClick}
      aria-disabled={disabled}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  onClick: undefined,
  disabled: false,
};

import styles from "./Button.module.css";


 
export const Button = ({
  variant = "primary",
  size = "medium",
  label = "Button",
  disabled = false,
  icon = null,
  onClick,
  ...props
}) => {
  return (
    <button
      className={[
        styles.button,
        styles[variant],
        styles[size],
        disabled ? styles.disabled : "",
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default Button;

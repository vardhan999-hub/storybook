import styles from "./Input.module.css";


export const Input = ({
  label,
  placeholder = "Type something...",
  type = "text",
  state = "default",
  helperText,
  disabled = false,
  value,
  onChange,
  id,
  ...props
}) => {
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={[styles.wrapper, styles[state], disabled ? styles.disabled : ""].filter(Boolean).join(" ")}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input
          id={inputId}
          type={type}
          className={styles.input}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
      {helperText && (
        <p className={styles.helperText}>{helperText}</p>
      )}
    </div>
  );
};

export default Input;

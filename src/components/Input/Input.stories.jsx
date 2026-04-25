import { Input } from "./Input";

/** @type { import('@storybook/react').Meta } */
const meta = {
  title: "Design System/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A form input field with four states: default, error, success, and disabled. Hard-shadow style stays consistent with the design system's editorial brutalist language.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label displayed above the input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text inside the input",
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "search", "url"],
      description: "HTML input type",
      table: { defaultValue: { summary: "text" } },
    },
    state: {
      control: { type: "radio" },
      options: ["default", "error", "success"],
      description: "Visual validation state",
      table: { defaultValue: { summary: "default" } },
    },
    helperText: {
      control: "text",
      description: "Helper or validation message below the field",
    },
    disabled: {
      control: "boolean",
      description: "Disables the field",
    },
  },
};

export default meta;

export const Default = {
  args: {
    label: "Full Name",
    placeholder: "e.g. Ada Lovelace",
    type: "text",
    state: "default",
    helperText: "",
    disabled: false,
  },
};

export const WithHelperText = {
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    type: "email",
    helperText: "We'll never share your email.",
  },
};

export const ErrorState = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Min. 8 characters",
    state: "error",
    helperText: "Password must be at least 8 characters.",
    value: "abc",
  },
};

export const SuccessState = {
  args: {
    label: "Username",
    placeholder: "@handle",
    state: "success",
    helperText: "This username is available!",
    value: "ada_codes",
  },
};

export const Disabled = {
  args: {
    label: "Account ID",
    value: "USR-00412",
    disabled: true,
    helperText: "This field cannot be edited.",
  },
};

export const PasswordField = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
};

export const FormGroup = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "360px" }}>
      <Input label="Full Name"      placeholder="Ada Lovelace"     state="default" />
      <Input label="Email"          placeholder="you@example.com"  type="email" state="success" helperText="Looks good!" value="ada@code.io" />
      <Input label="Password"       type="password" placeholder="Min. 8 chars" state="error" helperText="Too short." value="abc" />
      <Input label="Referral Code"  value="BETA-2025" disabled helperText="Auto-applied." />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "A realistic form group showing all four states together." },
    },
  },
};

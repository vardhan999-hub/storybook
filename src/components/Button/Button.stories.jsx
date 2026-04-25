import { Button } from "./Button";

/** @type { import('@storybook/react').Meta } */
const meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The primary action element. Comes in four variants, three sizes, and supports an optional leading icon. Built with a bold neo-brutalist aesthetic — hard edges, raw shadows, unapologetic typography.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost", "danger"],
      description: "Visual style of the button",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      description: "Size of the button",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    label: {
      control: "text",
      description: "Button text label",
    },
    disabled: {
      control: "boolean",
      description: "Disables interaction",
    },
    onClick: {
      action: "clicked",
      description: "Click handler",
    },
  },
};

export default meta;


export const Primary = {
  args: {
    variant: "primary",
    size: "medium",
    label: "Get Started",
    disabled: false,
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    size: "medium",
    label: "Learn More",
    disabled: false,
  },
};

export const Ghost = {
  args: {
    variant: "ghost",
    size: "medium",
    label: "Cancel",
    disabled: false,
  },
};

export const Danger = {
  args: {
    variant: "danger",
    size: "medium",
    label: "Delete Account",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    variant: "primary",
    size: "medium",
    label: "Unavailable",
    disabled: true,
  },
};

export const Small = {
  args: {
    variant: "primary",
    size: "small",
    label: "Small",
  },
};

export const Large = {
  args: {
    variant: "primary",
    size: "large",
    label: "Large CTA",
  },
};


export const AllVariants = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
      <Button variant="primary"   label="Primary"   />
      <Button variant="secondary" label="Secondary" />
      <Button variant="ghost"     label="Ghost"     />
      <Button variant="danger"    label="Danger"    />
      <Button variant="primary"   label="Disabled"  disabled />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "All four variants side-by-side for quick visual comparison." },
    },
  },
};


export const AllSizes = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button size="small"  label="Small"  variant="primary" />
      <Button size="medium" label="Medium" variant="primary" />
      <Button size="large"  label="Large"  variant="primary" />
    </div>
  ),
};

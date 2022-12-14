import { InputHTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

export type TextInputRootProps = {
  children: ReactNode;
};

export type TextInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {};

export type TextInputIconProps = {
  children: ReactNode;
};

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full  focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

function TextInputTextField(props: TextInputFieldProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

TextInputTextField.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputTextField,
  Icon: TextInputIcon,
};

import { ReactNode } from "react";

import { Check } from "phosphor-react";

import * as RadixCheckbox from "@radix-ui/react-checkbox";

export type CheckboxProps = RadixCheckbox.CheckboxProps & {};

export function Checkbox(props: CheckboxProps) {
  return (
    <RadixCheckbox.Root
      className="w-6 h-6 p-[2px] bg-gray-800 rounded"
      {...props}
    >
      <RadixCheckbox.Indicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-500" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}

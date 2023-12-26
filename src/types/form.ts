export type Form = {
  sort: number;
  label: string;
  description: string;
  validate: {
    required: boolean;
    pattern: string | undefined;
    immutable: boolean;
    defaultValue?: string;
    options: {
      value: string;
      label: string;
    }[];
  };
  jsonKey: string;
  uiType?: "Input" | "Group" | "Select" | "Ignore";
  icon: string;
  level: number;
  placeholder: string;
  subParameters: Form[];
  conditions: {
    value: string;
    jsonKey: string;
    op: "==" | ">" | "<";
  }[];
  disable?: boolean;
};

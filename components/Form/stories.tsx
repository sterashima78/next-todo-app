import { TextInput, TextInputProps, TextForm } from ".";
import { action } from "@storybook/addon-actions";

export const TextInputTemplate = (args: TextInputProps) => <TextInput {...args} onChange={ action('change') }/>;

export const TextFormTemplate = () => <TextForm onSubmit={ action("submit")}/>;

import { TodoPage } from ".";
import { action } from "@storybook/addon-actions";

export const TodoTemplate = () => <TodoPage onUpdate={action("update")} />;

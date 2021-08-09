import { TodoList, TodoItem, TodoListProp } from ".";
import { TodoItemProp } from ".";
import { action } from "@storybook/addon-actions";

export const TodoTemplate = (args: TodoItemProp) => <TodoItem {...args} onChange={ action('change') }/>;

export const TodoListTemplate = (args: TodoListProp) => <TodoList {...args} onChange={(title) => action(`change: ${title}`) } />;

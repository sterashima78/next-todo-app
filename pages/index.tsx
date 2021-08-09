import Head from "next/head";
import { useState, useEffect } from "react";
import { TodoPage } from "../components/Page/Todo";
import { Todo } from "../domain/Todo";
import { useTodoContext } from "../hooks/useTodoContext";

export default function TodoApp() {
  const [todo, setData] = useState<Todo[] | null>(null);

  const { saveTodo, fetchTodo } = useTodoContext();

  useEffect(() => {
    fetchTodo()
      .then((a) => setData(a))
      .catch(() => setData([]));
  });
  if (todo === null) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TodoPage onUpdate={saveTodo} initialValue={todo} />
      </main>
    </>
  );
}

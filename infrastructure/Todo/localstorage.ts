import { FetchTodo, SaveTodo, Todo } from "../../domain/Todo";

const KEY = "__TODO__";

export const saveTodo: SaveTodo = (v: Todo[]) =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        localStorage.setItem(KEY, JSON.stringify(v));
        resolve();
      }, 100);
    } catch (error) {
      reject(error);
    }
  });

export const fetchTodo: FetchTodo = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (typeof window === "undefined") return resolve([]);
      const v = localStorage.getItem(KEY);
      if (!v) return resolve([]);
      try {
        return resolve(JSON.parse(v));
      } catch (e) {
        console.error(e);
        return resolve([]);
      }
    }, 100);
  });

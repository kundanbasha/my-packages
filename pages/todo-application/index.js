import Head from "next/head";
import Filters from "@/components/filters";
import TodoList from "@/components/todo-list";
import AddNewTodo from "@/components/todo-list/add-new-todo";
import TodoStats from "@/components/stats";
export default function Home() {
  return (
    <>
      <Head>
        <title>Todo Application</title>
        <meta name="description" content="Basic Todo Application" />
      </Head>
      <main>
        <TodoStats />
        <br />
        <Filters />
        <br />
        <AddNewTodo />
        <br />
        <br />
        <TodoList />
      </main>
    </>
  );
}

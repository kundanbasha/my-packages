import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Applications</title>
        <meta
          name="description"
          content="Practicing different technologies and libraries"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul>
          <ApplicationCard href="todo-application">
            Todo Application
          </ApplicationCard>
          <ApplicationCard href="chat-application">
            Chat Application
          </ApplicationCard>
          <ApplicationCard href="quotes-application">
            Quotes Application
          </ApplicationCard>
        </ul>
      </main>
    </>
  );
}

const ApplicationCard = ({ href, children }) => {
  return (
    <Link href={href}>
      <li
        style={{
          padding: "12px",
          border: "1px solid #ddd",
          width: "fit-content",
          margin: "8px",
        }}
      >
        {children}
      </li>
    </Link>
  );
};

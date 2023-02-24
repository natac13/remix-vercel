import type { DataFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: DataFunctionArgs) {
  return json({ test: "Hello world" });
}

export default function () {
  const loaderData = useLoaderData<typeof loader>();

  const { test } = loaderData;

  return (
    <div>
      <h1>About</h1>
      <p>{test}</p>
    </div>
  );
}

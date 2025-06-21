export { default } from "../register";

import { getSession } from "next-auth/react";

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return { redirect: { destination: "/login", permanent: false } };
  }
  return { props: {} };
}

import type { MetaFunction } from "@remix-run/node";
import { Banner } from "~/features/Banner";

export const meta: MetaFunction = () => {
  return [{ title: "Home | RTR" }];
};

const HomePage = () => {
  return (
    <>
      <Banner title="React Template Remix" />
    </>
  );
};

export default HomePage;

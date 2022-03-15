import { LinksFunction } from "remix";
import Navbar from "~/components/Navbar";

import stylesUrl from "~/styles/index/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexPage() {
  return (
    <>
      <Navbar />
    </>
  );
}

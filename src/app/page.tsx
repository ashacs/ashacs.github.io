import "./index.css";
import { Home } from "src/components/Home";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <Home />;
}

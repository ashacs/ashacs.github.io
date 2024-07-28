import { Maintenance } from "src/components/Maintenance";
import "./index.css";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <Maintenance />;
}

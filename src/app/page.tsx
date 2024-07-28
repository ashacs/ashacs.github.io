import { MyResume } from "src/components/MyResume";
import "./index.css";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <MyResume />;
}

import { memo } from "react";

function Content() {
  console.log("re-render");
  return <h1>Hello anh em</h1>;
}
export default memo(Content);

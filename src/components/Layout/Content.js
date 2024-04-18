import * as React from "react";
import TextEffext from "./Decorators/TextEffect";
import Center from "./Templates/Center";

export default function Content() {
  return (
    <>
      {/* The hello */}        
        <TextEffext />
      {/* The Container Element */}
        <Center />
      </>
  );
}

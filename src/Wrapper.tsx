import { PropsWithChildren } from "react";

type WrapperProps = PropsWithChildren<{
  caption: string;
}>

export default function Wrapper({ children, caption }: WrapperProps) {
  return <figure>
    {children}
    <figcaption>{caption}</figcaption>
  </figure>
};

import { ComponentPropsWithoutRef, ReactNode } from "react";

//! Bulding Wrapper Component That Returns Different JSX
//* Method-1 Using Discriminated Union - Just like Input Component

//* Method-2 Using Type Predicates

type ButtonProps = {
  children: ReactNode;
  href?: never;
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  children: ReactNode;
  href?: string;
} & ComponentPropsWithoutRef<"a">;

//> Type Predicate is used as a return type of a function that returns boolean
function isAnchor(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}
const Button = (props: ButtonProps | AnchorProps) => {
  const { children } = props;
  if (isAnchor(props)) {
    return (
      <a className="button" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

export default Button;

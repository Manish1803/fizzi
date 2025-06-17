import React from "react";
import clsx from "clsx";

type BoundedProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithRef<T>, "as" | "className" | "children">;

export function Bounded<T extends React.ElementType = "section">({
  as,
  className,
  children,
  ...restProps
}: BoundedProps<T>) {
  const Component = as || "section";

  return (
    <Component
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...(restProps as React.ComponentPropsWithRef<T>)}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Component>
  );
}

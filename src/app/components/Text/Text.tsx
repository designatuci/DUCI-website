import clsx from "clsx";

import cn from "./Text.module.scss";
import { ReactNode } from "react";

export interface TextProps extends Pick<HTMLDivElement, "className"> {
  children?: ReactNode;
  size?: string;
  color?: string;
  icon?: string;
}

export const Text = ({
  children,
  className,
  size,
  color,
  icon,
  ...props
}: TextProps) => (
  <div
    className={clsx(
      cn.container,
      size && cn[size],
      color && cn[color],
      icon === "right" && cn.pagelink,
      className
    )}
    {...props}
  >
    {children}
  </div>
);

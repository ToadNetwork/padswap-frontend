import React, { ReactNode } from "react";
import { PushedProps } from "../types";
interface Props extends PushedProps {
    label: string;
    initialOpenState?: boolean;
    className?: string;
    children: ReactNode;
    isActive?: boolean;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;

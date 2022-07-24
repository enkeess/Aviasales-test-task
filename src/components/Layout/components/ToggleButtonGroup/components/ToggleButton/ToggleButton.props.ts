import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ToggleButtonProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: ReactNode;
    isActive?: boolean;
}

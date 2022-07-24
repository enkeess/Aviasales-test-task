import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface FilterItemProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: ReactNode;
    isActive?: boolean;
}

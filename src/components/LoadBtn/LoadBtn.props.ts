import { DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface LoadBtnProps extends DetailedHTMLProps< HTMLAttributes <HTMLButtonElement>,  HTMLButtonElement>{
	children: ReactNode;
	onClick: ()=>void;
}
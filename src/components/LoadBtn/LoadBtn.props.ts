import { DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface LoadBtnProps extends DetailedHTMLProps< HTMLAttributes <HTMLButtonElement>,  HTMLButtonElement>{
	children: ReactNode;
	// searchId: string;
	updateNum: ()=>void;
}
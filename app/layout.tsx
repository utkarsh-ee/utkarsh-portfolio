import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'Utkarsh — Electronic Systems',description:'Engineering portfolio of Utkarsh, focused on embedded systems, electronics and hardware-software integration.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

import type { Metadata } from 'next';
import './globals.css';
import './design.css';
export const metadata:Metadata={title:'بطاقة مزايا لطف',description:'بطاقتك إلى مزايا شركاء لطف',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body>{children}</body></html>}

/*
 * @Description: 
 * @Date: 2024-06-27 17:11:55
 * @LastEditTime: 2024-09-12 16:00:09
 */
import SideNav from '@/app/ui/dashboard/sidenav';
import '@/app/ui/global.css';

// export const experimental_ppr = true;
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
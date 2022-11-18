import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import useAuth from 'src/auth/useAuth';

export default function RootLayout({ children }: { children: ReactNode }) {
  const { logout, authenticated } = useAuth();

  return (
    <section>
      <div
        className={`${
          authenticated ? 'bg-gray-300' : 'bg-teal-500'
        } max-w-screen-2xl ${
          authenticated ? 'h-11' : 'h-11'
        } mx-auto text-zinc-800`}
      >
        <nav
          className={`flex justify-between flex-row ${
            authenticated ? 'h-10' : 'h-full'
          } mx-2 items-center`}
        >
          <Link href="/">
            <Image
              src="/android-icon-144x144.png"
              alt="logo"
              width={35}
              height={35}
            />
          </Link>
          <div>
            {authenticated ? (
              <Link href="/logout" onClick={logout}>
                Logout
              </Link>
            ) : (
              <>
                <Link href="/auth" className="text-gray-300 font-thin">
                  Signup
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
      {/* shared ui here */}
      <main style={{ minHeight: 'calc(100vh - 44px)' }}>{children}</main>
    </section>
  );
}

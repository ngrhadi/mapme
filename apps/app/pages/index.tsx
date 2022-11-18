import { Fragment, useState } from 'react';
import { Layout, Page, Text } from '@vercel/examples-ui';
import { Lay } from '@ngrhadi/ui';
import RootLayout from 'src/components/layout';
import useAuth from 'src/auth/useAuth';
import Link from 'next/link';
import Image from 'next/image';

export default function Index() {
  const { logout, authenticated } = useAuth();
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <RootLayout>
      {authenticated ? (
        <Text variant="h1" className="mb-6 flex flex-col justify-center">
          <Lay />
          <button className="btn bg-gray-400" onClick={handleShow}>
            This is {''}
            {isShow ? 'Turbo Repo' : 'LoL'}
          </button>
          <br />
        </Text>
      ) : (
        <Fragment>
          <div
            style={{ minHeight: 'calc(100vh - 44px)' }}
            className="flex flex-col justify-center bg-gray-300 h-2"
          >
            <div className="absolute bg-teal-500 w-screen h-4/6 -z-0 top-11">
              <Image
                className="translate-x-36 translate-y-14"
                src="/logo-main.png"
                alt="main-logo"
                width={100}
                height={100}
              />
            </div>
            <form
              className="flex flex-col justify-center bg-gray-300 h-0 mx-4 z-10"
              action="/login"
              method="post"
            >
              <input
                type="text"
                className="form-control my-2 p-2 rounded-lg"
                placeholder="User Name"
              ></input>
              <input
                type="password"
                className="form-control my-2 p-2 rounded-lg"
                placeholder="Password"
              ></input>
              <Link href="/register">
                <small className="text-cyan-light pl-3">
                  🧐 dont have account, register here..!
                </small>
              </Link>
              <div className="flex mt-10 flex-row justify-around w-full">
                <button
                  type="submit"
                  className="btn bg-teal-500 border-zinc-700 border-solid border-4 text-zinc-700 hover:text-yellow mb-2 p-2 w-2/6 rounded-2xl"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn bg-teal-500 border-zinc-700 border-solid border-4 text-zinc-700 hover:text-yellow mb-2 p-2 w-2/6 rounded-2xl"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="bg-zinc-700 z-0 bottom-0 w-screen absolute h-1/3">
              <h1 className="pt-10 flex justify-center">MAP HERE</h1>
            </div>
          </div>
        </Fragment>
      )}
    </RootLayout>
  );
}

Index.Layout = Layout;

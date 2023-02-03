import { toast } from "react-toastify";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const NavComponent = () => {
  const session = useSession();

  return (
    <nav className="sticky top-0 z-10 h-16 w-full bg-white p-4">
      <ol className="flex h-full flex-row items-center justify-between">
        <li>
          <Image
            src="/assets/logo.svg"
            alt="Calendfree logo"
            width={200}
            height={60}
            className=""
          />
        </li>
        <li className="flex flex-row">
          <button
            className="rounded bg-black px-4 py-2 text-white"
            onClick={() => {
              (async () => {
                await signOut({
                  callbackUrl: window.location.origin.toString(),
                });
              })().catch((err: Error) => {
                toast.error(err.message);
              });
            }}
          >
            Sign out
          </button>
          <Image
            src={session?.data?.user?.image ?? "/images/default-user.png"}
            alt="Picture of the author"
            className="rounded-full border-2 border-black"
            width={48}
            height={48}
          />
        </li>
      </ol>
    </nav>
  );
};

export default NavComponent;

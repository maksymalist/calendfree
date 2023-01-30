import { type NextPage } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "../utils/api";
import HeadComponent from "../../components/Head";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <HeadComponent
        title="Profile"
        description="This is the profile component"
      />
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
        <section className="bg-blueGray-50 pt-16">
          <div className="mx-auto w-full px-4 lg:w-4/12">
            <div className="relative mt-16 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex w-full justify-center px-4">
                    <img
                      alt="..."
                      src="https://api.dicebear.com/5.x/lorelei/svg"
                      className="mt-[-50px] w-24 rounded-full bg-gradient-to-b from-[#80FF72] to-[#7EE8FA]"
                    />
                  </div>
                  <h1 className="text-blueGray-700 mt-4 text-4xl font-semibold leading-normal">
                    Jenna Stones
                  </h1>
                </div>
                <div className="mt-6 flex w-full flex-col items-center text-center">
                  <h3 className="text-blueGray-700 mb-2 ml-4 mr-4 max-w-[250px] text-center text-sm leading-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    quis eligendi repellendus inventore. Illo earum veritatis
                  </h3>
                  <div className="mt-4 flex w-full justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-map-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M18 6l0 .01"></path>
                      <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"></path>
                      <path d="M10.5 4.75l-1.5 -.75l-6 3l0 13l6 -3l6 3l6 -3l0 -2"></path>
                      <path d="M9 4l0 13"></path>
                      <path d="M15 15l0 5"></path>
                    </svg>
                    <span className="text-blueGray-600 ml-2 text-sm font-semibold">
                      Los Angeles, California
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="mt-4 flex w-full items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-briefcase"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                        <path d="M12 12l0 .01"></path>
                        <path d="M3 13a20 20 0 0 0 18 0"></path>
                      </svg>
                      <span className="text-blueGray-600 ml-2 text-sm">
                        Solution Manager - Creative Tim Officer
                      </span>
                    </div>
                    <div className="mt-4 flex w-full items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-school"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
                        <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
                      </svg>
                      <span className="text-blueGray-600 ml-2 text-sm">
                        University of Computer Science
                      </span>
                    </div>
                    <div className="mt-4 flex w-full items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-link"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
                        <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
                      </svg>
                      <span className="text-blueGray-600 ml-2 text-sm">
                        https://www.creative-tim.com
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-blueGray-200 mt-10 border-t py-10 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-9/12">
                      <p className="text-blueGray-700 mb-4 text-lg leading-relaxed">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a
                        href="javascript:void(0);"
                        className="font-normal text-pink-500"
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

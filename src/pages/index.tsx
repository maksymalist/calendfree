import { type GetServerSidePropsContext, type NextPage } from "next";
import { type Provider } from "next-auth/providers";
import { getProviders, signIn, getSession } from "next-auth/react";
import Image from "next/image";
import { toast } from "react-toastify";

type Props = {
  providers: Provider[];
};

const Home: NextPage<Props> = ({ providers }) => {
  return (
    <main className="bg-origin-padding-0 flex min-h-screen flex-col items-start justify-start bg-white">
      <section className="flex w-full justify-center">
        <Image
          src="/assets/logo.svg"
          alt="Calendfree logo"
          width={350}
          height={200}
          className="h-[100px] w-[250px] md:h-[150px] md:w-[300px] lg:h-[200px] lg:w-[350px]"
        />
      </section>
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center bg-white px-4 ">
            <div className="flex flex-col items-center justify-center px-4">
              <h1 className="text-6xl font-medium">
                Join <span className="font-extrabold">Calendfree</span>
              </h1>
              <div>
                <div className="mt-8 mb-8 flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-[36px] w-[36px] rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-[36px] w-[36px] rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-[36px] w-[36px] rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-[36px] w-[36px] rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-[36px] w-[36px] rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-[36px] w-[36px] rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-[36px] w-[36px] rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-3 text-xl font-medium">
                <h4>
                  Join these and other{" "}
                  <span className="font-extrabold text-blue-600">
                    4600+ Users
                  </span>{" "}
                  now!
                </h4>
              </div>
              <div className="m-4 w-full max-w-[350px]">
                <div className="mt-3 space-y-3">
                  {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                      <button
                        type="button"
                        className="relative inline-flex w-full items-center justify-center rounded-md border-2 border-gray-200 bg-slate-900 px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                        onClick={() => {
                          (async () => {
                            await signIn(provider.id);
                          })().catch((err: Error) => {
                            toast.error(err.message);
                          });
                        }}
                      >
                        <div className="absolute inset-y-0 left-0 p-4">
                          {provider.id === "google" ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                                fill="white"
                              />
                              <path
                                d="M11.9997 23.0001C14.9697 23.0001 17.4597 22.0201 19.2797 20.3401L15.7097 17.5701C14.7297 18.2301 13.4797 18.6301 11.9997 18.6301C9.13969 18.6301 6.70969 16.7001 5.83969 14.1001H2.17969V16.9401C3.98969 20.5301 7.69969 23.0001 11.9997 23.0001Z"
                                fill="#FFFAF5"
                              />
                              <path
                                d="M5.84 14.0898C5.62 13.4298 5.49 12.7298 5.49 11.9998C5.49 11.2698 5.62 10.5698 5.84 9.90982V7.06982H2.18C1.43 8.54982 1 10.2198 1 11.9998C1 13.7798 1.43 15.4498 2.18 16.9298L5.03 14.7098L5.84 14.0898Z"
                                fill="white"
                              />
                              <path
                                d="M11.9997 5.38C13.6197 5.38 15.0597 5.94 16.2097 7.02L19.3597 3.87C17.4497 2.09 14.9697 1 11.9997 1C7.69969 1 3.98969 3.47 2.17969 7.07L5.83969 9.91C6.70969 7.31 9.13969 5.38 11.9997 5.38Z"
                                fill="white"
                              />
                            </svg>
                          ) : provider.id === "discord" ? (
                            <svg
                              width="32"
                              height="24"
                              viewBox="0 0 32 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_302_130)">
                                <path
                                  d="M26.8244 2.00996C24.7439 1.05745 22.5475 0.381713 20.2914 0C19.9827 0.551901 19.7033 1.11973 19.4545 1.70112C17.0513 1.33898 14.6074 1.33898 12.2042 1.70112C11.9553 1.11979 11.676 0.551968 11.3673 0C9.10978 0.384937 6.91197 1.06228 4.82937 2.01494C0.69487 8.132 -0.425927 14.0971 0.134472 19.9776C2.55574 21.7665 5.26582 23.127 8.14693 24C8.79566 23.1275 9.36972 22.2018 9.86299 21.2329C8.92609 20.883 8.02181 20.4512 7.16062 19.9427C7.38727 19.7783 7.60894 19.609 7.82314 19.4446C10.329 20.623 13.064 21.234 15.8331 21.234C18.6022 21.234 21.3372 20.623 23.8431 19.4446C24.0598 19.6214 24.2814 19.7908 24.5056 19.9427C23.6427 20.4521 22.7368 20.8846 21.7982 21.2354C22.2909 22.2039 22.865 23.1287 23.5143 24C26.3979 23.1305 29.11 21.7707 31.5317 19.9801C32.1893 13.1606 30.4084 7.25031 26.8244 2.00996ZM10.5728 16.3611C9.01119 16.3611 7.72102 14.944 7.72102 13.2005C7.72102 11.457 8.96635 10.0274 10.5678 10.0274C12.1693 10.0274 13.4495 11.457 13.4221 13.2005C13.3947 14.944 12.1644 16.3611 10.5728 16.3611ZM21.0934 16.3611C19.5292 16.3611 18.2441 14.944 18.2441 13.2005C18.2441 11.457 19.4894 10.0274 21.0934 10.0274C22.6974 10.0274 23.9676 11.457 23.9402 13.2005C23.9128 14.944 22.6849 16.3611 21.0934 16.3611Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_302_130">
                                  <rect
                                    width="31.6663"
                                    height="24"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          ) : null}
                        </div>
                        Sign up with {provider.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start rounded-md bg-gray-50 p-8 shadow-sm">
            <h3 className="text-3xl font-medium">
              Grow your online business 💸 <br /> quickly ⚡️ with Calendfree
            </h3>
            <h3 className="my-8 text-xl font-medium text-cyan-900">
              {"//////////////////////////////////////////"}
            </h3>
            <div className="my-4">
              <div className="flex flex-row items-start">
                <div className="px-4">
                  <img
                    width={64}
                    height={64}
                    draggable={false}
                    src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/1x/external-free-sale-and-shopping-xnimrodx-lineal-color-xnimrodx.png"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium">
                    <span className="font-bold">Proven success rate </span>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lastrum voluptates quia repudiandae. Lorem ipsum dolor sit,
                    animi.
                  </h3>
                </div>
              </div>
            </div>
            <div className="my-4">
              <div className="flex flex-row items-start">
                <div className="px-4">
                  <img
                    width={64}
                    height={64}
                    draggable={false}
                    src="https://img.icons8.com/color-glass/1x/group.png"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium">
                    <span className="font-bold">Proven success rate </span>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lastrum voluptates quia repudiandae. Lorem ipsum dolor sit,
                    animi.
                  </h3>
                </div>
              </div>
            </div>
            <div className="my-4">
              <div className="flex flex-row items-start">
                <div className="px-4">
                  <img
                    width={64}
                    height={64}
                    draggable={false}
                    src="https://img.icons8.com/cute-clipart/1x/tear-off-calendar.png"
                  />
                </div>
                <div className="my-4">
                  <h3 className="text-xl font-medium">
                    <span className="font-bold">Proven success rate </span>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lastrum voluptates quia repudiandae. Lorem ipsum dolor sit,
                    animi.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;

  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: `/profile/${session.user.id}`,
        permanent: false,
      },
    };
  }

  const providers = await getProviders();
  return {
    props: { providers },
  };
}

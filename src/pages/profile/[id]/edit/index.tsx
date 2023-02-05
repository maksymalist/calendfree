import {
  type GetServerSidePropsContext,
  type NextPage,
  type GetServerSideProps,
} from "next";
import Image from "next/image";
import HeadComponent from "../../../../../components/Head";
import Calendar from "../../../../../components/Calendar";
import { Menu, Transition } from "@headlessui/react";
import { FormEvent, Fragment } from "react";
import { api } from "../../../../utils/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSession } from "next-auth/react";

const Profile: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  const id: string = query?.id ? query?.id.toString() : "";
  const userQuery = api.user.get.useQuery({
    id,
  });

  const update_user = api.user.update.useMutation();

  const handle_save_changes = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const values = new FormData(e.target as HTMLFormElement).entries();
    const fields = Object.fromEntries(values);

    if (fields?.website) {
      if (
        !fields?.website?.toString().startsWith("https") ||
        !fields?.website?.toString().startsWith("http")
      ) {
        toast.error("Website must start with https or http");
        return;
      }
    }

    update_user.mutate({
      id: id,
      name: fields?.name?.toString(),
      bio: fields?.bio?.toString(),
      education: fields?.education?.toString(),
      job: fields?.job?.toString(),
      location: fields?.location?.toString(),
      website: fields?.website?.toString(),
    });

    await router.push(`/profile/${id}`);
  };

  return (
    <>
      <HeadComponent
        title={`Profile | ${userQuery.data?.user?.name || "User"}`}
        description="This is the profile component"
      />
      <main className="bg-origin-padding-0 flex min-h-screen flex-wrap items-start justify-center bg-slate-100 bg-dotted-pattern">
        <section className="mx-10 mt-20 w-full rounded-md bg-white p-4 px-6 pb-12 shadow-md lg:w-[350px]">
          <form onSubmit={handle_save_changes}>
            <div className="flex w-full flex-row justify-end">
              <button
                className="flex flex-row items-center rounded-md border-2 border-green-400 p-1 px-4  text-green-400 transition-all hover:bg-green-400 hover:text-white"
                type="submit"
              >
                <span className="mr-1 ">save </span>
              </button>
            </div>
            <div className="px-6">
              <div className="flex w-full flex-col items-center">
                <Image
                  alt="pfp"
                  src={
                    userQuery.data?.user?.image ||
                    "https://api.dicebear.com/5.x/lorelei/svg"
                  }
                  width={100}
                  height={100}
                  className="mt-[-95px] w-24 rounded-full border-4 border-white"
                />
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="mt-[-30px] ml-[70px] flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-telegram"
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
                        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="justify-left absolute right-0 mt-2 flex w-64 origin-top-right flex-col divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className="mx-2 mb-2 flex flex-row items-center rounded-md p-4 hover:bg-black hover:text-white hover:text-white"
                            onClick={() => {
                              (async () => {
                                await navigator.clipboard.writeText(
                                  userQuery.data?.user?.phone_number
                                    ? userQuery.data?.user?.phone_number
                                    : ""
                                );
                                toast.success("copied to clipboard ✅");
                              })().catch((err: Error) => {
                                toast.error("error copying to clipboard");
                              });
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-mail mr-2"
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
                              <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                              <path d="M3 7l9 6l9 -6"></path>
                            </svg>
                            <span className="w-[200px] cursor-pointer overflow-hidden text-ellipsis">
                              {userQuery.data?.user?.email
                                ? userQuery.data?.user?.email
                                : "xxxx@xxxxx.xxxx"}
                            </span>
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className="mx-2 mb-2 flex flex-row items-center rounded-md p-4 hover:bg-black hover:text-white"
                            onClick={() => {
                              (async () => {
                                await navigator.clipboard.writeText(
                                  userQuery.data?.user?.phone_number
                                    ? userQuery.data?.user?.phone_number
                                    : ""
                                );
                                toast.success("copied to clipboard ✅");
                              })().catch((err: Error) => {
                                toast.error("error copying to clipboard");
                              });
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-phone mr-2"
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
                              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                            </svg>
                            <span className="w-[200px] cursor-pointer overflow-hidden text-ellipsis">
                              {userQuery.data?.user?.phone_number
                                ? userQuery.data?.user?.phone_number
                                : "x xxx xxx xxxx"}
                            </span>
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="justify-cente flex flex-col">
                <input
                  name="name"
                  className="text-blueGray-700 mt-4 rounded-md border border-slate-400 text-center text-4xl font-semibold leading-normal hover:border-slate-800"
                  defaultValue={userQuery.data?.user?.name || ""}
                />
              </div>
              <div className="mt-6 flex w-full flex-col items-center border-t border-slate-200 text-center">
                {userQuery.data?.user?.bio ? (
                  <textarea
                    name="bio"
                    className="mt-4 w-full rounded-md border border-slate-200 p-4 text-black "
                    placeholder="I am bob, I like to ski ⛷️ "
                    defaultValue={userQuery.data?.user?.bio}
                  />
                ) : (
                  <textarea
                    name="bio"
                    className="mt-4 w-full rounded-md border border-slate-200 p-4 text-black "
                    placeholder="I am bob, I like to ski ⛷️ "
                  />
                )}
                <div className="mt-4 flex w-full justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-map-2"
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
                  <input
                    className="text-blueGray-600 ml-2 rounded-md border border-slate-400 px-2 text-sm font-semibold"
                    name="location"
                    defaultValue={
                      userQuery.data?.user?.location
                        ? userQuery.data?.user?.location
                        : "Unknown Location"
                    }
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className="mt-4 flex w-full items-center justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-briefcase"
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
                      <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                      <path d="M12 12l0 .01"></path>
                      <path d="M3 13a20 20 0 0 0 18 0"></path>
                    </svg>
                    <input
                      className="text-blueGray-600 ml-2 rounded-md border border-slate-400 px-2 text-sm font-semibold"
                      name="job"
                      defaultValue={
                        userQuery.data?.user?.job
                          ? userQuery.data?.user?.job
                          : "x xxx xxx xxxx"
                      }
                    />
                  </div>
                  <div className="mt-4 flex w-full items-center justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-school"
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
                      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
                      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
                    </svg>
                    <input
                      className="text-blueGray-600 ml-2 rounded-md border border-slate-400 px-2 text-sm font-semibold"
                      name="education"
                      defaultValue={
                        userQuery.data?.user?.education
                          ? userQuery.data?.user?.education
                          : "x xxx xxx xxxx"
                      }
                    />
                  </div>
                  <div className="mt-4 flex w-full items-center justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-link"
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
                      <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
                      <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
                    </svg>
                    <input
                      className="text-blueGray-600 ml-2 rounded-md border border-slate-400 px-2 text-sm font-semibold"
                      name="website"
                      defaultValue={
                        userQuery.data?.user?.website
                          ? userQuery.data?.user?.website
                          : "x xxx xxx xxxx"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
        <section className="mx-10 mt-10 w-full rounded-md bg-white p-4 px-6 shadow-md lg:w-[400px]">
          <div className="p-4 text-center">
            <Calendar />
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const query = context.query;

  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (session.user.id !== query?.id) {
    return {
      redirect: {
        destination: `/profile/${query?.id?.toString() || ""}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

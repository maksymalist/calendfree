import Head from "next/head";

type Props = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const HeadComponent = (props: Props) => {
  return (
    <Head>
      <title>{props?.title}</title>
      <meta name="description" content={props?.title} />
      <link rel="icon" href="/favicon.ico" />
      {props?.children}
    </Head>
  );
};

export default HeadComponent;

import type { NextPage } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "@/components/layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Pokemon app">
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          Button
        </Button>
      </div>
    </Layout>
  );
};

export default Home;

import type { NextPage } from "next";
import { Button } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Button
      </Button>
    </div>
  );
};

export default Home;

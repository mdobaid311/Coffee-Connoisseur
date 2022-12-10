import { useRouter } from "next/router";
import React from "react";

const CoffeeStore = () => {
  const router = useRouter();
  return <div>Coffee Shop {router.query.id}</div>;
};

export default CoffeeStore;

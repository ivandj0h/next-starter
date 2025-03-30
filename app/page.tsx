"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useAction, useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const storeUser = useMutation(api.users.store);

  const upgrade = useAction(api.stripe.pay);
  const router = useRouter();

  useEffect(() => {
    storeUser({});
  });

  const handleBuy = async () => {
    const url = await upgrade({});
    if (!url) return;
    router.push(url);
  };

  return (
    <main className="bg-green-500 h-full">
      Hello world
      <Button onClick={handleBuy}>Buy</Button>
    </main>
  );
}

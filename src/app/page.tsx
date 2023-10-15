"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <div
        className={cn(
          "bg-red-500 text-center flex justify-center gap-2 text-white font-bold",
          { "text-black": count >= 5 && count < 7 },
          [count === 3 && "text-green-500"]
        )}
      >
        {count}
        <button
          className={
            count === 3
              ? "text-green-500"
              : count === 5
              ? "text-black"
              : "text-yellow-400"
          }
          onClick={() => setCount(count + 1)}
        >
          add 1
        </button>
      </div>
    </main>
  );
}

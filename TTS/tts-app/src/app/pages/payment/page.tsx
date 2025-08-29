"use client";

import Payment from "@/app/components/Payment";
import { use } from "react";

export default function PaymentPage({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const params = use(searchParams);
  return (
    <div className="p-6">
      <Payment />
      {params.plan && (
        <p className="mt-4 text-lg font-semibold">
          Selected Plan: {params.plan}
        </p>
      )}
    </div>
  );
}


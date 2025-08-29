import { NextRequest, NextResponse } from "next/server";
import supabase from "../../../../supabase/supabase";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  console.log("Confirm token:", token);

  // Use maybeSingle() to avoid throwing
  const { data: existing, error: fetchError } = await supabase
    .from("donations")
    .select("*")
    .eq("token", token)
    .maybeSingle();

  console.log("Fetched donation row:", existing, "Fetch error:", fetchError);

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  if (!existing) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 404 });
  }

  // Update only if not verified
  if (!existing.verified) {
    const { data: updated, error: updateError } = await supabase
      .from("donations")
      .update({ verified: true })
      .eq("token", token)
      .select();

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }
  }

  // Redirect to donate page
  const redirectUrl = new URL("/pages/donate", req.nextUrl.origin);
  return NextResponse.redirect(redirectUrl);
}

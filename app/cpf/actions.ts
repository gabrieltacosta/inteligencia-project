"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleLogout() {
  (await cookies()).delete("access_token");
  redirect("/login");
}

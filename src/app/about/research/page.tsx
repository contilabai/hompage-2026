import { redirect } from "next/navigation";

export default function ResearchRedirect() {
  redirect("/about?tab=research");
}

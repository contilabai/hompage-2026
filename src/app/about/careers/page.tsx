import { redirect } from "next/navigation";

export default function CareersRedirect() {
  redirect("/contact?tab=careers");
}

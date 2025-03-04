// @ts-check
import config from "@/config.js";
import { redirect } from "next/navigation";

export default function Page() {
	redirect(`https://myanimelist.net/profile/${config.myanimelist.username}`);
}
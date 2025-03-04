// @ts-check
"use client";
import Backdrop from "@/components/Backdrop";
import Header from "@/components/Header";
import Activity from "@/components/Music";
import Repositories from "@/components/Repositories";
import SplashScreen from "@/components/SplashScreen.jsx";
import Technologies from "@/components/Technologies";
import config from "@/config";
import { stringify } from "@/functions/general";
import useSocial from "@/hooks/useSocial.js";
import React from "react";

export default function Page() {
	const { data, isPending } = useSocial();
	if (typeof isPending === "boolean" && isPending == true) return <SplashScreen />;

	return (
		<React.Fragment>
			<Backdrop />
			<Header />

			<div className="mx-auto w-full max-w-4xl lg:px-8 mt-20 relative">
				<h2 className="text-4xl font-semibold">{data?.discord?.discord_user.global_name}</h2>
				<h3 className="text-4xl font-semibold text-[#a1a1aa]">{config.badge}</h3>
				<p className="text-[#a1a1aa] text-sm mt-2 max-w-2xl">{stringify(config.biography)}</p>
				<p className="text-[#a1a1aa] text-sm mt-3 max-w-2xl">{stringify(config.description)}</p>

				<Activity />

				<Repositories />
				<Technologies />
			</div>
		</React.Fragment>
	);
}

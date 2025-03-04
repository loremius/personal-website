// @ts-check
import "@/app/assets/styles/globals.css";
import Providers from "@/components/Providers.jsx";
import config from "@/config.js";
import { Inter } from "next/font/google";
import React from "react";

/** @type {import("next").Metadata} */
export const metadata = {
	title: `${config.github.username} — Self-Taught Developer`,
	description: config.biography.replace(/[*]+/g, ""),
	openGraph: {
		title: `${config.github.username} — Self-Taught Developer`,
		description: config.biography.replace(/[*]+/g, ""),
		url: "https://ryokacchi.me/",
		locale: "en_US",
		images: {
			url: "/favicon.ico",
			alt: `${config.github.username} — Self-Taught Developer`
		},
		type: "website",
	},
};

/** @type {import("next").Viewport} */
export const viewport = {
  themeColor: "#0c0c0e",
}

const InterFont = Inter({
	subsets: ["latin"],
});

/** @param {{ children: React.ReactNode; }} args */
export default function Layout({ children }) {
	return (
		<html lang="en" translate="no" className="dark">
			<body className={`${InterFont.className} ${InterFont.style} px-5 sm:px-0`} suppressHydrationWarning={true}>
				<Providers>
					<div className="flex w-full h-full min-h-full">
						<div className="relative flex w-full h-full flex-col">
							{children}
						</div>
					</div>
					<div className="pointer-events-none bg-white dark:bg-black fixed bottom-0 left-0 h-28 [mask-image:linear-gradient(transparent,#000000)] w-full" />
				</Providers>
			</body>
		</html>
	);
}

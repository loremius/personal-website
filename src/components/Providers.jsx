// @ts-check
"use client";
import ReactLenis from "@studio-freight/react-lenis";
import { Analytics } from "@vercel/analytics/react";

export default function Providers({ children }) {
	return (
		<ReactLenis root={true}>
			{children}
			<Analytics />
		</ReactLenis>
	);
}
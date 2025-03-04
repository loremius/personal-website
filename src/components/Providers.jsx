// @ts-check
"use client";
import ReactLenis from "@studio-freight/react-lenis";

export default function Providers({ children }) {
	return (
		<ReactLenis root={true}>
			{children}
		</ReactLenis>
	);
}
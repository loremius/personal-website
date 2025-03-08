// @ts-check
"use client";
import ReactLenis from "@studio-freight/react-lenis";
import { Analytics } from "@vercel/analytics/react";
import { EmojiProvider } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";

export default function Providers({ children }) {
	return (
		<ReactLenis root={true}>
			<EmojiProvider data={emojiData}>
				{children}
				<Analytics />
			</EmojiProvider>
		</ReactLenis>
	);
}
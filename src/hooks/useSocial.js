// @ts-check
import config from "@/config.js";
import React, { useEffect, useState } from "react";

/**
 * @typedef {{
 * discord: import("@/jsdoc").LanyardData;
 * github: import("@/jsdoc").GitHubUser & { repositories: (import("@/jsdoc").GitHubRepository & { pinned: boolean })[] }
 * }} Social
 */

export default function useSocial() {
	/** @type {[Social, React.Dispatch<Social>]} */
	const [data, setData] = useState(null);
	const [isPending, setPending] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setPending(true);
			/** @type {import("@/jsdoc").LanyardData} */
			const discord = (await (await fetch(`https://api.lanyard.rest/v1/users/${config.discord.id}`)).json()).data;

			/** @type {import("@/jsdoc").GitHubUser} */
			const user = (await (await fetch(`https://api.github.com/users/${config.github.username}`)).json());
			/** @type {string[]} */
			const pinneds = (await (await fetch(`https://pinned.berrysauce.dev/get/${config.github.username}`)).json()).map((/** @type {{ name: string; }} */ val) => val.name);
			/** @type {(import("@/jsdoc").GitHubRepository & { pinned: boolean; })[]} */
			const repositories = ((await (await fetch(`https://api.github.com/users/${config.github.username}/repos`)).json())).map((/** @type {import("@/jsdoc").GitHubRepository & { pinned: boolean; }} */ val) => {
				return {
					...val,
					pinned: pinneds.includes(val.name),
				};
			});
			const github = { ...user, repositories };

			setData({ discord, github });
			setPending(false);

			localStorage.setItem("cache", JSON.stringify({ discord, github }));
		};
		fetchData();
	}, []);

	return { data, isPending };
}
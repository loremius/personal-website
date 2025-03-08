// @ts-check
import config from "@/config";
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
	const [isInitialized, setInitialized] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!isInitialized) {
					setPending(true);
				}
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

				if (!isInitialized) {
					setPending(false);
					setInitialized(true);
				}
			}
			catch (err) {
				setError(err);
			}
		};
		fetchData();

		const interval = setInterval(fetchData, 60 * 1000);
		return () => clearInterval(interval);
	}, [isInitialized]);

	return { data, isPending, error };
}
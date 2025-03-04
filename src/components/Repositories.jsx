// @ts-check
import useSocial from "@/hooks/useSocial";
import { IconGitCompare, IconGitFork, IconStarFilled } from "@tabler/icons-react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import { Loader } from "lucide-react";
import Link from "next/link";
import React from "react";

dayjs.extend(duration);
dayjs.extend(relativeTime);

export default function Repositories() {
	const { data, isPending } = useSocial();
	const starredRepos = (data?.github?.repositories ?? []).filter((val) => val.pinned).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4);

	return (
		<div className="mt-20">
			<h2 className="text-3xl font-semibold">Repositories</h2>
			<p className="text-sm text-[#a1a1aa] mb-4">Here are some projects that are masterpieces</p>

			{isPending && (
					<div className="flex items-center justify-center">
						<Loader className="animate-spin" size={16} />
					</div>
				)}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{starredRepos?.map((repository) => (
					<React.Fragment key={repository.id}>
						<Repository repository={repository} />
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

/**
 *
 * @param {{ repository: import("@/jsdoc").GitHubRepository; }} param0
 * @returns
 */
function Repository({ repository }) {
	return (
		<Link href={repository.html_url} className="bg-zinc-800/30 border-2 border-transparent cursor-pointer rounded-2xl hover:border-zinc-500 p-4 hover:bg-zinc-900 transition-all">
			<div className="flex flex-col justify-between h-full">
				<div>
					<h2 className="font-semibold">{repository.name}</h2>
					<p className="text-sm text-zinc-400">{repository.description}</p>
				</div>

				<div>
					<div className="mt-2 text-sm flex gap-x-1">
						{repository.topics.slice(0, 3).map((val, index) => (
							<React.Fragment key={index}>
								<span className="bg-zinc-400/10 text-zinc-400 px-2 py-[2px] text-[10px] rounded-md ring-1 ring-inset ring-zinc-500/10">
									#{val}
								</span>
							</React.Fragment>
						))}
					</div>

					<div className="flex justify-between items-center mt-4">
						<div className="flex items-center gap-3">
							<div className="flex gap-x-1 items-center text-zinc-500/50 text-xs">
								<IconStarFilled size={12} stroke={2} /> {repository.stargazers_count} stars
							</div>
							<div className="flex gap-x-1 items-center text-zinc-500/50 text-xs">
								<IconGitFork size={14} stroke={2} /> {repository.forks} forks
							</div>
						</div>

						<div className="flex gap-x-1 items-center text-zinc-500/50 text-xs">
							<IconGitCompare size={14} stroke={2} />	{dayjs.duration(repository.updated_at).humanize(true)}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
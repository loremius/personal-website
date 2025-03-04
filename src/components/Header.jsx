// @ts-check
"use client";
import config from "@/config";
import useSocial from "@/hooks/useSocial";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa6";

export default function Header() {
	const { data } = useSocial();

	return (
		<header className="mx-auto w-full relative max-w-4xl lg:px-8 mt-6">
			<div className="flex justify-between items-center px-4 lg:px-0">
				<div className="flex w-1/3 justify-start">
					<Link href={"/"} className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
						<Image className="rounded-full" src={data?.github.avatar_url} alt={data?.github.name} width={36} height={36} />
					</Link>
				</div>
				<div className="w-1/3 flex justify-end gap-x-2">
					<NavLink href={`https://discord.com/users/${config.discord.id}`}>
						<FaDiscord size={16} />
					</NavLink>
					<NavLink href={`https://github.com/${config.github.username}`}>
						<FaGithub size={16} />
					</NavLink>
				</div>
			</div>
		</header>
	);
}

/**
 *
 * @param {React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>} param0
 */
function NavLink({ children, ...props }) {
	return (
		// @ts-ignore
		<Link
			target="_blank"
			className="h-9 w-9 flex items-center justify-center bg-zinc-0 ring-1 text-white/70 hover:text-white cursor-pointer ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/30 dark:ring-white/10 rounded-full shadow-inner dark:shadow-black/10 relative transition-all"
			{...props}
		>
			{children}
		</Link>
	);
}
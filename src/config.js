// @ts-check
import {
	Bun,
	CSS,
	Expressjs,
	Git,
	Github,
	HTML5,
	JavaScript,
	MongoDB,
	Nextjs,
	Nodejs,
	Reactjs,
	TailwindCSS,
	TypeScript,
	Vercel,
	VisualStudioCode,
} from "@/components/Icons.jsx";

const config = {
	badge: "Full-Stack Developer",
	biography: "Hi 👋🏻, I'm **Lore**",
	popup: {
		title: "v3.0.0 is here",
		description: "Source code of the 3rd version of my personal website",
	},
	description:
		"I specialize in **Typescript**, **Discord bot development**, and **web development** to create seamless user experiences and powerful automation tools. I also enjoy exploring the latest technologies and sharing knowledge with the community.",
	discord: {
		id: "1384283663302267014",
	},
	github: {
		username: "loremius",	
	},
	technologies: [
		{ id: "Typescript", icon: <TypeScript className="rounded" />, color: "49, 120, 198" },
		{ id: "Javascript", icon: <JavaScript className="rounded" />, color: "240, 219, 79" },
		{ id: "Node.js", icon: <Nodejs className="rounded" />, color: "65, 135, 63" },
		{ id: "CSS", icon: <CSS className="rounded" />, color: "38, 77, 228" },
		{ id: "HTML", icon: <HTML5 className="rounded" />, color: "227, 79, 38" },
		{ id: "React", icon: <Reactjs className="rounded" />, color: "88, 196, 220" },
		{ id: "Next.js", icon: <Nextjs className="rounded" />, color: "255, 255, 255" },
		{ id: "Express.js", icon: <Expressjs className="rounded" />, color: "255, 255, 255" },
		{ id: "MongoDB", icon: <MongoDB className="rounded" />, color: "1, 236, 100" },
		{ id: "Vercel", icon: <Vercel className="rounded" />, color: "255, 255, 255" },
		{ id: "TailwindCSS", icon: <TailwindCSS className="rounded" />, color: "56, 189, 248" },
		{ id: "Bun", icon: <Bun className="rounded" />, color: "251, 240, 223" },
		{ id: "Git", icon: <Git className="rounded" />, color: "222, 76, 54" },
		{ id: "Github", icon: <Github className="rounded" />, color: "255, 255, 255" },
	],
};

export default config;

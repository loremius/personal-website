// @ts-check

/**
 *
 * @param {import("@/jsdoc").Activity} activity
 * @returns {string}
 */
export const getAssetImage = (activity) => {
	const largeImage = activity.assets?.large_image;
	if (!largeImage) return "";

	return `https://media.discordapp.net/external/${largeImage.split("/").slice(1).join("/")}`;
};

export const stringify = (text) => {
	const regex = /\*\*(.*?)\*\*/g;
	return text.split(regex).map((part, index) => {
		if (index % 2 === 1) {
			return <span key={index} className="underline text-white font-semibold">{part}</span>;
		}
		return part;
	});
};
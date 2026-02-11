import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Background } from "@/sections/hero/_components/background";

interface WorksCardProps {
	image: string;
	logo?: string;
	title: string;
	description: string;
	link: string;
}

export default function WorksCard({
	image,
	logo,
	title,
	description,
	link,
}: WorksCardProps) {
	const Wrapper = link.startsWith("/") ? Link : "a";
	const wrapperProps = link.startsWith("/")
		? { to: link }
		: { href: link, target: "_blank", rel: "noreferrer" };

	return (
		<Card className="group relative w-full overflow-hidden">
			{/* Shader background */}
			<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-lg">
				<Background
					colors={{
						dark: {
							shadow: [0.01, 0.025, 0.015],
							highlight: [0.025, 0.13, 0.05],
						},
						light: {
							shadow: [0.96, 0.99, 0.96],
							highlight: [0.78, 0.92, 0.80],
						},
					}}
				/>
			</div>

			<Wrapper {...wrapperProps} className="relative z-10 block">
				<div className="relative flex flex-col items-center gap-8 px-6 py-16 md:py-24">
					{/* Radial glow behind logo */}
					{logo && (
						<div
							className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-15 dark:opacity-10 blur-3xl"
							style={{
								background: "radial-gradient(ellipse at center, oklch(0.7 0.12 145), transparent 70%)",
							}}
						/>
					)}

					{/* Logo */}
					{logo ? (
						<div className="relative h-10 md:h-16 transition-transform duration-500 ease-smooth group-hover:scale-105">
							<img
								src={logo}
								alt={title}
								className="h-full object-contain"
							/>
							<div
								className="pointer-events-none absolute inset-0 animate-shiny-text bg-linear-to-r from-transparent via-white/60 to-transparent bg-no-repeat bg-position-[0_0] bg-size-[200px_100%]"
								style={{
									"--shiny-width": "200px",
									WebkitMaskImage: `url(${logo})`,
									WebkitMaskSize: "contain",
									WebkitMaskRepeat: "no-repeat",
									WebkitMaskPosition: "center",
									maskImage: `url(${logo})`,
									maskSize: "contain",
									maskRepeat: "no-repeat",
									maskPosition: "center",
								} as React.CSSProperties}
							/>
						</div>
					) : (
						<img
							src={image}
							alt={title}
							className="w-full h-48 object-cover rounded-md"
						/>
					)}

					{/* Text + CTA */}
					<div className="relative flex flex-col items-center gap-3 text-center max-w-xl">
						<p className="text-sm text-foreground/50 leading-relaxed">
							{description}
						</p>
						<Button
							variant="ghost"
							size="sm"
							className="text-xs text-foreground/60 group-hover:text-foreground transition-colors duration-300 gap-1.5"
							tabIndex={-1}
						>
							Explore Solutions
							<ArrowRightIcon className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
						</Button>
					</div>
				</div>
			</Wrapper>
		</Card>
	);
}

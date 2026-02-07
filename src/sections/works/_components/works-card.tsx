import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
			{/* @ts-expect-error - dynamic wrapper */}
			<Wrapper {...wrapperProps} className="block">
				<div className="relative flex flex-col items-center gap-8 px-6 py-16 md:py-24">
					{/* Radial glow behind logo */}
					{logo && (
						<div
							className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-15 dark:opacity-10 blur-3xl"
							style={{
								background: "radial-gradient(ellipse at center, oklch(0.7 0.12 70), transparent 70%)",
							}}
						/>
					)}

					{/* Logo */}
					{logo ? (
						<img
							src={logo}
							alt={title}
							className="relative h-10 md:h-16 object-contain transition-transform duration-500 ease-smooth group-hover:scale-105"
						/>
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

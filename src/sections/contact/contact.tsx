import {
	EnvelopeClosedIcon,
	PaperPlaneIcon,
} from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ContactFormCard from "@/sections/contact/_components/contact-form-card";
import { GridPattern } from "@/sections/contact/_components/grid-pattern";

const IconMapPin = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="15"
		height="15"
		viewBox="0 0 15 15"
		fill="none"
		{...props}
	>
		<path
			d="M7.5 0C4.46 0 2 2.46 2 5.5 2 9.64 7.5 15 7.5 15S13 9.64 13 5.5C13 2.46 10.54 0 7.5 0Zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
			fill="currentColor"
		/>
	</svg>
);

const IconPhone = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="15"
		height="15"
		viewBox="0 0 15 15"
		fill="none"
		{...props}
	>
		<path
			d="M4.73 1.08C4.41.42 3.7.08 3.01.27L1.34.72A1.5 1.5 0 0 0 .28 2.46c.96 4.95 5.31 9.3 10.26 10.26a1.5 1.5 0 0 0 1.74-1.06l.45-1.67a1.5 1.5 0 0 0-.81-1.72l-2.06-.88a1.5 1.5 0 0 0-1.56.26l-.62.54a8.04 8.04 0 0 1-3.03-3.03l.54-.62a1.5 1.5 0 0 0 .26-1.56l-.88-2.06Z"
			fill="currentColor"
		/>
	</svg>
);

const contactInfo = [
	{
		icon: IconMapPin,
		title: "Visit Us",
		lines: ["Meydan Grandstand, 6th Floor", "Nad Al Sheba, Dubai, UAE"],
	},
	{
		icon: EnvelopeClosedIcon,
		title: "Email Us",
		lines: ["info@provisiongroup.co"],
		href: "mailto:info@provisiongroup.co",
	},
	{
		icon: IconPhone,
		title: "Call Us",
		lines: ["+971 4 344 0690"],
		href: "tel:+97143440690",
	},
];

export default function Contact() {
	return (
		<Section
			id="contact"
			title="Start a conversation"
			description="Whether you have a project in mind or want to explore how we can add value to your business, we'd love to hear from you."
			className="flex justify-center overflow-hidden"
			badgeText="Get in Touch"
			badgeIcon={<PaperPlaneIcon aria-hidden="true" className="size-3.5" />}
		>
			<div className="relative z-10 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-[1fr_auto]">
				<ContactFormCard />

				<div className="flex flex-col gap-4 md:w-64">
					{contactInfo.map((info) => {
						const content = (
							<Card
								key={info.title}
								className={cn(
									"flex flex-col gap-3 p-5",
									info.href && "hover:border-border/80 transition-colors duration-150",
								)}
							>
								<div className="flex size-10 items-center justify-center rounded-lg border border-border bg-card-elevated">
									<info.icon className="size-4 text-foreground" />
								</div>
								<div className="flex flex-col gap-1">
									<p className="text-sm font-medium text-foreground">
										{info.title}
									</p>
									{info.lines.map((line) => (
										<p
											key={line}
											className="text-xs text-foreground/50 leading-relaxed"
										>
											{line}
										</p>
									))}
								</div>
							</Card>
						);

						if (info.href) {
							return (
								<a
									key={info.title}
									href={info.href}
									className="rounded-lg focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:outline-none"
								>
									{content}
								</a>
							);
						}

						return <div key={info.title}>{content}</div>;
					})}
				</div>
			</div>
			<GridPattern
				squares={[
					[4, 4],
					[5, 1],
					[8, 2],
					[5, 3],
					[5, 5],
					[10, 10],
					[12, 15],
					[15, 10],
					[10, 15],
					[15, 10],
					[10, 15],
					[15, 10],
				]}
				className={cn(
					"mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
					"inset-x-0 inset-y-[-30%] h-[150%] skew-y-12",
				)}
			/>
		</Section>
	);
}

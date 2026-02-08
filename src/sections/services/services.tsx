import { StarIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { ServiceCard } from "@/sections/services/_components/service-card";
import { CleanCodeCardContent } from "@/sections/services/_components/clean-code-card-content";
import { bestPractices } from "@/sections/services/_constants/services";

export default function Services() {
	return (
		<Section
			id="services"
			title="Comprehensive solutions across industries"
			description="Our integrated approach means you get access to a full spectrum of professional services, backed by the reputation and resources of Pro Vision Group."
			badgeText="Who We Are"
			badgeIcon={<StarIcon aria-hidden="true" />}
		>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="flex flex-col gap-2 rounded-lg border border-border bg-card p-6 md:col-span-2">
					<h3 className="text-base font-medium text-foreground">
						Our Story
					</h3>
					<p className="text-sm text-foreground/60 leading-relaxed">
						Pro Vision Group is a UAE-based company with over
						5 years of experience delivering visionary solutions
						and exceptional results. Headquartered in Dubai, we
						offer integrated, end-to-end solutions for businesses
						in the region and beyond.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-1 rounded-lg border border-border bg-card p-6 text-center">
					<span className="text-2xl md:text-3xl font-semibold text-foreground">
						5+
					</span>
					<span className="text-sm text-foreground/50">
						Years of Experience
					</span>
				</div>
				<ServiceCard
					name="Our Principles"
					description="Integrity, innovation, and excellence guide every engagement — the values that have built our reputation across industries."
					className="md:col-span-3"
					background={<CleanCodeCardContent items={bestPractices} />}
				/>
			</div>
		</Section>
	);
}

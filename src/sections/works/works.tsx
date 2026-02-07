import { GridIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { works } from "@/sections/works/_constants/works";
import WorksCard from "./_components/works-card";

export default function Works() {
	return (
		<Section
			id="works"
			title="Our Group Companies"
			description="Each subsidiary operates with autonomy while benefiting from the collective strength and strategic direction of Pro Vision Group."
			className="grid grid-cols-1 gap-4"
			badgeText="Our Portfolio"
			badgeIcon={<GridIcon aria-hidden="true" className="size-3.5" />}
		>
			{works.map((item) => (
				<WorksCard
					key={item.title}
					image={item.image}
					logo={item.logo}
					title={item.title}
					description={item.description}
					link={item.link}
				/>
			))}
		</Section>
	);
}

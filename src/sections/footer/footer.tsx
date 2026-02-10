import type { MouseEvent } from "react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { useLenis } from "@/lib/lenis-context";
import {
	footerLinks,
	footerSocialLinks,
} from "@/sections/footer/_constants/footer";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const { scrollTo } = useLenis();
	const matchRoute = useMatchRoute();
	const isSolutionsPage = !!matchRoute({ to: "/solutions" });

	const handleScrollClick = (
		event: MouseEvent<HTMLAnchorElement>,
		target: string,
	) => {
		event.preventDefault();
		scrollTo(target);
	};

	return (
		<footer className="w-full">
			<div className="w-full md:max-w-full mx-auto grid gap-8 px-4 py-8 md:p-8 md:grid-cols-[minmax(0,1fr)_120px] ">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-3">
						<div className="flex gap-2 items-center text-foreground">
							<img
								src={isSolutionsPage ? "/provision-solutions-logo.png" : "/logo.png"}
								alt={isSolutionsPage ? "Pro Vision Solutions" : "Pro Vision Group"}
								className="h-8"
							/>
						</div>
						<p className="text-xs text-foreground/70 leading-relaxed max-w-xs">
							{isSolutionsPage
								? "Enterprise-grade software development, cloud infrastructure, and digital transformation solutions for businesses across the UAE and beyond."
								: "A premier consortium of companies delivering visionary solutions and exceptional results in the UAE and beyond."}
						</p>
					</div>

					<div className="flex items-center gap-3">
						{footerSocialLinks.map(({ label, href, icon: Icon }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noreferrer"
								aria-label={label}
								className="group flex size-6 rounded items-center justify-center text-foreground/70 hover:text-foreground transition-[color,shadow] duration-100 ease-out-quad focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-ring-offset/50 focus-visible:outline-none"
							>
								<Icon aria-hidden="true" />
							</a>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<p className="text-xs text-foreground">Navigation</p>
					<ul className="space-y-2 text-xs text-foreground/70">
						{footerLinks.map((link) => (
							<li key={link.label}>
								{link.href.startsWith("#") ? (
									<a
										href={link.href}
										onClick={(event) => handleScrollClick(event, link.href)}
										className="hover:text-foreground rounded transition-[color,shadow] duration-100 ease-out-quad focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-ring-offset/50 focus-visible:outline-none"
									>
										{link.label}
									</a>
								) : (
									<Link
										to={link.href}
										className="hover:text-foreground rounded transition-[color,shadow] duration-100 ease-out-quad focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-ring-offset/50 focus-visible:outline-none"
									>
										{link.label}
									</Link>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="text-xs text-foreground/70 border-t border-border/80">
				<div className="w-full md:max-w-full mx-auto flex flex-col md:flex-row gap-1 px-4 py-4 md:px-2 items-center justify-between">
					<p>
						&copy; {currentYear} {isSolutionsPage ? "Pro Vision Solutions" : "Pro Vision Group"}. All rights reserved.
					</p>
					<p>
						Headquartered in Dubai, UAE. Delivering excellence worldwide.
					</p>
				</div>
			</div>
		</footer>
	);
}

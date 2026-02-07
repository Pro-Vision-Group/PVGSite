import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "@/sections/contact/_constants/contact-schema";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwpgqpzy";

export type SendContactMessageResponse = { success: true };

export const sendContactMessage = createServerFn({ method: "POST" })
	.inputValidator(contactSchema)
	.handler(async ({ data }) => {
		const response = await fetch(FORMSPREE_ENDPOINT, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				company: data.company,
				message: data.message,
			}),
		});

		if (!response.ok) {
			const body = await response.json().catch(() => null);
			const errorMsg =
				body?.error ?? `Formspree returned status ${response.status}`;
			throw new Error(errorMsg);
		}

		return { success: true };
	});

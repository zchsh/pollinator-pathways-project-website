"use client";

import { useState } from "react";

interface ResponseData {
	status: "success" | "existingSubscriber" | "error" | "idle" | "loading";
	email?: string;
}

export default function EmailSubscribeForm() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [responseData, setResponseData] = useState<ResponseData>({
		status: "idle",
	});

	async function handleSubmit() {
		setResponseData({ status: "loading" });
		const response = await fetch("/api/subscribe", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, name }),
		});
		const data = await response.json();
		setResponseData(data);
	}

	return (
		<div>
			<p>Our monthly newsletter has updates, contests, and more!</p>
			{responseData.status === "success" ? (
				<p>Success! 🎉 {responseData.email} is now subscribed.</p>
			) : responseData.status === "existingSubscriber" ? (
				<p>
					✅ Existing subscriber. {responseData.email} was already subscribed.
				</p>
			) : responseData.status === "error" ? (
				<p>❌ Error, oops</p>
			) : (
				<form>
					<input
						type="email"
						placeholder="your@email.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button type="button" onClick={() => handleSubmit()}>
						Subscribe
					</button>
				</form>
			)}
		</div>
	);
}

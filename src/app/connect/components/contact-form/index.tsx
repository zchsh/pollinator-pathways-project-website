"use client";

import { Formik } from "formik";
import { useId, useState } from "react";
import s from "./style.module.css";

function validateContactForm(values: $TSFixMe) {
	const errors: $TSFixMe = {};
	// if (!values.email) {
	// 	errors.email = "Required";
	// } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
	// 	errors.email = "Invalid email address";
	// }
	return errors;
}

async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function ContactForm() {
	const [afterSubmitData, setAfterSubmitData] = useState<
		| null
		| { status: "success"; email: string }
		| { status: "error"; error: string }
	>(null);

	/**
	 * Submit values to API route, which in turn sends an email via SendGrid
	 */
	async function sendContactForm(
		values: $TSFixMe,
		{ setSubmitting }: $TSFixMe
	) {
		const { email, name, message, reason, referralSource } = values;
		let html = "";
		html += `<p><strong>Name:</strong> ${name}</p>`;
		html += `<p><strong>Email:</strong> ${email}</p>`;
		html += `<p><strong>Why are you reaching out?:</strong> ${reason}</p>`;
		html += `<p><strong>Message:</strong> ${message}</p>`;
		html += `<p><strong>Where did you hear about us?:</strong> ${referralSource}</p>`;
		const emailData = { subject: `P3 message from ${name}`, html };
		// Send the email, make it take at least 500ms
		const [_sleep, result] = await Promise.all([
			sleep(500),
			fetch("/api/send-mail", {
				method: "POST",
				body: JSON.stringify(emailData),
				headers: {
					"Content-Type": "application/json",
				},
			}),
		]);
		// Update with an error if there was one
		if (result.status !== 200) {
			setAfterSubmitData({
				status: "error",
				error: await result.text(),
			});
		} else {
			// Otherwise, update with success
			setAfterSubmitData({
				status: "success",
				email: values.email,
			});
		}
		// Reset the form. Note it'll be over-layed, so the user won't see this.
		// We could add some functionality to "dismiss" the overlay... but meh,
		// for now people can reload the page.
		setSubmitting(false);
	}

	return (
		<div className={s.root}>
			<Formik
				initialValues={{
					name: "",
					email: "",
					message: "",
					reason: "",
					referralSource: "",
				}}
				validate={validateContactForm}
				onSubmit={sendContactForm}
			>
				{(formikBag) => {
					const { handleSubmit, isSubmitting } = formikBag;
					return (
						<form onSubmit={handleSubmit} className={s.form}>
							{afterSubmitData !== null ? (
								<div className={s.postSubmitOverlay}>
									<pre>
										<code>{JSON.stringify(afterSubmitData, null, 2)}</code>
									</pre>
								</div>
							) : isSubmitting ? (
								<div className={s.postSubmitOverlay}>
									<pre>
										<code>LOADING...</code>
									</pre>
								</div>
							) : null}
							<TextInput id="name" label="Name" formikBag={formikBag} />
							<TextInput
								id="email"
								label="Email"
								type="email"
								formikBag={formikBag}
							/>
							<TextInput
								id="reason"
								label="Why are you reaching out?"
								formikBag={formikBag}
							/>
							<TextAreaInput
								id="message"
								label="Message"
								formikBag={formikBag}
							/>
							<TextInput
								id="referralSource"
								label="Where did you hear about us?"
								formikBag={formikBag}
							/>
							<button type="submit" disabled={isSubmitting}>
								Submit
							</button>
						</form>
					);
				}}
			</Formik>
		</div>
	);
}

function TextInput({
	id,
	type = "text",
	label,
	formikBag,
}: {
	id: string;
	type?: string;
	label: string;
	formikBag: $TSFixMe;
}) {
	const inputId = useId();
	const { values, handleChange, handleBlur, errors, touched } = formikBag;
	return (
		<>
			<label htmlFor={inputId}>{label}</label>
			<input
				id={inputId}
				type={type}
				name={id}
				onChange={handleChange}
				onBlur={handleBlur}
				value={values[id]}
			/>
			{errors[id] && touched[id] ? errors[id] : null}
		</>
	);
}

function TextAreaInput({
	id,
	label,
	formikBag,
}: {
	id: string;
	type?: string;
	label: string;
	formikBag: $TSFixMe;
}) {
	const inputId = useId();
	const { values, handleChange, handleBlur, errors, touched } = formikBag;
	return (
		<>
			<label htmlFor={inputId}>{label}</label>
			<textarea
				id={inputId}
				name={id}
				onChange={handleChange}
				onBlur={handleBlur}
				value={values[id]}
			/>
			{errors[id] && touched[id] ? errors[id] : null}
		</>
	);
}

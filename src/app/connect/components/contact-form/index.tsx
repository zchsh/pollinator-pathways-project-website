"use client";

import { Formik } from "formik";
import s from "./style.module.css";
import { useId } from "react";

function validateContactForm(values: $TSFixMe) {
	const errors: $TSFixMe = {};
	if (!values.email) {
		errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}
	return errors;
}

export function ContactForm() {
	/**
	 * TODO: actually submit values... "server action"?
	 * Where to submit them to? Maybe val.town for now?
	 * Kind of up to you to figure out where the contact form will go.
	 * Can val.town turn this into an email? Maybe a starting point:
	 * https://www.val.town/v/std/email
	 * (I have a Val Town Pro account... so that's something!)
	 */
	async function handleSubmit(values: $TSFixMe, { setSubmitting }: $TSFixMe) {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
	}

	return (
		<div className={s.root}>
			<Formik
				initialValues={{ name: "", email: "" }}
				validate={validateContactForm}
				onSubmit={handleSubmit}
			>
				{(formikBag) => {
					const { handleSubmit } = formikBag;
					return (
						<form onSubmit={handleSubmit} className={s.form}>
							<TextInput id="name" label="Name" formikBag={formikBag} />
							<TextInput
								id="email"
								label="Email"
								type="email"
								formikBag={formikBag}
							/>
							<TextInput id="reason" label="Reason" formikBag={formikBag} />
							<TextAreaInput
								id="message"
								label="Message"
								formikBag={formikBag}
							/>
							<TextInput
								id="referralSource"
								label="Referral Source"
								formikBag={formikBag}
							/>
							<button type="submit">Submit</button>
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

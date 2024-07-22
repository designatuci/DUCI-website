import { defineField, defineType } from "sanity";
import { SelectWithCustomInput } from "../components/SelectWithCustomInput";
import React from "react";

type Link = {
	label?: string;
	link?: string;
};

const EVENT_OPTIONS = [
	{
		title: "Industry Speaker",
		value: "Industry Speaker",
	},
	{ title: "Workshop", value: "Workshop" },
	{ title: "Social", value: "Social" },
	{ title: "Project Teams", value: "Project Teams" },
	{ title: "Fundraiser", value: "Fundraiser" },
	{ title: "AMA", value: "AMA" },
];

const LINK_OPTIONS = [
	{
		title: "RSVP Form",
		value: "RSVP Form",
	},
	{
		title: "Recording",
		value: "Recording",
	},
	{
		title: "Resources",
		value: "Resources",
	},
	{
		title: "Slides",
		value: "Slides",
	},
	{
		title: "Zoom Link",
		value: "Zoom Link",
	},
];

export default defineType({
	name: "event",
	title: "Event",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required().error("Title is required"),
		}),
		defineField({
			name: "time",
			title: "Time (PST)",
			type: "datetime",
			validation: (Rule) => Rule.required().error("Time is required"),
		}),
		defineField({
			name: "duration",
			title: "Duration (minutes)",
			type: "number",
			validation: (Rule) => Rule.required().error("Duration is required"),
		}),
		defineField({
			name: "type",
			title: "Event Type",
			type: "string",
			components: {
				input: (props) => (
					<SelectWithCustomInput {...props} options={EVENT_OPTIONS} />
				),
			},
			validation: (Rule) => Rule.required().error("Type is required"),
		}),
		defineField({
			name: "desc",
			title: "Description",
			type: "text",
			validation: (Rule) =>
				Rule.required().error("Description is required"),
		}),
		defineField({
			name: "place",
			title: "Place",
			type: "string",
			validation: (Rule) => Rule.required().error("Place is required"),
		}),
		defineField({
			name: "links",
			title: "Links",
			type: "array",
			of: [
				defineField({
					name: "link",
					title: "Link",
					type: "object",
					fields: [
						defineField({
							name: "label",
							title: "Label",
							type: "string",
							components: {
								input: (props) => (
									<SelectWithCustomInput
										{...props}
										options={LINK_OPTIONS}
									/>
								),
							},
							validation: (Rule) =>
								Rule.required().error("Label is required"),
						}),
						defineField({
							name: "link",
							title: "URL",
							type: "url",
							validation: (Rule) =>
								Rule.required().error("URL is required"),
						}),
					],
					validation: (Rule) =>
						Rule.custom((fields?: Link) => {
							if (!fields) {
								return true;
							}

							const { label, link } = fields;
							if ((label && !link) || (!label && link)) {
								return "Both label and URL must be provided";
							}

							return true;
						}).error("Both label and URL must be provided"),
				}),
			],
		}),
	],

	preview: {
		select: {
			title: "title",
			time: "time",
			type: "type",
		},
		prepare(selection) {
			const { title, time, type } = selection;
			return {
				title: `${title}`,
				subtitle: `${type} - ${new Date(time).toLocaleString()}`,
			};
		},
	},
});

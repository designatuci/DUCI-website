import { defineField, defineType } from "sanity";
import { SelectWithCustomInput } from "../components/SelectWithCustomInput";

export default defineType({
	name: "event",
	title: "Event",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "time",
			title: "Time",
			type: "datetime",
		}),
		defineField({
			name: "duration",
			title: "Duration (minutes)",
			type: "number",
		}),
		defineField({
			name: "type",
			title: "Type",
			type: "string",
			options: {
				list: [
					{ title: "Industry Speaker", value: "Industry Speaker" },
					{ title: "Workshop", value: "Workshop" },
					{ title: "Social", value: "Social" },
					{ title: "Project Teams", value: "Project Teams" },
					{ title: "Fundraiser", value: "Fundraiser" },
					{ title: "AMA", value: "AMA" },
				],
			},
		}),
		defineField({
			name: "desc",
			title: "Description",
			type: "text",
		}),
		defineField({
			name: "place",
			title: "Place",
			type: "string",
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
								input: SelectWithCustomInput,
							},
						}),
						defineField({
							name: "link",
							title: "URL",
							type: "url",
						}),
					],
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

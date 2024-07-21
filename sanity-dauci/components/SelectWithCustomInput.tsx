import React, { useState, useEffect } from "react";
import { TextInput, Stack, Select, Card } from "@sanity/ui";
import { set, unset, StringInputProps, StringSchemaType } from "sanity";

export const SelectWithCustomInput = React.forwardRef(function SelectWithCustomInput(
	props: StringInputProps<StringSchemaType>,
	ref: React.ForwardedRef<HTMLSelectElement>,
) {
	const { value, onChange } = props;
	const [selectedValue, setSelectedValue] = useState(value || "");
	const [customValue, setCustomValue] = useState("");

	const predefinedValues = [
		{ title: "Industry Speaker", value: "Industry Speaker" },
		{ title: "Workshop", value: "Workshop" },
		{ title: "Social", value: "Social" },
		{ title: "Project Teams", value: "Project Teams" },
		{ title: "Fundraiser", value: "Fundraiser" },
		{ title: "AMA", value: "AMA" },
	];

	useEffect(() => {
		if (value && !predefinedValues.map((option) => option.value).includes(value)) {
			setSelectedValue("other");
			setCustomValue(value);
		}
	}, [value]);

	const handleSelectChange = (event) => {
		const newValue = event.target.value;
		setSelectedValue(newValue);
		if (newValue === "other") {
			onChange(customValue ? set(customValue) : unset());
		} else {
			onChange(set(newValue));
		}
	};

	const handleInputChange = (event) => {
		const newValue = event.target.value;
		setCustomValue(newValue);
		if (selectedValue === "other") {
			onChange(newValue ? set(newValue) : unset());
		}
	};

	return (
		<Stack space={3}>
			<Card>
				<Select onChange={handleSelectChange} value={selectedValue} ref={ref}>
					{predefinedValues.map((option) => (
						<option key={option.value} value={option.value}>
							{option.title}
						</option>
					))}
					<option value="other">Other</option>
				</Select>
			</Card>
			{selectedValue === "other" && (
				<Card>
					<TextInput
						value={customValue}
						onChange={handleInputChange}
						placeholder="Enter other type"
					/>
				</Card>
			)}
		</Stack>
	);
});

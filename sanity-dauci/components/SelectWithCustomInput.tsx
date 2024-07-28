import React, { FormEvent, useEffect, useState } from "react";
import { Card, Select, Stack, TextInput } from "@sanity/ui";
import { set, StringInputProps, StringSchemaType, unset } from "sanity";

export const SelectWithCustomInput = React.forwardRef(
	function SelectWithCustomInput(
		props: StringInputProps<StringSchemaType> & {
			options: { title: string; value: string }[];
		},
		ref: React.ForwardedRef<HTMLSelectElement>,
	) {
		const { value, onChange, options } = props;
		const [selectedValue, setSelectedValue] = useState(value || "other");
		const [customValue, setCustomValue] = useState("");

		const predefinedValues = options;

		useEffect(() => {
			if (
				value &&
				!predefinedValues.map((option) => option.value).includes(value)
			) {
				setSelectedValue("other");
				setCustomValue(value);
			}
		}, [value]);

		const handleSelectChange = (event: FormEvent<HTMLSelectElement>) => {
			const newValue = event.currentTarget.value;

			setSelectedValue(newValue);
			if (newValue === "other") {
				onChange(customValue ? set(customValue) : unset());
			} else {
				setCustomValue(""); // Reset custom value when a predefined option is selected
				onChange(set(newValue));
			}
		};

		const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
			const newValue = event.currentTarget.value;
			setCustomValue(newValue);

			if (selectedValue === "other") {
				onChange(newValue ? set(newValue) : unset());
			}
		};

		return (
			<Stack space={3}>
				<Card>
					<Select
						onChange={handleSelectChange}
						value={selectedValue}
						ref={ref}
					>
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
	},
);

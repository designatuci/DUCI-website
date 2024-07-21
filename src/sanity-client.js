import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: "8c8akzjz",
	dataset: "production",
	useCdn: true,
	apiVersion: "2022-03-08", //* FIXME: use a more recent api version
});

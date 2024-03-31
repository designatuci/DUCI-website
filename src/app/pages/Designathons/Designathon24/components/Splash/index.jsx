import { memo } from "react";
import splash from "./logo.svg";

const Splash = memo(() => {
	return (
		<div
			style={{
				backgroundColor: "#fff5e0",
				height: "100%",
				position: "absolute",
				display: "grid",
				placeContent: "center",
			}}
		>
			<img
				width={"50%"}
				src={splash}
				alt="True To You"
				style={{ margin: "0 auto" }}
			/>
		</div>
	);
});

export { Splash };

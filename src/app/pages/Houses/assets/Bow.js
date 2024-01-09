import HouseIcon from "./HouseIcon";

function Bow({ r, square, gray, opacity }) {
	const bg = gray ? "#E4E4E6" : "#D1FFE1";
	const stroke = gray ? "#686868" : "#29DB6B";

	return (
		<HouseIcon r={r} square={square} bg={bg} scale={48} opacity={opacity}>
			<path
				d="M12.2509-22.0523H22.052M22.052-22.0523V-12.2512M22.052-22.0523-14.702 14.7017M-14.702 14.7017H-22.0527M-14.702 14.7017V22.0524M11.0258 19.6022C14.8874 15.7406 17.1514 9.5684 17.1514 3.6755 17.1514-8.1103 8.11-17.1517-3.6758-17.1517-9.5932-17.1517-15.736-14.9146-19.6025-11.0261L11.0258 19.6022Z"
				stroke={stroke}
				strokeWidth="4.90052"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</HouseIcon>
	);
}

export default Bow;

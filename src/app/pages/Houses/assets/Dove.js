import HouseIcon from "./HouseIcon";

function Dove({ r, square, gray, opacity }) {
	const bg = gray ? "#E1E1E1" : "#FFE1FB";
	const fill = gray ? "#727272" : "#FF9FF4";

	return (
		<HouseIcon r={r} square={square} bg={bg} scale={56} opacity={opacity}>
			<path
				d="M13.8426-28.8433C13.0703-24.7537 14.6632-22.2799 17.7765-20.8427 18.3316-19.8568 18.7902-18.8769 19.1522-17.8995 17.3059-19.9533 15.1338-20.9537 12.1532-19.4827 13.8547-16.1497 16.4491-15.5705 19.5745-16.6566 20.3227-14.1225 20.5037-11.6366 20.3348-9.1266 20.3348-9.1025 20.3348-9.0784 20.3227-9.0542 20.4434-8.9818 20.564-8.9215 20.6726-8.8491 21.2639-8.4991 21.8432-8.1371 22.3983-7.7751 22.4465-8.1733 22.4827-8.5836 22.5069-8.9818 22.6517-11.1056 22.5551-13.2536 22.1086-15.4378 25.3427-14.8224 27.2975-16.4756 28.4801-19.4948 25.5599-19.8085 23.062-19.3476 21.807-16.729 21.4932-17.8633 21.0829-19.0097 20.564-20.1633 23.424-22.076 25.1134-24.516 23.7015-28.3232 20.9864-27.2938 19.659-25.6527 19.3211-23.5602 18.766-26.1981 17.2576-28.1687 13.8426-28.8433ZM-8.0353-23.9898C-8.9162-21.545-9.7609-18.2736-10.2919-15.0396-10.678-12.6382-10.9314-10.2489-10.9797-8.1733-7.3112-5.0479-3.3411-2.7913 1.0634-2.5862-2.9429-8.9215-6.5389-17.0669-8.0353-23.9898ZM-24.1909-19.2148C-23.8192-10.1161-20.3257 2.3493-10.8349 8.9259L-10.1712 9.3845-10.4125 10.1447C-10.7987 11.3635-11.3538 12.4375-12.2226 13.2581-13.1035 14.0786-14.262 14.6096-15.6859 14.863-18.401 15.3457-22.2191 14.9596-27.9812 13.9338-29.1396 16.842-28.9816 20.0399-27.9293 22.6343-26.877 25.2046-24.9982 27.0509-22.849 27.5336-19.8503 23.6962-15.336 19.0383-9.1455 19.3158-2.8705 19.5934 4.3095 17.8557 8.5813 13.5718 10.0897 12.0755 11.3809 8.4674 12.129 5.2937 12.8772 2.12 13.1789-.6192 13.1789-.6192L13.2513-1.3553 13.9753-1.5484C16.5819-2.2242 19.7193-2.8396 23.2309-4.6135 22.1931-5.3134 20.9743-6.134 19.5625-6.9787 17.4024-8.2578 15.0252-9.368 13.8547-9.5007 11.8515-9.7059 10.7172-9.3438 9.9328-8.7646 9.1605-8.1854 8.6537-7.2924 8.2072-6.2184 7.7728-5.1444 7.4349-3.9257 6.8315-2.8275 6.2161-1.7174 5.1421-.6796 3.5975-.5106-3.1601.2737-8.9283-3.274-13.7672-7.763-17.7494-11.4556-21.1982-15.8239-24.1909-19.2148ZM21.1915-1.3553C20.3348-1.0416 19.5142-.764 18.7298-.5348 18.5126.2979 18.2833 1.1305 18.0541 1.9632L20.1537 2.5424C20.5158 1.2512 20.8657-.0521 21.1915-1.3553Z"
				fill={fill}
			/>
		</HouseIcon>
	);
}

export default Dove;
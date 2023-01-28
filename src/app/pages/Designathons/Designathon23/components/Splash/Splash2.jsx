const Splash2 = () => {
	return (
		<svg
			width='3840'
			height='3840'
			viewBox='0 0 3840 3840'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<g clip-path='url(#clip0_409_136)'>
				<rect width='3840' height='3840' fill='#000024' />
				<g filter='url(#filter)'>
					<path
						d='M2002.49 1366.5C2369.4 1330.11 2351.34 765.668 2304.45 616.973L2047.91 344.354L-76.1036 -493.379L-1615.7 1084.37C-1647.53 1691.39 -1467.98 3011.3 -495.195 3434.81C720.791 3964.2 -316.92 2499.1 421.501 2276.6C1159.92 2054.1 1059.07 2117.83 1324.11 1968.17C1589.16 1818.52 1635.59 1402.89 2002.49 1366.5Z'
						fill='#FFCC45'
					>
						<animateTransform
							attributeName="transform"
							attributeType="XML"
							type="translate"
							values="0 0; 50 50; 0 0"
							dur="20s"
							repeatCount="indefinite" />
					</path>
				</g>
				<g filter='url(#filter1_f_409_136)'>
					<circle cx='1750.9' cy='248.5' r='1039.5' fill='#011EFB' />
				</g>
				<g style={{ mixBlendMode: 'overlay' }} filter='url(#filter)'>
					<path
						d='M1282.36 1562.48C1845.68 1629.13 1538.71 917.777 2472.06 1289.48C2526.66 1334.5 2625.63 1486.42 2584.69 1733.97C2533.51 2043.42 2080.22 2220.24 958.633 2520.57C61.3642 2760.83 -252.503 1788.22 -297.278 1271.89C-297.46 1118.98 -215.096 804.686 115.812 770.816C529.448 728.477 719.04 1495.83 1282.36 1562.48Z'
						fill='#089AFF'
					>
						<animate
							attributeName='fill'
							values='#089AFF;#088Add;#089AFF'
							dur='20s'
							repeatCount='indefinite'
						/>
						<animateTransform
							attributeName="transform"
							attributeType="XML"
							type="translate"
							values="0 0; 300 300; 0 0"
							dur="10s"
							repeatCount="indefinite" />
					</path>
					<path
						d='M824 565C411 519 -100 1491 -305 1983.42C-401.561 2198.95 -243.851 2261.49 -489.918 2353.59C-686.772 2427.27 -653.891 2646.46 -612.843 2746.85C-294.118 3470.51 -133.862 3209.56 -93.5745 2988.63C-58.1168 2785.47 135.887 2380.17 628.239 2384.19C1120.59 2388.22 1366.45 1892.32 1427.83 1643.87C1472.53 1344.34 1690.81 886.215 2206.39 1449.97C2721.97 2013.73 3139.43 1730.48 3283.71 1518.39C3413.18 1331.98 3600.39 927.38 3313.43 800.255C3026.46 673.131 2955.53 297.289 2955.93 125.258C2979.53 -110.829 2991.35 -611.725 2849.84 -726C2708 -841 2264 -465 2060.92 -263.648C1820.85 31.8192 1237.49 611.318 824.683 565.58Z'
						fill='#FFCC45'
					/>
					<path
						d='M272.517 107L1193.55 1618.44H-648.516L272.517 107Z'
						fill='#011EFB'
					/>
				</g>
				<g style={{ mixBlendMode: 'overlay' }}>
					<rect
						width='3840'
						height='3840'
						fill='url(#pattern0)'
						fill-opacity='0.3'
					/>
				</g>
				<g style={{ mixBlendMode: 'overlay' }} opacity='0.3'>
					<rect width='3840' height='3840' fill='#000024' />
				</g>
			</g>
			<defs>
				<filter
					id='filter'
					x='0'
					y='0'
					width='100'
					height='100'
					filterUnits='objectBoundingBox'
					color-interpolation-filters='sRGB'
				>
					<feGaussianBlur
						stdDeviation='50'
					/>
				</filter>
			</defs>
		</svg>
	);
};

export { Splash2 };

import { memo } from 'react';
export * from './Splash2';

const Splash = memo(() => {
	return (
		<svg
			style={{ height: '100vh', width: '100vw', filter: 'blur(0px)' }}
			width={'100%'}
			height={'100%'}
			viewBox='0 0 100 100'
			preserveAspectRatio='none'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<g style={{ filter: 'blur(0px)' }}>
				<rect width={100} height={100} fill='#000024' />
				<path
					d='M84 6C99 8 91 -10 115 0C116 0 119 4 118 11C117 19 105 23 76 31C52 37 44 12 43 0C43 -4 45 -13 54 -13C64 -15 69 4 84 6Z'
					fill='#089AFFCC'
				>
					<animate
						attributeName='d'
						values='M84 6C99 8 91 -10 115 0C116 0 119 4 118 11C117 19 105 23 76 31C52 37 44 12 43 0C43 -4 45 -13 54 -13C64 -15 69 4 84 6Z;M84 6C99 18 101 -10 125 10C126 10 129 -24 118 11C117 -9 105 13 76 31C52 37 44 12 43 0C43 -4 45 -13 54 -13C64 -15 69 4 84 6Z;M84 6C99 8 91 -20 115 0C116 0 119 4 118 11C117 19 105 23 76 31C52 37 44 12 43 0C43 -14 35 -13 54 -13C64 -15 69 4 84 6Z'
						dur='17s'
						repeatCount='indefinite'
					/>
				</path>
				<path
					d='M84 6C99 8 91 -10 115 0C116 0 119 4 118 11C117 19 105 23 76 31C52 37 44 12 43 0C43 -4 45 -13 54 -13C64 -15 69 4 84 6Z'
					fill='#389AFF44'
				>
					<animate
						attributeName='d'
						values='M84 6C99 8 91 -10 115 0C116 0 119 4 118 11C117 19 105 23 76 31C52 37 44 12 43 0C43 -4 45 -13 54 -13C64 -15 69 4 84 6Z;M84 6C99 18 101 -10 125 10C126 10 129 -24 118 11C117 -9 105 13 76 31C52 37 44 12 43 0C43 -4 45 -13 54 -13C64 -15 69 4 84 6Z;M84 6C99 8 91 -20 115 0C116 0 119 4 118 11C117 19 105 23 76 31C52 37 44 12 43 0C43 -14 35 -13 54 -13C64 -15 69 4 84 6Z'
						dur='8s'
						repeatCount='indefinite'
					/>
				</path>

				<circle cx={45} cy={6} r={27} fill='#011EFBCC'>
					<animate
						attributeName='r'
						values='27;40;27'
						dur='13s'
						repeatCount='indefinite'
					/>
				</circle>
				<path
					d='M52 35C61 34 61 19 60 16L53 8L-1 -12L-42 28C-42 44 -38 78 -12 89C18 103 -8 65 10 59C30 53 27 55 34 51C41 47 42 36 52 35Z'
					fill='#FFCC45CC'
				>
					<animate
						attributeName='d'
						values='M52 35C61 34 61 19 60 16L53 8L-1 -12L-42 28C-42 44 -38 78 -12 89C18 103 -8 65 10 59C30 53 27 55 34 51C41 47 42 36 52 35Z;M62 35C51 64 71 29 20 16L43 18L-1 -12L-42 38C-42 44 -38 68 -12 89C18 103 4 65 10 49C40 53 37 55 34 51C31 67 42 39 52 35Z;M52 35C61 34 61 19 60 16L53 8L-1 -12L-42 28C-42 44 -38 78 -12 89C18 103 -8 65 10 59C30 53 27 55 34 51C41 47 42 36 52 35Z'
						dur='20s'
						repeatCount='indefinite'
					/>
				</path>
				<circle cx={45} cy={20} r={27} fill='#011EFB44'>
					<animate
						attributeName='r'
						values='27;40;27'
						dur='13s'
						repeatCount='indefinite'
					/>
				</circle>
				<circle cx={-10} cy={50} r={17} fill='#089AFF77'>
					<animate
						attributeName='r'
						values='17;35;17;35;17'
						dur='20s'
						repeatCount='indefinite'
					/>
					<animate
						attributeName='cy'
						values='60;30;60'
						dur='20s'
						repeatCount='indefinite'
					/>
				</circle>
			</g>

			<defs>
				<clipPath id='clip0'>
					<rect width={100} height={100} fill='white' />
				</clipPath>
			</defs>
			<filter id='n' x='0' y='0'>
				<feTurbulence
					type='fractalNoise'
					baseFrequency='20'
					stitchTiles='stitch'
				/>
			</filter>
			<rect width={100} height={100} fill='#000024' filter='url(#n)' opacity={0.8}/>
		</svg>
	);
});

export { Splash };

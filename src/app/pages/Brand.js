import { Helmet } from 'react-helmet';
import { Section, Text, Space, PageIcon } from '../Symbols.js';

function setClipboard(text) {
	var type = 'text/plain';
	var blob = new Blob([text], { type });
	var data = [new window.ClipboardItem({ [type]: blob })];
	navigator.clipboard.write(data);
}

const Brand = () => (
	<>
		<Helmet>
			<title>Brand – Design at UCI</title>
		</Helmet>
		<Section className='page short'>
			<Text size='XXL'>Branding Guidelines</Text>
			<Space block h='32' />
			<div className='flex top left spaceChildrenSmall' id='palette'>
				<Text size='L'>Colors</Text>
				<Text className='color gray'>
					Click to copy the HEX color code
				</Text>
				<Space h='16' />
				<div
					className='flex row wrap top left'
					style={{ margin: '-8px' }}
				>
					{[
						{ color: '#000024', light: true, name: 'Black' },
						{ color: '#089AFF', light: true, name: 'Blue' },
						{ color: '#FC593D', light: true, name: 'Orange' },
						{ color: '#ff9ff4', light: false, name: 'Pink' },
						{ color: '#FFCC45', light: false, name: 'Yellow' },
						{ color: '#2ADB6A', light: false, name: 'Green' },
						{ color: '#FC123D', light: true, name: 'Red' },
						{
							color: '#011EFB',
							light: true,
							name: 'Ultraviolet',
						},
						{ color: '#7A7A8D', light: true, name: 'Gray' },
						{ color: '#E4E4E6', light: false, name: 'Silver' },
						{ color: '#CEF2FF', light: false, name: 'Sky' },
						{ color: '#ffdfd9', light: false, name: 'Peach' },
						{ color: '#ffe1fb', light: false, name: 'Blush' },
						{ color: '#d1ffe1', light: false, name: 'Lime' },
					].map((item, i) => {
						return (
							<div
								className='item flex'
								style={{
									background: item.color,
									width: '128px',
									height: '128px',
									margin: '8px',
									borderRadius: '128px',
								}}
								onClick={() => {
									setClipboard(item.color);
								}}
							>
								<Text
									style={{
										color: item.light ? 'white' : 'black',
									}}
								>
									{item.color}
								</Text>
								<Text
									size='S'
									style={{
										color: item.light ? 'white' : 'black',
										opacity: '0.62',
									}}
								>
									{item.name}
								</Text>
							</div>
						);
					})}
				</div>
			</div>
			<style>{`
                #palette .item {
                    cursor: pointer;
                    transition-duration: 0.8s;
                    transition-timing-function: cubic-bezier(.21,1.53,.25,1);
                }
                #palette .item:active {
                    transition-duration: 0s;
                    transform: perspective(128px) scale(1.08);
                    box-shadow: 0 0 0 2px var(--white), 0 0 0 4px var(--blue);
                }
            `}</style>
			<Space block h='32' />
			<div className='flex left spaceChildrenSmall'>
				<Text size='L'>Symbols</Text>
				<Text className='color gray'>Click to download</Text>
			</div>
			<div className='flex row wrap top left' style={{ margin: '-8px' }}>
				{[
					{ name: 'logo.svg' },
					{ name: 'logo-silhouette.svg' },
					{ name: 'logo-white.svg' },
					{ name: 'logo-minimal.svg' },
					{ name: 'logo-circle-profile.svg' },
					{ name: 'industry-logo.svg' },
					{ name: 'designathon-logo.svg' },
					{ name: 'pt-logo.svg' },
					{ name: 'pt-logo-outline.svg' },
					{ name: 'workshop-icon.svg' },
				].map((item, i) => {
					return (
						<a
							download
							href={`/static/file/${item.name}`}
							className='card S item flex fill gray'
							style={{ width: '192px', margin: '8px' }}
						>
							<Space h='8' />
							<div
								style={{
									background: `url(/static/file/${item.name}) center/contain no-repeat`,
									width: '100%',
									height: '64px',
									filter: 'drop-shadow(0 4px 12px #00002420)',
								}}
							/>
							<Space h='16' />
							<Text size='S' className='color gray'>
								{item.name}
							</Text>
						</a>
					);
				})}
			</div>
			<Space block h='32' />
			<div className='flex left spaceChildrenSmall'>
				<Text size='L'>Font</Text>
				<Text className='color gray'>
					Italics allowed, use stylistic sets when possible.
				</Text>
			</div>
			<div className='split2'>
				<div className='flex left shadow card L spaceChildrenSmall'>
					<Text size='XL'>DM Sans Medium</Text>
					<a
						href='https://fonts.google.com/specimen/DM+Sans'
						target='noreferer'
					>
						<Text className='color blue'>
							Google Fonts{' '}
							<PageIcon
								color='var(--blue)'
								style={{ height: '24px' }}
							/>
						</Text>
					</a>
					<Text className='color orange'>Use stylistic Set 2</Text>
					<Text className='color orange'>Use stylistic Set 3</Text>
				</div>
				<div className='flex left shadow card L spaceChildrenSmall'>
					<Text size='XL' className='bold'>
						DM Sans Bold
					</Text>
					<a
						href='https://fonts.google.com/specimen/DM+Sans'
						target='noreferer'
					>
						<Text className='color blue'>
							Google Fonts{' '}
							<PageIcon
								color='var(--blue)'
								style={{ height: '24px' }}
							/>
						</Text>
					</a>
					<Text className='color orange'>Use stylistic Set 2</Text>
					<Text className='color orange'>Use stylistic Set 3</Text>
				</div>
			</div>
		</Section>
	</>
);

export default Brand;

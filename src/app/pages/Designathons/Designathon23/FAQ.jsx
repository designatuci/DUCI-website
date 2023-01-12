const { Text } = require('app/components');
const { Section } = require('app/Symbols');
const { faqs } = require('./FAQQuestions');

const FAQ = () => {
	return (
		<Section id='s-faq'>
			<Text size='XL'>FAQ</Text>
			<div className='split2 tc13'>
				<div className='spaceChildren'>
					<Text>
						Join the live conversation on the{' '}
						<a
							target='noreferer'
							href='https://discord.gg/mY8QSNaEtb'
							style={{ textDecoration: 'underline' }}
						>
							Impact23 Discord
						</a>{' '}
						for more help!
					</Text>
				</div>
				<div
					style={{ marginTop: '-16px' }}
					className='spaceChildrenSmall'
				>
					{faqs.map(item => {
						return (
							// <Toggle
							// 	closed={
							<div className='faqitem gray card S flex left spaceChildrenSmall'>
								<div className='flex row top'>
									<Icon
										src='d22-arrow.svg'
										w='18'
										h='18'
										style={{
											marginRight: '16px',
										}}
									/>
									<Text className='bold'>{item.q}</Text>
								</div>
							</div>
							// 	}
							// 	opened={
							// 		<div className='faqitem open card S flex left spaceChildrenSmall'>
							// 			<div className='flex row top'>
							// 				<Icon
							// 					src='d22-arrow.svg'
							// 					w='18'
							// 					h='18'
							// 					style={{
							// 						marginRight: '16px',
							// 					}}
							// 				/>
							// 				<Text className='bold'>
							// 					{item.q}
							// 				</Text>
							// 			</div>
							// 			<Text
							// 				className='color gray'
							// 				style={{
							// 					paddingLeft: '34px',
							// 				}}
							// 			>
							// 				{item.a}
							// 			</Text>
							// 		</div>
							// 	}
							// />
						);
					})}
				</div>
			</div>
		</Section>
	);
};

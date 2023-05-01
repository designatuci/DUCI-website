import cn from './Banner.module.scss';

const APPLICATION_FORM = 'https://forms.gle/e8zAUSGniWopQDNP9';

function Banner() {
	return (
		<div className={cn.banner}>
			<p>
				Interested in becoming part of Design at UCI&apos;s Board? Submit a{' '}
				<a
					target='_blank'
					rel='noreferrer'
					className='color ultraviolet'
					href={APPLICATION_FORM}
				>
					board application
				</a>{' '}
				by May 7th.
			</p>
		</div>
	);
}

export default Banner;

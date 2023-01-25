import cn from './SectionNavigation.module.scss';

const SectionNavigation = () => {
	const scrollToSection = id => {
		window.scrollTo({
			behavior: 'smooth',
			top: document.getElementById(id).offsetTop - 80,
		});
	};

	const days = (new Date('Tue Jan 26 2023 21:23:13 GMT-0800 (Pacific Standard Time)') - new Date()) / 1000 / 60 / 60  / 24;
	const hours = (new Date('Tue Jan 26 2023 21:23:13 GMT-0800 (Pacific Standard Time)') - new Date()) / 1000 / 60 / 60 % 24 ;
	const minutes = (new Date('Tue Jan 26 2023 21:23:13 GMT-0800 (Pacific Standard Time)') - new Date()) / 1000 / 60 % 60;

	return (
		<div className={cn.container}>
			{[
				{ label: 'Overview', id: 's-overview' },
				{ label: 'Judges & Speakers', id: 's-people' },
				{ label: 'Rules', id: 's-rules' },
				{ label: 'Prizes', id: 's-prizes' },
				{ label: 'Schedule', id: 's-schedule' },
				{ label: 'FAQ', id: 's-faq' },
			].map(item => (
				<a
					className={cn.item}
					href={`#${item.label.toLowerCase()}`}
					onClick={() => {
						scrollToSection(item.id);
					}}
				>
					<p>{item.label}</p>
				</a>
			))}
			<a
				className={cn.item}
				style={{backgroundColor: 'var(--yellow)', color: 'black'}}
				target="_blank"
				rel="noopener noreferrer"
				href="https://forms.gle/zShcJXN4hVtKoYb46"
			>
				<p>Registration Form</p>
			</a>
		</div>
	);
};

export { SectionNavigation };

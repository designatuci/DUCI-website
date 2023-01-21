import cn from './SectionNavigation.module.scss';

const SectionNavigation = () => {
	const scrollToSection = id => {
		window.scrollTo({
			behavior: 'smooth',
			top: document.getElementById(id).offsetTop - 80,
		});
	};

	return (
		<div className={cn.container}>
			{[
				{ label: 'Overview', id: 's-overview' },
				{ label: 'Judges', id: 's-judges' },
				{ label: 'Workshop Hosts', id: 's-workshop-hosts' },
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
		</div>
	);
};

export { SectionNavigation };

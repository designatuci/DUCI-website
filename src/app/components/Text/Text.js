import clsx from 'clsx';
import cn from './Text.module.scss';

const Text = ({ children, className, size, color, icon, ...props }) => (
	<div
		className={clsx(
			cn.container,
			cn[size],
			cn[color],
			icon === 'right' && cn.pagelink,
			className
		)}
		{...props}
	>
		{children}
	</div>
);

export default Text;

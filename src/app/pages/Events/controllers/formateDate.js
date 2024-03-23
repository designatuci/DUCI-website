function formatRelativeDate(date) {
	let now = new Date();
	let time = new Date(date);
	let diff = now - time;
	if (diff < 0) {
		diff = Math.abs(diff);
		const days = Math.round(diff / (1000 * 60 * 60 * 24));
		if (days === 0) {
			return `Today`;
		} else if (days <= 1) {
			return `In ${days} day`;
		} else if (days <= 7) {
			return `In ${days} days`;
		} else {
			let weeks = Math.round(days / 7);
			if (weeks === 1) {
				return `In ${weeks} week`;
			} else {
				return `In ${weeks} weeks`;
			}
		}
	} else {
		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		if (days === 0) {
			return `Hours ago`;
		} else if (days <= 1) {
			return `${days} day ago`;
		} else if (days < 7) {
			return `${days} days ago`;
		} else if (days < 30) {
			let weeks = Math.round(days / 7);
			if (weeks === 1) {
				return `${weeks} week ago`;
			} else {
				return `${weeks} weeks ago`;
			}
		} else if (days < 120) {
			let months = Math.round(days / 30);
			if (months === 1) {
				return `${months} month ago`;
			} else {
				return `${months} months ago`;
			}
		} else if (days < 365) {
			return "Several months ago";
		} else {
			return "Over a year ago";
		}
	}
}

export default formatRelativeDate;

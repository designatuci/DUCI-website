import {
	merch_sticker_boba,
	merch_sticker_bobaeater,
	merch_sticker_designIsMyPassion,
	merch_sticker_frozenEater,
	merch_sticker_penTool,
	merch_sticker_rainbowHeartPenTool,
	merch_sticker_uc_irvine,
	merch_shirt_embroidered,
	merch_shirt_longSleeved,
	merch_sticker_f20_heart,
	merch_sticker_f20_boba,
} from 'assets/images/merch';

const MERCH_LIST = [
	{
		name: 'Winter 2023 Merch',
		description:
			"Unisex, ultra-cotton black shirts by Gildan with a screen-printed 'design' and thick, durable 2 in. x 2 in. vinyl stickers.",
		inStock: true,
		buyLink: 'https://forms.gle/TJNv9zixcZehMBXq5',
		items: [
			{
				name: 'Long-Sleeved DAUCI Shirt',
				price: 22,
				photo: merch_shirt_longSleeved,
			},
			{
				name: 'Bobaeater',
				price: 3,
				photo: merch_sticker_bobaeater,
			},
			{
				name: 'DAUCI is My Passion',
				price: 3,
				photo: merch_sticker_designIsMyPassion,
			},
		],
	},
	{
		name: 'Spring 2022 Merch',
		path: 'spring-2022',
		description:
			'Embroidered unisex shirts and high quality, weather-proof vinyl items with exclusive, original designs.',
		inStock: false,
		items: [
			{
				name: 'UC Irvine Embroidered T-Shirt',
				price: 30,
				note: {
					type: 'link',
					href: '/shirt22',
					content: 'View Shirt',
				},
				photo: merch_shirt_embroidered,
			},
			{
				name: '"uc irvine sticker"',
				price: 3.5,
				photo: merch_sticker_uc_irvine,
			},
			{
				name: 'Rainbow Heart Pen Tool',
				price: 3.5,
				photo: merch_sticker_rainbowHeartPenTool,
			},
		],
	},
	{
		name: 'Fall-Winter 2021 Stickers',
		path: 'fall-winter-2021',
		description:
			'High quality, weather-proof vinyl items with exclusive, original designs. Approximately 3x3 inches.',
		inStock: false,
		items: [
			{
				note: 'Holographic',
				name: 'Chill Out',
				photo: merch_sticker_frozenEater,
			},
			{
				name: 'Bobaeater',
				price: 3,
				photo: merch_sticker_bobaeater,
			},
			{
				name: 'Design is My Passion',
				price: 3,
				photo: merch_sticker_designIsMyPassion,
			},
			{
				name: 'D@UCI Boba',
				price: 3,
				photo: merch_sticker_boba,
			},
		],
	},
	{
		name: '2020 Stickers',
		path: 'fall-2020',
		description: '',
		inStock: false,
		items: [
			{
				name: 'I Heart Design',
				price: 3,
				photo: merch_sticker_f20_heart,
			},
			{
				name: 'Pen Tool',
				price: 3,
				photo: merch_sticker_penTool,
			},
			{
				name: 'Boba',
				price: 3,
				photo: merch_sticker_f20_boba,
			},
		],
	},
];

export default MERCH_LIST;

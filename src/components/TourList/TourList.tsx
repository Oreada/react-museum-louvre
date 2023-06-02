import { TourCard } from '../TourCard/TourCard';
import style from './TourList.module.css';
import CardImage1 from './royal-palace.svg';
import CardImage2 from './denon-wing.svg';
import CardImage3 from './colonnade.svg';
import CardImage4 from './greek-hall.svg';
import CardImage5 from './mona-lisa.svg';
import CardImage6 from './night-palace.svg'

let cards = [
	{
		id: 'CardImage1',
		image: CardImage1,
		title: 'Royal Palace',
	},
	{
		id: 'CardImage2',
		image: CardImage2,
		title: 'Denon Wing',
	},
	{
		id: 'CardImage3',
		image: CardImage3,
		title: 'Colonnade Perrault',
	},
	{
		id: 'CardImage4',
		image: CardImage4,
		title: 'Greek hall',
	},
	{
		id: 'CardImage5',
		image: CardImage5,
		title: 'Mona Lisa',
	},
	{
		id: 'CardImage6',
		image: CardImage6,
		title: 'Night Palace',
	},
];

export const TourList = () => {
	return (
		<ul className={style.tourlist}>
			{
				cards.map((card) => <TourCard key={card.id} image={card.image} title={card.title} />)
			}
		</ul>
	)
};

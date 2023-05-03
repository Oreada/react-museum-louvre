import Carousel from "react-material-ui-carousel";
import { SlideImg } from "../SlideImg/SlideImg";
import SlideOne from './slide-1.jpg';
import SlideTwo from './slide-2.jpg';
import SlideThree from './slide-3.jpg';
import SlideFour from './slide-4.jpg';
import SlideFive from './slide-5.jpg';

export const ImagesSlider = () => {
	let items = [
		{
			image: SlideOne,
		},
		{
			image: SlideTwo,
		},
		{
			image: SlideThree,
		},
		{
			image: SlideFour,
		},
		{
			image: SlideFive,
		},
	]

	return (
		<Carousel
		// next={(next, active) => { console.log(`we left ${active}, and are now at ${next}`); }}
		// prev={(prev, active) => { console.log(`we left ${active}, and are now at ${prev}`); }}
		>
			{
				items.map((item, i) => <SlideImg key={i} item={item} />)
			}
		</Carousel >
	)
};

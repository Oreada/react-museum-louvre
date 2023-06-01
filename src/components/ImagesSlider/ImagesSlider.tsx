import Carousel from "react-material-ui-carousel";
import SquareIcon from '@mui/icons-material/Square';
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
	];

	return (
		<Carousel
			swipe={true}
			autoPlay={true}
			IndicatorIcon={< SquareIcon />}
			indicatorIconButtonProps={{
				style: {
					padding: '12.5px',
					color: 'white',
				}
			}}
			activeIndicatorIconButtonProps={{
				style: {
					color: '#9d8665',
				}
			}}
			indicatorContainerProps={{
				style: {
					textAlign: 'right',
					paddingRight: '200px',
				}
			}}
		>
			{
				items.map((item, i) => <SlideImg key={i} item={item} />)
			}
		</Carousel>
	)
};

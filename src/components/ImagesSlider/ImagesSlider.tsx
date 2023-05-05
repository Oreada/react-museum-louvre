import Carousel from "react-material-ui-carousel";
import SquareIcon from '@mui/icons-material/Square';
import { SlideImg } from "../SlideImg/SlideImg";
import SlideOne from './slide-1.jpg';
import SlideTwo from './slide-2.jpg';
import SlideThree from './slide-3.jpg';
import SlideFour from './slide-4.jpg';
import SlideFive from './slide-5.jpg';
import style from './ImagesSlider.module.css';

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
		<div className={style.container}>
			<div className={style.text}>
				<h2 className={style.title}>Welcome to&nbsp;the Louvre</h2>
				<h3 className={style.subtitle}>From the castle to the museum</h3>
				<button className={style.button} type="button">Discover the Louvre</button>
			</div>
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
		</div>
	)
};

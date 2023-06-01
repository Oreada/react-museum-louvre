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
	];

	return (
		<div className={style.container}>
			<div className={style.text}>
				<h2 className={style.title}>Welcome to&nbsp;the Louvre</h2>
				<h3 className={style.subtitle}>From the castle to the museum</h3>
				<a
					href="https://www.google.com/maps/@48.8618159,2.3366818,3a,75y,81.55h,73.4t/data=!3m7!1e1!3m5!1sAF1QipOVxZQuSy3Bx9T_HpH_7FtBHDTXvI6SF-A10ocT!2e10!3e12!7i5472!8i2736"
					className={style.button}
					target="_blank"
					rel="noreferrer"
				>
					Discover the Louvre
				</a>
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

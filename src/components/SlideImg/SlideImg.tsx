import style from './SlideImg.module.css';

export interface Slide {
	image: string;
}

export interface SlideProps {
	item: Slide;
}

export const SlideImg = ({ item }: SlideProps) => {
	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<div className={style.image} style={{
					backgroundImage: `linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.5) 16.19%, rgba(0, 0, 0, 0) 30.73%), url(${item.image})`
				}} />
			</div>
		</div>
	);
};

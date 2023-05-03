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
				<div className={style.text}>
					<h2 className={style.title}>Welcome to&nbsp;the Louvre</h2>
					<h3 className={style.subtitle}>From the castle to the museum</h3>
					<button className={style.button} type="button">Discover the Louvre</button>
				</div>
				<img className={style.image} src={item.image} alt="Painting from Louvre" />
			</div>
		</div>
	);
};

import style from './TourCard.module.css';

export type TourCardProps = {
	image: string;
	title: string;
};

export const TourCard = ({ image, title }: TourCardProps) => {
	return (
		<div className={style.card}>
			<img className={style.image} src={image} alt="Louvre view" />
			<div className={style.body}>
				<h3 className={style.title}>{title}</h3>
				<div className={style.info}>
					<p className={style["info-item"]}>360° Virtual Tour</p>
					<p className={style["info-item"]}>Google Street Panorama View</p>
				</div>
			</div>
		</div>
	)
};

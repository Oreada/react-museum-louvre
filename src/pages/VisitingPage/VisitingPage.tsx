import { TourList } from '../../components/TourList/TourList';
import style from './VisitingPage.module.css';

export const VisitingPage = () => {
	return (
		<div className={style.main}>
			<div className={style.container}>
				<h2 className={style.title}>Virtual&nbsp;tour</h2>
				<TourList />
			</div>
		</div>
	)
};

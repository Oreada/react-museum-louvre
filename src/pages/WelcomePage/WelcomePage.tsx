import { ImagesSlider } from '../../components/ImagesSlider/ImagesSlider';
import style from './WelcomePage.module.css';

export const WelcomePage = () => {
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
			<ImagesSlider />
		</div>
	)
};

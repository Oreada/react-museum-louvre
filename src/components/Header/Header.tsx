import style from './Header.module.css';
import { ReactComponent as Logo } from './logo-louvre.svg';

export const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.container}>
				<nav className={style.row}>
					<div className={style.logo}>
						<Logo className={style["logo-image"]} />
						<h1 className={style["logo-title"]}>Louvre</h1>
					</div>
					<div className={style.pages}>
						<div className={style.link}>Visiting</div>
						<div className={style.link}>Explore</div>
						<div className={style.link}>Video</div>
						<div className={style.link}>Gallery</div>
						<div className={style.link}>Tickets</div>
						<div className={style.link}>Contacts</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

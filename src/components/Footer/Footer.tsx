/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './Footer.module.css';
import { ReactComponent as Logo } from './logo-louvre.svg';
import { ReactComponent as Youtube } from './youtube.svg';
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Facebook } from './facebook.svg';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as Pinterest } from './pinterest.svg';

export const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.container}>
				<div className={style.row}>
					<div className={style.logo}>
						<Logo className={style["logo-image"]} />
						<h2 className={style["logo-title"]}>Louvre</h2>
					</div>

					<div className={style.body}>
						<div className={style.info}>
							<a className={style["info-link"]}
								href="https://www.louvre.fr/en/the-louvre-in-france-and-around-the-world" target="_blank" rel="noreferrer">
								The Louvre in France and around the world
							</a>
							<a className={style["info-link"]}
								href="https://www.louvre.fr/en/visit/museum-rules" target="_blank" rel="noreferrer">
								Visitor rules
							</a>
							<a className={style["info-link"]}
								href="https://www.louvre.fr/en/loan-and-long-term-loan-requests" target="_blank" rel="noreferrer">
								Loans and long-term loans
							</a>
						</div>

						<div className={style.social}>
							{/* TODO:разобраться! Пока оставила пустые href + сверху eslint-disable */}
							<a href="" className={style["social-link"]}>
								<Youtube className={style["social-image"]} />
							</a>
							<a href="" className={style["social-link"]}>
								<Instagram className={style["social-image"]} />
							</a>
							<a href="" className={style["social-link"]}>
								<Facebook className={style["social-image"]} />
							</a>
							<a href="" className={style["social-link"]}>
								<Twitter className={style["social-image"]} />
							</a>
							<a href="" className={style["social-link"]}>
								<Pinterest className={style["social-image"]} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

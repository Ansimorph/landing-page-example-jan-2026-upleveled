import styles from "./Header.module.scss"
import logo from './logo-colors.svg';
import LinkButton from "../LinkButton/LinkButton";

export default function Header() {
    return (
        <header>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.login}>
                        <LinkButton variant="secondary" href="/login">
                            Login
                        </LinkButton>
                    </li>
                    <li className={styles.logo}>
                        <a href="/">
                            <img src={logo} alt="jive" />
                        </a>
                    </li>
                    <li className={styles.signup}>
                        <LinkButton href="/signup">
                            Signup
                        </LinkButton>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
import styles from "./LinkButton.module.scss"

export default function LinkButton({children, variant = "primary", size = "normal" , ...rest}) {
    return (
        <a className={`${styles.root} ${variant === "primary" ? styles.primary : styles.secondary} ${size === "big" ? styles.big : ""}`} {...rest}>
            {children}
        </a>)
}
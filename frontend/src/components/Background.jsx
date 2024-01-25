import styles from "@styles";

export default function Background({ color, opacity }) {
    return (
        <div className={styles.all.background} style={{ background: color || "var(--background-color)" }}>
            <div className={styles.all.backgroundBlooks} style={{ opacity: opacity || "var(--background-opacity)" }} />
        </div>
    )
}
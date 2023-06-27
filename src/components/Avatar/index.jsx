import styles from "./style.module.css";

export function Avatar({ src, hasBorder=true }) {
  return (
    <img
      className={hasBorder ? styles.avatarHasBorder : styles.avatar}
      src={src}
      alt="image-profile"
    />
  )
}
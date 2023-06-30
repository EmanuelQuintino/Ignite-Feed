import styles from "./style.module.css";

type AvatarProps = {
  src: string;
  hasBorder?: boolean;
};

export function Avatar({ src, hasBorder = true }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarHasBorder : styles.avatar}
      src={src}
      alt="image-profile"
    />
  )
}
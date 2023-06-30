import styles from "./style.module.css";

type AvatarProps = {
  hasBorder?: boolean;
  src: string;
};

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarHasBorder : styles.avatar}
      alt="image-profile"
      {...props}
    />
  )
}
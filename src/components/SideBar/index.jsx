import styles from "./style.module.css";

export function SideBar() {
  return (
    <aside className={styles.aside}>
      <img
        className={styles.wallpaper}
        src="./images/wallpaper.png"
        alt="wallpaper"
      />

      <div className={styles.profile}>
        <strong>Emanuel Quintino</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
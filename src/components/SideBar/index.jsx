import { PencilLine } from "phosphor-react"
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
        <img
          className={styles.avatar}
          src="https://github.com/EmanuelQuintino.png"
          alt="img-profile"
        />

        <strong>Emanuel Quintino</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
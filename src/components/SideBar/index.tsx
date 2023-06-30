import { PencilLine } from "phosphor-react"
import styles from "./style.module.css";
import { Avatar } from "../Avatar";

export function SideBar() {
  return (
    <aside className={styles.aside}>
      <img
        className={styles.wallpaper}
        src="./images/wallpaper.png"
        alt="wallpaper"
      />

      <div className={styles.profile}>
        <Avatar src={"https://github.com/EmanuelQuintino.png"}/>
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
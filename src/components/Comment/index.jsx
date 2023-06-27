import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./style.module.css";

export function Comment() {
  return (
    <article className={styles.comment}>
      <img src="https://github.com/EmanuelQuintino.png" alt="image-profile" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Emanuel Quintino</strong>
              <time title="26/06/2023 às 21:30h" datatype="26-06-2023 21:30:23">Publicado há 1h</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </article>
  )
}
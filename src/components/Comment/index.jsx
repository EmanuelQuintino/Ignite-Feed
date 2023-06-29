import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./style.module.css";
import { Avatar } from "../Avatar";

export function Comment({ avatarURL, comment }) {
  return (
    <article className={styles.comment}>
      <Avatar src={avatarURL} hasBorder={false} />

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
          <p>{comment}</p>
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
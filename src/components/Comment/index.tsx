import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./style.module.css";
import { Avatar } from "../Avatar";
import { useState } from "react";

type CommentProps = {
  avatarURL: string;
  comment: string;
  onDeleteComment: (comment: string) => void;
};

export function Comment({ avatarURL, comment, onDeleteComment }: CommentProps) {
  const [countLike, setCountLike] = useState(0);

  const handleDeleteComment = () => onDeleteComment(comment);
  const handleCountLike = () => setCountLike(prevState => prevState + 1);

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

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleCountLike}>
            <ThumbsUp />
            Aplaudir <span>{countLike}</span>
          </button>
        </footer>
      </div>
    </article>
  )
}
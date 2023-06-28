import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./style.module.css";
import { Tree } from "phosphor-react";

export function Post({ author, content, publishedAt }) {
  const formatDate = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h", {
    locale: ptBR,
  });

  const formatDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: Tree,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formatDate} datatype={publishedAt.toISOString()}>{formatDateRelativeToNow}</time>
      </header>

      <main className={styles.content}>
        {content.map(line => {
          console.log(line);
          if (line.type === "paragraph") {
            return <p>{line.content}</p>
          } else if (line.type === "link") {
            return <p><a href="#">{line.content}</a></p>
          }
        })}

        <p className={styles.hashtags}>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </main>

      <form className={styles.commentForm}>
        <label htmlFor="comment">Deixe seu comentário</label>
        <textarea id="comment" placeholder="Deixe seu comentário"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment avatarURL={"https://github.com/maykbrito.png"} />
        <Comment avatarURL={"https://github.com/rodrigorgtic.png"} />
        <Comment avatarURL={"https://github.com/jakeliny.png"} />
        <Comment avatarURL={"https://github.com/diego3g.png"} />
      </div>
    </article>
  )
}
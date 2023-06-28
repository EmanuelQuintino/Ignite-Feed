import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./style.module.css";

export function Post({ author, content, publishedAt }) {
  const formatDate = publishedAt.toLocaleString("pr-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
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

        <time title={`${formatDate}h`} datatype="26-06-2023 21:30:23">dafadf</time>
      </header>

      <main className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>👉 <a href="#">jane.design/doctorcare</a></p>

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
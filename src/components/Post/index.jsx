import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./style.module.css";
import { Tree } from "phosphor-react";
import { useState } from "react";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const formatDate = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h", {
    locale: ptBR,
  });

  const formatDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: Tree,
  });

  function handleAddComment(event) {
    event.preventDefault();
    setComments([event.target.commentArea.value, ...comments]);
    setNewComment("");
  };

  function deleteComment(deteteComment) {
    setComments(prevState => prevState.filter(comment => comment !== deteteComment));
  };

  function handleChangeNewComment(event) {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  };

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Campo obrigatório");
  };

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
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}

        <p className={styles.hashtags}>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </main>

      <form className={styles.commentForm} onSubmit={handleAddComment}>
        <label htmlFor="comment">Deixe seu comentário</label>
        <textarea
          id="comment"
          placeholder="Deixe seu comentário"
          name="commentArea"
          value={newComment}
          onChange={handleChangeNewComment}
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment
            key={comment}
            avatarURL={"https://github.com/diego3g.png"}
            comment={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
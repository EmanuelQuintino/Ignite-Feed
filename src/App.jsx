import { Header } from "./components/Header";
import "./global.css";
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import { posts } from "./utils/posts";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}

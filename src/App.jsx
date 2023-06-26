import { Header } from "./components/Header";
import "./global.css";
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

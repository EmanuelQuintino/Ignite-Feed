import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { SideBar } from "./components/SideBar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>
          <h3>Main</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur laboriosam pariatur ipsam vel. Voluptatibus, modi deleniti? Minima doloremque suscipit omnis similique dolorum veniam vel, temporibus, consectetur reiciendis, distinctio commodi!
        </main>
      </div>
    </>
  )
}

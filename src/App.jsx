import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './styles/App.module.css'
import './styles/global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Eu mesma"
            authorInfo="Web Developer"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id veniam officiis dignissimos esse iusto corporis fuga nobis quidem error iure cupiditate vero, culpa autem ipsa ratione. Officiis velit similique reprehenderit!"
          />
          <Post
            author="Some else"
            authorInfo="Web Developer"
            content="Só mais um post entre milhões na internet"
          />
          <Post
            author="Some daqui"
            authorInfo="Web Developer"
            content="Se a filha de tereza é filha da mãe da minha filha, o que eu sou de Tereza?"
          />
        </main>
      </div>
    </div>
  )
}


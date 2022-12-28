import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './styles/App.module.css'
import './styles/global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/jemluz.png",
      name: "Jemima Luz",
      role: "Software Analist at @Levva"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jems.projects/ignilefeed' },
    ],
    publishedAt: new Date('2022-12-20')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/anotherjemluz.png",
      name: "Jemima Trevas",
      role: "Baba ovo da @ Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'link', content: '👉 anotherjems.projects/venha-sacana' },
    ],
    publishedAt: new Date('2022-12-26 12:00:00')
  }
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(
              post => (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            )
          }
        </main>
      </div>
    </div>
  )
}


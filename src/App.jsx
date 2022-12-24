import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post author="Some else" />
      <Post author="Some daqui" />
      <Post author="Zé ninguém" />
    </div>
  )
}

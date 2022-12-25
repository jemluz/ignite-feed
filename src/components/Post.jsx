import { Comment } from './Comment'
import styles from '../styles/Post.module.css'
import { Avatar } from './Avatar'

// props: { author: "" }
export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}                                                                    >
          <Avatar hasBorder photoUrl="https://github.com/jemluz.png" />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.authorInfo}</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30" >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="">jems.design/ignilefeed</a> </p>
        <p>
          <a href="">#novoprojeto</a> {' '}
          <a href="">#nlw</a> {' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
          cols="30"
          rows="10"
        >

        </textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}

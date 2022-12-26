import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from '../styles/Post.module.css'

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein!?'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBr }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(
    publishedAt, { locale: ptBr, addSuffix: true }
  )

  function handleCreateNewComment() {
    event.preventDefault() // previne o redirecionamento para uma nova aba
    setComments([...comments, newCommentText]);
    setNewCommentText('');// limpa para não afetar o comentário seguinte
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder avatarUrl={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(
            line => {
              if (line.type === 'paragraph') {
                return <p key={line.content}>{line.content}</p>
              } else if (line.type === 'link') {
                return <p key={line.content}><a href="#">{line.content}</a></p>
              }
            }
          )
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
          cols="30"
          rows="10"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        >

        </textarea>

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          }
          )}
      </div>
    </article>
  )
}

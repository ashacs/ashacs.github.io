import Anecdote from '../Anecdote';
import { List, ListItem } from '../List';
import './index.css';

interface Book {
  title: string;
  author: string;
  quote: string;
  commentary?: string;
}

const BOOKS: Book[] = [
  {
    title: 'I Know Why the Caged Bird Sings',
    author: 'Maya Angelou',
    quote: 'There is no greater agony than bearing an untold story inside you.',
    commentary:
      'Itʼs no wonder that itʼs a classic. The clarity, wisdom, honesty, and levity that she shares with readers brings them in touch not just with her life but with their own lives. As I walk the streets of San Francisco, I now often find myself thinking of Maya Angelou. How lucky are we that she graced these streets and these pages?',
  },
  {
    title: 'Piranesi',
    author: 'Susanna Clarke',
    quote: 'The Beauty of the House is immeasurable; its Kindness infinite.',
    commentary:
      'Reading this novel was dreamlike. You donʼt know what world youʼre in, you donʼt know whatʼs happened to the protagonist, but you donʼt need to. May we all see the world as tenderly as Piranesi does.',
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    quote:
      'Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it.',
    commentary:
      'What is progress without understanding? What do we owe each other? I will always be in awe of Shelleyʼs talent and the anguish and beauty of the creatureʼs experience.',
  },
];

export function ContinuedReading() {
  return (
    <div className="continued-reading">
      <Anecdote>
        If youʼve enjoyed reading my resume (heck, even if you havenʼt!), please
        enjoy my suggestions for further reading. These are stories that touched
        my soul.
      </Anecdote>

      <List variant="bare">
        {BOOKS.map((book) => (
          <ListItem key={book.title} className="book-entry">
            <div className="book-body">
              <header className="book-header">
                <h3 className="book-title">{book.title}</h3>
                <span className="book-author">{book.author}</span>
              </header>
              <blockquote className="book-quote">
                <p>{book.quote}</p>
              </blockquote>
              <p className="book-commentary">{book.commentary}</p>
            </div>
          </ListItem>
        ))}
      </List>

      <p className="continued-reading-colophon">
        The world is on fire. Find love and strength in stories, and may we be
        loving and strong too.
      </p>
    </div>
  );
}

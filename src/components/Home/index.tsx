import { Awards } from '../Awards';
import { Education } from '../Education';
import { Experience } from '../Experience';
import { Skills } from '../Skills';
import { Values } from '../Values';
import { SectionTitle } from '../SectionTitle';
import './index.css';
import { ContinuedReading } from '../ContinuedReading';
import Anecdote from '../Anecdote';

export function Home() {
  return (
    <div className="home-container">
      <section>
        <SectionTitle>Authorʼs Note</SectionTitle>
        <Anecdote>
          Building UI satisfies my love of logic, but it also brings me closer
          to the user on the other side of the screen (thatʼs you! hello!).
          Software touches real people, so can we have a positive effect on
          them? I hope so.
        </Anecdote>
      </section>

      <section>
        <SectionTitle>Career Chapters</SectionTitle>
        <Experience />
      </section>

      <section>
        <SectionTitle>About the Author</SectionTitle>
        <Skills />
        <Values />
      </section>

      <section>
        <SectionTitle>Appendix</SectionTitle>
        <Awards />
        <Education />
      </section>

      <section>
        <SectionTitle>Continued Reading</SectionTitle>
        <ContinuedReading />
      </section>
    </div>
  );
}

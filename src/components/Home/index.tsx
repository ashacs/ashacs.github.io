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
          Welcome to my personal website. Iʼm a frontend-focused developer with
          a desire to work alongside thoughtful teammates on high-quality
          products.
        </Anecdote>
      </section>

      <section>
        <SectionTitle>Experience</SectionTitle>
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

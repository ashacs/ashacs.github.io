import { Awards } from '../Awards';
import { Education } from '../Education';
import { Experience } from '../Experience';
import { Skills } from '../Skills';
import { Values } from '../Values';
import { SectionTitle } from '../SectionTitle';
import './index.css';

export function Home() {
  return (
    <div className="home-container">
      <section className="authors-note">
        <SectionTitle>Author&apos;s Note</SectionTitle>
        <p className="authors-note-text">
          Welcome to my personal website. I&apos;m a frontend-focused developer with a desire to
          work alongside thoughtful teammates on high-quality products.
        </p>
      </section>

      <section className="experience">
        <SectionTitle>Experience</SectionTitle>
        <Experience />
      </section>

      <section className="about-the-author">
        <SectionTitle>About the Author</SectionTitle>
        <Skills />
        <Values />
      </section>

      <section className="appendix">
        <SectionTitle>Appendix</SectionTitle>
        <Awards />
        <Education />
      </section>
    </div>
  );
}

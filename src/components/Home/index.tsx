import { MyResume } from '../MyResume';
import './index.css';

export function Home() {
  return (
    <div className="home-container">
      <div className="speech-bubble">
        Welcome to my personal website! 👋 I’m a frontend-focused developer with a desire to work
        alongside thoughtful teammates on high-quality products.
      </div>

      <div className="home-resume-container">
        <MyResume />
      </div>
    </div>
  );
}

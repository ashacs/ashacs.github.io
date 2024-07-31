import { Resume, ResumeMainColumn, ResumeSideColumn } from "../Resume";
import { MyAwards } from "./MyAwards";
import { MyEducation } from "./MyEducation";
import { MyExperience } from "./MyExperience";
import { MySkills } from "./MySkills";
import { MyValues } from "./MyValues";

export function MyResume() {
  return (
    <Resume>
      <ResumeMainColumn>
        <MyExperience />
      </ResumeMainColumn>
      <ResumeSideColumn>
        <MySkills />
        <MyValues />
        <MyAwards />
        <MyEducation />
      </ResumeSideColumn>
    </Resume>
  );
}

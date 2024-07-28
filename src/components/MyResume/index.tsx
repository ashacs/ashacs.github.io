import { Resume } from "../Resume";
import { MyAwards } from "./MyAwards";
import { MyEducation } from "./MyEducation";
import { MyExperience } from "./MyExperience";
import { MySkills } from "./MySkills";
import { MyValues } from "./MyValues";

export function MyResume() {
  return (
    <Resume>
      <MyExperience />
      <MySkills />
      <MyValues />
      <MyAwards />
      <MyEducation />
    </Resume>
  );
}

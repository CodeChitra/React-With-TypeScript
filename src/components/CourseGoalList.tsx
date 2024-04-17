import { ReactNode } from "react";
import { type CourseGoalType } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};
const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no goals yet!</InfoBox>;
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You are collecting a lot of goals!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;

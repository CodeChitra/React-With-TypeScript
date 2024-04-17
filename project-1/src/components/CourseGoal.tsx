import { type FC, type PropsWithChildren, type ReactNode } from "react";

//! Defining Prop Types

//* Method-1
// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

//* Method-2
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

//! Using Prope Types

//* Method-1
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h1>{title}</h1>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

//* Method-2
function CourseGoal({ id, title, children, onDelete }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

export default CourseGoal;

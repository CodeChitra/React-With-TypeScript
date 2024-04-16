import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};
const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goalRef = useRef<HTMLInputElement | null>(null);
  const summaryRef = useRef<HTMLInputElement | null>(null);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const goal = goalRef.current!.value;
    const summary = summaryRef.current!.value;

    e.currentTarget.reset();
    onAddGoal(goal, summary);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" ref={summaryRef} />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewGoal;

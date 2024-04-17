import { useTimersContext } from "../store/timers-context";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = useTimersContext();
  return (
    <ul>
      {timers.map((timer) => (
        <Timer key={timer.name} {...timer} />
      ))}
    </ul>
  );
}

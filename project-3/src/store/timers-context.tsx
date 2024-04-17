import { createContext, type ReactNode, useContext, useReducer } from "react";

export type Timer = {
  name: string;
  duration: number;
};
type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimerState = {
  isRunning: false,
  timers: [],
};

type TimersContextValue = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

type StartTimersAction = {
  type: "START_TIMER";
};
type StopTimersAction = {
  type: "STOP_TIMER";
};
type AddTimersAction = {
  type: "ADD_TIMER";
  payload: Timer;
};
type Action = StartTimersAction | StopTimersAction | AddTimersAction;
const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
  children: ReactNode;
};

function reducer(state: TimerState, action: Action): TimerState {
  switch (action.type) {
    case "ADD_TIMER": {
      return {
        ...state,
        timers: [...state.timers, { ...action.payload }],
      };
    }
    case "START_TIMER": {
      return {
        ...state,
        isRunning: true,
      };
    }
    case "STOP_TIMER": {
      return {
        ...state,
        isRunning: false,
      };
    }
  }
}
const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ctx: TimersContextValue = {
    timers: state.timers,
    isRunning: state.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "START_TIMER" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMER" });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

export default TimersContextProvider;

export function useTimersContext() {
  return useContext(TimersContext)!;
}

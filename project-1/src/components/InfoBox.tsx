import { type ReactNode } from "react";

//! Discriminated Union
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  children: ReactNode;
  severity: "low" | "medium" | "high";
};
type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;

import { GameSettings } from "App";
import { Checkbox } from "components/ui/Checkbox";
import { useState } from "react";

export function Controls({ onSettingsChanged }: { onSettingsChanged: (settings: GameSettings) => void }) {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="container">
      <Checkbox label="animate letters?" onChange={(animate: boolean) => setAnimate(animate)} />
    </div>
  );
}
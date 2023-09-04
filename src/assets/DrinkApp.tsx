import { useState, useEffect } from "react";
import { WaterOption } from "./components/WaterOption/WaterOption";
import "./styles.css";

export const DrinkApp = () => {
  const [remainedWater, setRemainedWater] = useState<number>(2);
  const [percentage, setPercentage] = useState<number>(0);
  const remindWater = (liters: number, percentageWater: number) => {
    if(percentageWater === 100 && percentage === 100) return
    if (2 - liters === remainedWater) {
      setRemainedWater((remainedWater) => (remainedWater += liters));

      setPercentage(percentageWater);

      return;
    }

    setRemainedWater(2 - liters);

    setPercentage(percentageWater);
  };
  useEffect(() => {
    if (remainedWater === 2) {
      setPercentage(0);
    }
  }, [remainedWater]);

  return (
    <div className="container">
      <h1>Drink Water</h1>
      <h2>Goal: 2 Liters</h2>
      <div className="remained-water-container">
        <div
          className={`remained-water ${percentage == 100 ? `hidden` : ""}`}
          style={{ height: `${100 - percentage}%` }}
        >
          <h3>{remainedWater}L</h3>
          <p className="remained">Remained</p>
        </div>

        <div
          className={`percentage ${percentage !== 0 ? `show` : ""}`}
          style={{ height: `${percentage}%` }}
        >
          <p>{percentage}%</p>
        </div>
      </div>
      <p>Select how many glasses of water that you have drank</p>
      <div className="water-options">
        <WaterOption
          percentageWater={12.5}
          liters={0.25}
          remindWater={remindWater}
          percentage={percentage}
        />
        <WaterOption
          percentageWater={25}
          liters={0.5}
          remindWater={remindWater}
          percentage={percentage}
        />
        <WaterOption
          percentageWater={37.5}
          liters={0.75}
          remindWater={remindWater}
          percentage={percentage}
        />
        <WaterOption
          percentageWater={50}
          liters={1}
          remindWater={remindWater}
          percentage={percentage}
        />
        <WaterOption
          percentageWater={62.5}
          liters={1.25}
          remindWater={remindWater}
          percentage={percentage}
        />
        <WaterOption
          percentageWater={75}
          liters={1.5}
          remindWater={remindWater}
          percentage={percentage}
        />
        <WaterOption
          percentageWater={87.5}
          liters={1.75}
          remindWater={remindWater}
          percentage={percentage}
        />
        <WaterOption
          percentageWater={100}
          liters={2}
          remindWater={remindWater}
          percentage={percentage}
        />
      </div>
    </div>
  );
};

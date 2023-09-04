import "./WaterOption.css";
interface WaterOptionProps {
  liters: number;
  remindWater: (val: number, secVal: number) => void;
  percentageWater: number;
  percentage: number;
}
export const WaterOption = ({
  liters,
  remindWater,
  percentageWater,
  percentage,
}: WaterOptionProps) => {

  
  
  return (
    <div
      onClick={() => remindWater(liters, percentageWater)}
      className={`water-option ${
        percentage >= percentageWater ? `active` : ""
      }`}
    >
      <p className="quantity">
        <span>250</span>
        <span>ML</span>
      </p>
    </div>
  );
};

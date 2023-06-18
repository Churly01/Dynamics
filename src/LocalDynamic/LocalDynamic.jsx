import DraggableList from "./DraggableList";

const itemsObject = {
  matches: "Box of matches",
  food: "Food concentrate",
  rope: "50 feet of nylon rope",
  parachute: "Parachute silk",
  heater: "Portable heating unit",
  pistols: "Two .45 caliber pistols",
  milk: "One case of dehydrated milk",
  oxygenTanks: "Two 100 lb. tanks of oxygen",
  map: "Stellar map",
  lifeRaft: "Self-inflating life raft",
  compass: "Magnetic compass",
  water: "20 liters of water",
  flares: "Signal flares",
  firstAidKit: "First aid kit, including injection needle",
  radio: "Solar-powered FM receiver-transmitter"
};

const LocalDynamic = () => {
  return(
    <>
      <h1 style={{margin:'0.25em'}}>Local Dynamic</h1>
      <div style={{ flexDirection:'column',display: 'flex', alignItems: 'center' }}>
        <DraggableList items={itemsObject} />
      </div>
    </>);
};

export default LocalDynamic;

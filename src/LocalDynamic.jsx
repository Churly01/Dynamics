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
      <h1>Local Dynamic</h1>
      <ul style={{textAlign:'left'}}>
        {
          Object.keys(itemsObject).map((item) => (
            <li  key={item}>
              <div style={{display:'flex'}}>
                <span style={{flex:'0.4', border:'1px solid white'}}>{itemsObject[item]}</span>
                <input type="checkbox"/>
              </div>
            </li>
          ))
        }
      </ul>
    </>);
};

export default LocalDynamic;

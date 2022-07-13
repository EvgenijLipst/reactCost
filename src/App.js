import React, {useState} from "react";
import Costs from "./components/Costs";
import NewCost from "./components/NewCost/NewCost";



const INITIAL_COSTS = [
  
  {
    id: 'c1',
    date: new Date(2022, 1, 2),
    description: 'Пример 1',
    amount: 1.00
  },
  {
    id: 'c2',
    date: new Date(2022, 4, 1),
    description: 'Пример 2',
    amount: 1.00
  },
  {
    id: 'c3',
    date: new Date(2022, 3, 14),
    description: 'Пример 3',
    amount: 1.00
  }
]

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS);
  

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>

  );
}

export default App;

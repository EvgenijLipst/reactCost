import './Costs.css'
import Card from "./Card";
import CostsFilter from "./CostsFilter";
import React, {useState} from "react";
import CostList from "./CostList";
import CostsDiagram from './Diagram/CostsDiagram';

function Costs(props) {

  const [selectedYear, setSelectorYear] = useState('2022');

  const yearChangeHandler = (year) => {
      setSelectorYear(year);
  };

    const filteredCosts = props.costs.filter((cost) => {
      return cost.date.getFullYear().toString() ===
      selectedYear;
    })


    return (
      <div>
        <Card className="costs">
          <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
          <CostsDiagram costs={filteredCosts}/>
          <CostList costs={filteredCosts}/>
        </Card>
      </div>
    );
}

export default Costs;
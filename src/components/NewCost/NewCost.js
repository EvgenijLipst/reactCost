import CostForm from './CostForm'
import './NewCost.css'
import React, {useState} from 'react'

const NewCost = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const SaveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
       
        props.onAddCost(costData);
        setIsFormVisible(false);
    }

    const isFormVisibleHandler = () => {
        setIsFormVisible(true);
    }

    const FormCanselHandler = () => {
        setIsFormVisible(false);
    }

    return <div className="new-cost">
        {!isFormVisible && (<button onClick={isFormVisibleHandler}>Добавить Новый Расход</button>)}
        {isFormVisible && <CostForm onSaveCostData={SaveCostDataHandler} onFormCansel={FormCanselHandler} />}
    </div>
}

export default NewCost;
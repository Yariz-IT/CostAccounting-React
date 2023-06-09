import Card from './Card'
import CostsFilter from './CostsFilter'
import './general.css'
import { useState } from 'react'
import CostList from './CostList'

const Cost = props => {
	const [selectedYear, setSelectedYear] = useState('2021')

	const yearChangeHandler = year => {
		setSelectedYear(year)
	}

	const filteredCosts = props.costs.filter(cost => {
		return cost.date.getFullYear().toString() === selectedYear
	})

	return (
		<div>
			<Card className='costs'>
				<CostsFilter
					defaultYear={selectedYear}
					onChangeYear={yearChangeHandler}
				/>
				<CostList costs={filteredCosts}/>
			</Card>
		</div>
	)
}

export default Cost

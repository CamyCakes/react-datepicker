import React from 'react'
import './css/datepicker.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import DateOutPut from './components/DateOutPut'
import DatePickerUI from './components/DatePickerUI'

class DatePicker extends React.Component{

	constructor( props ){
		super( props )
		this.state = {
			date: '--/--/----',
			dateVal: '00000000',
			datePickerUi: 'hidden'
		}
	}

	showDatePicker(){
		if( this.state.datePickerUi === 'hidden' ){
			this.setState({
				datePickerUi: 'shown'
			})
		}
	}

	hideDatePicker(){
		this.setState({
			datePickerUi: 'hidden'
		})
	}

	setDate( date ){
		this.setState({
			date:date
		})
	}

	componentWillMount(){
		document.addEventListener('mousedown', this.handleClick);
	}

	componentWillUnmount(){
		document.removeEventListener('mousedown', this.handleClick);
	}

	handleClick = (e) =>{
		if(this.node.contains(e.target))
			return
		this.setState({
			datePickerUi: 'hidden'
		});
	}

	render(){
		return (
			<div className="date-picker-cont" ref={ node => this.node = node}>
				<div className='date-picker-input' 
					onClick={ ()=>{ this.showDatePicker() }} >
					<FontAwesomeIcon 
						className='calendar-icon' 
						icon={ faCalendarAlt }
					/> 
					<DateOutPut date={ this.state.date } />
					<DatePickerUI 
						show={ this.state.datePickerUi } 
						onSetDate={ date =>{ this.setDate( date ) } }
					/>
				</div>
			</div>
		)
	}
}
export default DatePicker
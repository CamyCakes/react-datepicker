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
			dateInputVal: '0000-00-00',
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

	onDatePick( dateObj ){
		let { month, day, year } = dateObj;
		let m2 = month.toString().length < 2 ? '0' + month: month;
		let d2 = day.toString().length < 2 ? '0' + day: day;

		this.setState({
			date: `${month}/${day}/${year}`,
			dateInputVal: `${year}-${m2}-${d2}`
		})
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
						onDatePick={ ( dateObj )=>{ this.onDatePick( dateObj ) }}
					/>
					<input type='date' hidden onChange={(e)=>{ e.preventDefault() }} value={ this.state.dateInputVal } />
				</div>
			</div>
		)
	}
}
export default DatePicker
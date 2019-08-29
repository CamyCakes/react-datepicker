import React from 'react'
import DaysGrid from './DaysGrid'
import '../css/calendar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

class DatePickerUI extends React.Component{

	constructor( props ){
		super( props );
		let date = new Date();		
		this.state={
			monthToShow: date.getMonth(),
			yearToShow: date.getFullYear(),
			dayOfWeek: date.getDay()
		}
	}

	advanceDay( theWay ){
		this.setState({
			monthToShow: this.state.monthToShow + theWay
		})
	}

	render(){ 
		let year = new Date( this.state.yearToShow, this.state.monthToShow ).getFullYear();
		let month = new Date( this.state.yearToShow, this.state.monthToShow ).getMonth();
		return (
			<div className={ 'date-picker-dropdown-ui ' + this.props.show } onClick={ this.props.onClick }>
				<div className="calendar" >
					<div className='calendar-controls'>
						<LeftArr onClick={ ()=>{ this.advanceDay( -1 ) }} />
						<DateLabels month={ month } year={ year } />
						<RightArr onClick={ ()=>{ this.advanceDay( 1 ) }} />
					</div>
					<WeekDaysrow />
					<DaysGrid 
						month={ month } 
						year={ year } 
						onDatePick={ ( dateObj )=>{ this.props.onDatePick( dateObj ) } }/>
				</div>
			</div>
		)
	}
}

function DateLabels( props ){
	let { month, year } = props;
	let monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
	return(
		<div className='date-labels'>
			<span className='month'>{ monthNames[month] }</span>
			<span className='year'>{ year }</span>
		</div>
	)
}
function WeekDaysrow(){
	return(
		<div className='week-cells'>
			<div>S</div>
			<div>M</div>
			<div>T</div>
			<div>W</div>
			<div>T</div>
			<div>F</div>
			<div>S</div>
		</div>
	)
}
function LeftArr(props){
	return(
		<FontAwesomeIcon
			className='page-back'
			icon={ faArrowLeft }
			onClick={ props.onClick }
		/>
	)
}
function RightArr(props){
	return(
		<FontAwesomeIcon
			className='page-forward'
			icon={ faArrowRight }
			onClick={ props.onClick }
		/>
	)
}

export default DatePickerUI
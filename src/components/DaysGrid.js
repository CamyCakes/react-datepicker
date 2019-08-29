import React from 'react'

class DaysGrid extends React.Component{

	getDayComponent( dayObj ){

		let { day, month, year, key, notCurrentMonth } = dayObj;  
		let notCurrent = notCurrentMonth ? 'notCurrent' : '';
	
		// Adjusts values to display values (Jan is 0 but should display as 1)
		month++;
		if( month > 12 ){
			month = 1;
			year++;
		}else if( month < 1 ){
			month = 12;
			year--;
		}	
		let dateObj = { month:month, day:day, year:year };
		return(
			<div 
				key={ key }
				onClick={ ()=>{ this.props.onDatePick( dateObj ) }}
				className={ notCurrent }>
					{ day }
			</div>
		)
	}

	render(){

		let year = this.props.year;
		let month = this.props.month;

		let monthLength = new Date( year, month, 0 ).getDate();
		let dayNumber = new Date( year, month, 0 ).getDay();

		let keygen = keyGen();
		let days = [];

		// fills in calendar days
		for( let i=0; i < monthLength; i++ ){
			days[ i ] = this.getDayComponent({   
						day: i+1,
						key: keygen.next().value,
						month: month,
						year: year
					})
		}

		// fills in previous month days
		if( dayNumber !== 6 ){
			for( let ii=0; ii < dayNumber; ii++ ){
				let insert = this.getDayComponent({
					day: new Date( year, month, 0 - ii ).getDate(),
					month: month - 1,
					year: year,
					key: keygen.next().value,
					notCurrentMonth: true
				})
				days.splice( 0, 0, insert );
			}	
		}

		// fills in next month of days
		for( let j = 0; days.length < 42; j++ ){
			let insert = this.getDayComponent({
				day: j+1,
				month: month + 1,
				year: year,
				key: keygen.next().value,
				notCurrentMonth: true, 
			})
			days.push( insert );
		}

		return(
			<div className='day-cells'>
				{ days }
			</div>
		)
	}
}

function * keyGen() {
	let num = 1;
	while(true){
		yield num;
		num++;
	}
}

export default DaysGrid
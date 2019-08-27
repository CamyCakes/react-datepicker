import React from 'react'

class DaysGrid extends React.Component{
	render(){
		let year = this.props.year;
		let month = this.props.months;

		let monthLength = new Date( year, month, 0 ).getDate();
		let dayNumber = new Date( year, month, 0 ).getDay();

		let keygen = keyGen();
		let days = [];

		// fills in calendar days
		for( let i=0; i < monthLength; i++ ){
			days[i] = getDaysComponent( i+1, keygen.next().value );
		}

		// fills in previous month days
		if( dayNumber !== 6 ){
			for( let ii=0; ii < dayNumber; ii++ ){
				let insert = getDaysComponent( new Date( year, month, 0 - ii ).getDate(), keygen.next().value, true );
				days.splice( 0, 0, insert );
			}	
		}

		// fills in next month of days
		for( let j = 0; days.length < 42; j++ ){
			let insert = getDaysComponent( j+1, keygen.next().value, true );
			days.push( insert );
		}
		return(
			<div className='day-cells'>
				{ days }
			</div>
		)
	}
}

function getDaysComponent( num, key, notCurrentMonth ){
	if( notCurrentMonth ) {
		return(
			<div key={ key } className='notCurrent'>
				{num}
			</div>
		)
	}else{
		return(
			<div key={ key }>
				{num}
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
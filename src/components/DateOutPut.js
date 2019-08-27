import React from 'react'

class DateOutput extends React.Component{
	render(){
		return(
			<div className='date-output' onClick={ this.props.onClick }>
				{ this.props.date }
			</div>
		)
	}
}

export default DateOutput
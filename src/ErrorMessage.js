import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = (props) => (
	(props.display
		? <p>{props.message}</p>
		: ''
	)
)

ErrorMessage.propTypes = {
	display: PropTypes.bool.isRequired,
	message: PropTypes.string.isRequired,
}

export default ErrorMessage;
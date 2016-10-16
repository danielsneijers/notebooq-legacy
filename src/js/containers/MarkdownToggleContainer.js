import { connect } from 'react-redux'
import Button from 'components/Button'

export const mapStateToProps = (state, ownProps) => {
  return { ...ownProps }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)

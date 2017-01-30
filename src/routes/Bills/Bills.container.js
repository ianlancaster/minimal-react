import { connect } from 'react-redux'
import { fetchBills } from './Bills.modules'
import Bills from './Bills.component'

const mapDispatchToProps = {
  fetchBills
}

const mapStateToProps = (state, ownProps) => {
  return {
    bills: state.bills.bills,
    appShouldFetchContent: state.coreLayout.appShouldFetchContent
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bills)

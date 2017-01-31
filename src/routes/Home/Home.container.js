import { connect } from 'react-redux'
import { fetchHomeContent } from './Home.modules.js'
import Home from './Home.component.js'

const mapDispatchToProps = {
  fetchHomeContent
}

const mapStateToProps = (state, ownProps) => ({
  homeContent: state.home.homeContent
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

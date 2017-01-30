import React, { Component, PropTypes } from 'react'
import Header from 'globals/Header'
import classes from './CoreLayout.styles.scss'
import MainNav from 'globals/MainNav'
import EventEmmiter from 'wolfy87-eventemitter'
export const ee = new EventEmmiter()

export default class CoreLayout extends Component {
  constructor () {
    super()
    this.state = {
      scrollTop: 0,
      downScroll: 0,
      showNav: true
    }
  }

  componentDidMount () {
    this.setContentViewportHeight()
    this.watchScrollActivity()
  }

  setContentViewportHeight () {
    const header = document.getElementById('header')
    const mainNav = document.getElementById('mainNav')
    const coreLayoutHeight = document.getElementById('coreLayout').offsetHeight
    const headerHeight = header ? header.offsetHeight : 0
    const mainNavHeight = mainNav ? mainNav.offsetHeight : 0

    this.setState({
      mainHeight: coreLayoutHeight - headerHeight - mainNavHeight,
      mainPadding: `${headerHeight}px 0 ${mainNavHeight}px 0`
    })

    window.onresize = () => {
      this.setContentViewportHeight()
    }
  }

  watchScrollActivity () {
    const main = document.getElementById('main')

    main.onscroll = (e) => {
      this.loadMoreContent(e)
      this.hideNavigation(e)
      this.setContentViewportHeight()
    }
  }

  hideNavigation (e) {
    this.state.scrollTop < e.srcElement.scrollTop
      ? this.setState({ downScroll: ++this.state.downScroll })
      : this.setState({ downScroll: 0 })

    this.state.downScroll > 25
      ? this.setState({ showNav: false })
      : this.setState({ showNav: true })

    this.setState({ scrollTop: e.srcElement.scrollTop })
  }

  loadMoreContent (e) {
    const { scrollHeight, scrollTop, offsetHeight } = e.srcElement
    if (scrollHeight - scrollTop === offsetHeight) {
      ee.emitEvent('onScrollEnd')
    }
  }

  render () {
    const { children } = this.props
    const { showNav, mainHeight, mainPadding } = this.state
    return (
      <div id={'coreLayout'} className={classes.coreLayout}>
        {showNav && (<Header />)}
        <main id={'main'} style={{ height: `${mainHeight}px`, mainPadding }}>
          {children}
        </main>
        {showNav && (<MainNav />)}
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.node
}

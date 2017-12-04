import React, { Component } from 'react'
import {
	toggleActiveClass,
	getArticleElement,
	setDisplay
} from './helpers'

class App extends Component {
  constructor () {
    super()
    this.state = {
      tabs: ['Home', 'About'],
      pages: {
        'Home': {
          'title': 'Welcome, this is the home page',
          'content': 'The contents of the home page goes here...'
        },
        'About': {
          'title': 'The about page',
          'content': 'Information about us goes here...'
        }
      },
      selectedPage: 'Home'
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleTap = this.handleTap.bind(this)
  }

  handleTap(event) {
		var { style: cssStyle } = getArticleElement(event)
    toggleActiveClass(event)
		cssStyle.display = setDisplay(cssStyle.display)
  }

  handleClick(selectedPage) {
    this.setState({ selectedPage })
  }

  render () {
    let { tabs, selectedPage, pages } = this.state
   	let { title, content } = pages[selectedPage]

    return (
      <div
        className='container'>
        <div className='desktop'>
          <nav
            className='nav'>
            <ul
              className='nav__list'>
              {tabs.map(tab => (
                <li
                  className='nav__list-item'
                  key={tab}>
                  <a
                    className='nav__anchor nav__anchor--hover nav__anchor--active'
                    onClick={() => this.handleClick(tab)}>{tab}</a>
                </li>
							))}
            </ul>
          </nav>
          <main
            className='main'>
            <section>
              <article>
                <header>
                  <h1>{title}</h1>
                </header>
                <section>
                  <p>{content}</p>
                </section>
              </article>
            </section>
          </main>
        </div>
        <main className='mobile'>
          {tabs.map(tab => (
            <section
              key={tab}>
              <button
                onClick={this.handleTap}
                className='main__button main__button--hover main__button--active'>{tab}</button>
              <article
                className='main__article--hidden'>
                <p>{pages[tab].content}</p>
              </article>
            </section>
					))}
        </main>
      </div>

    )
  }
}

export default App

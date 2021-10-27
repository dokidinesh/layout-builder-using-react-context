// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showRightNavbar, showContent} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="navbar-container">
              <h1 className="navbar-heading">Left Navbar Menu</h1>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sitamet, consectetur adipisc elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="navbar-container">
              <h1 className="navbar-heading">Right Navbar</h1>
              <div className="ad-container">Ad 1</div>
              <div className="ad-container">Ad 2</div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

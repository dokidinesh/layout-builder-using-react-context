// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showLeftNavbar,
        showRightNavbar,
        showContent,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="inputs-container">
            <div>
              <input
                type="checkbox"
                id="content"
                onChange={onChangeContent}
                checked={showContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="leftNavbar"
                onChange={onChangeLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="leftNavbar">Left Navbar</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="rightNavbar"
                onChange={onChangeRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="rightNavbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

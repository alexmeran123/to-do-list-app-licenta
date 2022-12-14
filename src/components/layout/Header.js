import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className="header" data-test-id="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="TodoList" />
        </div>
        <div className="settings">
          <ul>
            <li data-testid="quick-add-task-action" className="setting__add">
              +
            </li>
            <li data-testid="dark-mode-action" className="settings__darkmode">
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header

import React from 'react'

export default function Header() {
  return (
      <header class="header dark-bg">
          <div class="toggle-nav">
              <div
                  class="icon-reorder tooltips"
                  data-original-title="Toggle Navigation"
                  data-placement="bottom"
              >
                  <i class="icon_menu" />
              </div>
          </div>
          <a href="index.html" class="logo">
              Team <span class="lite">Mate</span>
          </a>
      </header>
  )
}

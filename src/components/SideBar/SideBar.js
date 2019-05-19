import React from 'react'

export default function SideBar() {
  return (
    <aside>
      <div
        id="sidebar"
        class="nav-collapse "
        style={{
          overflow: "hidden",
          outline: "none",
          marginLeft: "-180px"
        }}
      >
        <ul class="sidebar-menu">
          <li class="active">
            <a class="" href="index.html">
              <i class="icon_house_alt" />
              <span>METRO PCS</span>
            </a>
          </li>
          <li class="sub-menu">
            <a href="javascript:;" class="">
              <span>Winterfell</span>
            </a>
          </li>
          <li class="sub-menu">
            <a href="javascript:;" class="">
              <i class="icon_document_alt" /> -->
              <span>King's Landing</span>
            </a>
          </li>
          <li class="sub-menu">
            <a href="javascript:;" class="">
              <span>Amazing Giants</span>
            </a>
          </li>
          <li>
            <a class="" href="widgets.html">
              <span>Team WIT</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

import React from 'react'

export default function PageHeader() {
  return (
      <div class="row">
          <div class="col-lg-12">
              <h3 class="page-header">
                  <i class="fa fa-laptop" /> Metro
              </h3>
              <ol class="breadcrumb">
                  <li>
                      <i class="fa fa-home" />
                      <a href="index.html">Home</a>
                  </li>
                  <li>
                      <i class="fa fa-laptop" />
                      Dashboard
                </li>
              </ol>
          </div>
      </div>
  )
}

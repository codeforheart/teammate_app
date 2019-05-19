import React from 'react'

export default function Panels() {
  return (
      <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div class="info-box blue-bg">
                  <div class="progress progress-xs">
                      <div
                          class="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "43%" }}
                      />
                  </div>
                  <i class="fa fa-cogs" />
                  <div class="count">43%</div>
                  <div class="title">Iteration Tasks</div>
                  <div>in Progress</div>
              </div>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div class="info-box orange-bg">
                  <i class="fa fa-wrench" />
                  <div class="count">10</div>
                  <div class="title">Defects, No Critical</div>
                  <div>Un-Assigned Defects</div>
              </div>

          </div>


          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div class="info-box red-bg">
                  <i class="fa fa-exclamation-triangle" />
                  <div class="count">Env 33</div>
                  <div class="title">Build Failed</div>
              </div>

          </div>


          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div class="info-box green-bg">
                  <i class="fa fa-thumbs-o-up" />
                  <div class="count">0</div>
                  <div class="title">No Sonar Blockers</div>
              </div>

          </div>

      </div>
  )
}

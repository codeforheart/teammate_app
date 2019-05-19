import React from 'react'
import DefectsStatus from '../DefectsStatus/DefectsStatus'

export default function IterationTasks() {
  return (
      <div class="row">
          <div class="col-lg-6 col-md-12">
              <div class="panel panel-default">
                  <div class="panel-heading">
                      <h2>
                          <i class="fa fa-flag-o red" />
                          <strong>Iteration Tasks</strong>
                      </h2>
                      <div class="panel-actions">
                          <a href="index.html#" class="btn-setting">
                              <i class="fa fa-rotate-right" />
                          </a>
                          <a href="index.html#" class="btn-minimize">
                              <i class="fa fa-chevron-up" />
                          </a>
                          <a href="index.html#" class="btn-close">
                              <i class="fa fa-times" />
                          </a>
                      </div>
                  </div>
                  <div class="panel-body">
                      <table class="table bootstrap-datatable countries iteration">
                          <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>Name</th>
                                  <th>Status</th>
                                  <th>Assignee</th>
                                  <th>Progress</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>US2326</td>
                                  <td>IUT With CSM and EPC</td>
                                  <td>Progress</td>
                                  <td>Durva Das</td>
                                  <td>
                                      <div class="progress thin">
                                          <div
                                              class="progress-bar progress-bar-info"
                                              role="progressbar"
                                              aria-valuenow="73"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                              style={{ width: "73%" }}
                                          />
                                      </div>
                                      <span class="sr-only">73%</span>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>

         
          <DefectsStatus />
      </div>
  )
}

import React from 'react'

export default function SonarIssues() {
  return (
      <section class="panel">
          <div class="panel-body progress-panel sonar">
              <div class="row">
                  <div class="col-lg-8 task-progress pull-left">
                      <h1>Sonar Issues</h1>
                  </div>
                  <div class="col-lg-4">
                      <span class="profile-ava pull-right" />
                  </div>
              </div>
          </div>
          <table class="table table-hover personal-task">
              <thead>
                  <th>id</th>
                  <th>Status</th>
                  <th>Severity</th>
                  <th>Asignee</th>
              </thead>
              <tbody>
                  <tr>
                      <td>12</td>
                      <td>Open</td>
                      <td>
                          <label class="label label-danger">Blocker</label>
                      </td>
                      <td>
                          <div class="asignee">Snir Dahan</div>
                      </td>
                  </tr>
              </tbody>
          </table>
      </section>
  )
}

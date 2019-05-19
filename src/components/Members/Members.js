import React from 'react'

export default function Members() {
  return (
      <div class="panel panel-default">
          <div class="panel-heading">
              <h2>
                  <i class="fa fa-flag-o red" />
                  <strong>Members</strong>
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
              <table class="table bootstrap-datatable countries members">
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Role</th>
                          <th>Task</th>
                          <th>Location</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>744914</td>
                          <td>Michael Lochinov</td>
                          <td>Developer</td>
                          <td>US2326</td>
                          <td>
                              <img
                                  src="img/Germany.png"
                                  style={{ height: "18px", marginTop: "-2px" }}
                              />{" "}
                              Israel
                        </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  )
}

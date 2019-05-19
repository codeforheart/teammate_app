import React, { Component } from "react";

class DefectsStatus extends Component {
  state = {
    data: null,
    defectsCounter: 0
  };

  async componentDidMount() {

      setInterval(async () => {
          const res = await fetch('http://localhost:3000/defects')
          const data = await res.json()
          this.setState({ data })

      }, 1000)
  }
  render() {
    return (
      <div class="col-lg-6 col-md-12">
        <section class="panel">
          <div class="panel-body progress-panel">
            <div class="row">
              <div class="col-lg-8 task-progress pull-left">
                <h1>Defects Status</h1>
              </div>
              <div class="col-lg-4">
                <span class="profile-ava pull-right" />
              </div>
            </div>
          </div>
          <table class="table table-hover personal-task defects">
            <thead>
              <th>Id</th>
              <th>Summary</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Asignee</th>
            </thead>
            <tbody>
              {this.state.data
                ? this.state.data.map(defect =>
                    defect.status !== "rfst" ? (
                      <tr>
                        <td>{defect.issueId}</td>
                        <td>
                          <div
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "300px",
                              width: "auto"
                            }}
                          >
                            {defect.summary}
                          </div>
                        </td>
                        <td>
                          {defect.severity === "critical" ? (
                            <label class="label label-danger">
                              {defect.severity}
                            </label>
                          ) : defect.severity === "low" ? (
                            <label class="label label-default">
                              {defect.severity}
                            </label>
                          ) : defect.severity === "medium" ? (
                            <label class="label label-primary">
                              {defect.severity}
                            </label>
                          ) : (
                            <label class="label label-warning">
                              {defect.severity}
                            </label>
                          )}
                        </td>
                        <td>
                          {defect.status === "fixed" ? (
                            <label class="label label-success">
                              {defect.status}
                            </label>
                          ) : (
                            <label class="label" style={{ color: "black" }}>
                              {defect.status}
                            </label>
                          )}
                        </td>
                        <td>
                          <div class="asignee">Snir Dahan</div>
                        </td>
                      </tr>
                    ) : null
                  )
                : null}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default DefectsStatus;

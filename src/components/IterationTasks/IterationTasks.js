import React,{Component} from 'react'
import DefectsStatus from '../DefectsStatus/DefectsStatus'

class IterationTasks extends Component {
    
    state={
        data:null
    }
 
    async componentDidMount() {
    setInterval(async () => {
      const res = await fetch("http://localhost:3000/features");
      const data = await res.json();
      this.setState({ data });
    }, 1000);
  }

  render() {
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
                  {this.state.data
                    ? this.state.data.map(iter => (
                        <tr>
                          <td>{iter.id}</td>
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
                              {" "}
                              {iter.name}
                            </div>
                          </td>
                          <td>{iter.status}</td>
                          <td>{iter.asignee}</td>
                          <td>
                            <div class="progress thin">
                              <div
                                class="progress-bar progress-bar-info"
                                role="progressbar"
                                aria-valuenow="5"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                  width: (iter.todo / iter.taskEst) * 100
                                }}
                              />
                            </div>
                            <span class="sr-only">73%</span>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <DefectsStatus />
      </div>
    );
  }
}
export default IterationTasks;
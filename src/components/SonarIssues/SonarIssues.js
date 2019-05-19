import React,{Component} from 'react'


class SonarIssues extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    setInterval(async () => {
      const res = await fetch("http://localhost:3000/sonar");
      const data = await res.json();
    this.setState({ data });
    }, 1000)
  }

  render() {
       
    let temp = this.state.data?this.state.data.filter(
         obj =>
           obj.severity == "blocker" ||
           obj.severity == "major" ||
           obj.severity == "critical"
       ):null
    
       let temp2 =this.state.data?this.state.data.filter(
         obj =>
           obj.severity != "blocker" &&
           obj.severity != "major" &&
           obj.severity != "critical"
       ):null
     
       let sorted =temp? temp.concat(temp2):null;

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
            {sorted
              ? sorted.map(sonar => (
                  <tr>
                    <td>{sonar.id}</td>
                    <td>{sonar.status}</td>
                    <td>
                      {
                        sonar.severity == 'blocker' || sonar.severity == 'major' || sonar.severity == 'critical'?
                        <label class="label label-danger">{sonar.severity}</label>
                        :<label class="label" style={{color:'black'}}>{sonar.severity}</label>
                      }
                    </td>
                    <td>
                      <div class="asignee">{sonar.asignee}</div>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </section>
    );
  }
}

export default SonarIssues;
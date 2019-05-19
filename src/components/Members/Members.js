import React, {Component} from 'react'

class Members extends Component {
 
   state={
       data:null
   }

    componentDidMount(){
        setInterval(async () => {
          const res = await fetch('http://localhost:3000/teams')
          const data = await res.json()
          this.setState({ data })  
      }, 1000)
  }

  render(){
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
                  {this.state.data?this.state.data.map(team => team.members.map(member => 
                                <tr>
                                <td>{member.id}</td>
                                <td>{member.fullname}</td>
                                <td>{member.role}</td>
                                <td>{member.task}</td>
                                <td>
                                    <img
                                    src={`img/${member.location}.png`}
                                    style={{ height: "18px", marginTop: "-2px" }}
                                    />{" "}
                                    {member.location}
                                </td>
                                </tr>
                  )):null}
                </tbody>
              </table>
            </div>
          </div>
        );
  }
  
}

export default Members;
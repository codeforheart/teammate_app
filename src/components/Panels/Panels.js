import React,{Component} from 'react'

class Panels extends Component {
  
    state={
        count:0,
        isCritical:false,
        defects:0
    }

    async componentDidMount() {
    setInterval(async () => {
      let countTodo = 0
      let taskEst = 0
      let defects = 0
      let isCritical = false
      let criticalCounter=0
      const response = await fetch("http://localhost:3000/defects");
      const defectsData = await response.json();
      defectsData.forEach(defect=>{
        if(defect.severity=='critical')
            criticalCounter++  
        defects++})
      
      isCritical = defectsData.some(defect=>defect.severity=='critical');
      const res = await fetch("http://localhost:3000/features");
      const data = await res.json();
      data.map(feature=>{
          countTodo+=feature.todo
          taskEst+=feature.taskEst
      })
      const count = ((countTodo/taskEst)*100).toFixed(0)
      this.setState({count,isCritical,defects,criticalCounter})
    }, 1000);
  }

  render() {
      const {defects,isCritical,criticalCounter} = this.state
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
                style={{ width: `${this.state.count}%` }}
              />
            </div>
            <i class="fa fa-cogs" />
            <div class="count">{this.state.count}%</div>
            <div class="title">Iteration Tasks</div>
            <div>in Progress</div>
          </div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          {defects > 20 || isCritical ? (
            <div class="info-box red-bg">
              <i class="fa fa-wrench" />
              <div class="count">{defects}</div>
              <span>Defects</span>
             {isCritical?<div class="title">{criticalCounter} Critical</div>:null} 
            </div>
          ) : defects == 0 ? (
            <div class="info-box green-bg">
              <i class="fa fa-wrench" />
              <div class="count">{defects}</div>
              <div class="title">Defects, No Critical</div>
            </div>
          ) : (
            <div class="info-box orange-bg">
              <i class="fa fa-wrench" />
              <div class="count">{defects}</div>
              <div class="title">Defects</div>
              <div></div>
            </div>
          )}
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
    );
  }
}

export default Panels;
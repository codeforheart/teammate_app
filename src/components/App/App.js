import React from 'react';
import './App.css';
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
import Panels from '../Panels/Panels'
import PageHeader from '../PageHeader/PageHeader'
import IterationTasks from '../IterationTasks/IterationTasks';
import SonarIssues from '../SonarIssues/SonarIssues'
import Members from '../Members/Members'
import amdIcon from '../../resources/amdocsDash.jpg'


function App() {
  return (
    <section id="container" class="sidebar-closed">
      <img src={amdIcon} width='150px' height='100px' style={{position:'absolute',top:'30px',right:'0'}} />
      <Header />
      <SideBar/>
      <section id="main-content">
        <section class="wrapper">
          <PageHeader />   
          <Panels />
          <IterationTasks/>
          <div class="row">
            <div class="col-md-6 sonar">
             <SonarIssues />
            </div>
            <div class="col-lg-6 col-md-12">
              <Members />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default App;

import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import PartyPlanningPage from './pages/Planning';
import PartyWizardPage from './pages/PartyWizard';
import BuildYourParty from './pages/BuildYourParty';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/planning-party' element={<PartyPlanningPage/>}></Route>
        <Route path='/party-wizard' element={<PartyWizardPage/>}></Route>
        <Route path='/Build-your-party' element={<BuildYourParty/>}></Route>

      </Routes>
    </Router>
  )
}

export default App

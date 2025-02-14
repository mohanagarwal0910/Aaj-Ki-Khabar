// type rcc
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
            <Route exact path="/home"element={<News setProgress={this.setProgress}    key="general" pageSize={12} country="in" category="general"/>}></Route>
            <Route exact path="/business"element={<News setProgress={this.setProgress}   key="business" pageSize={12} country="in" category="business"/>}></Route>
            <Route exact path="/entertainment"element={<News setProgress={this.setProgress}   key="entertainment" pageSize={12} country="in" category="entertainment"/>}></Route>
            <Route exact path="/general"element={<News setProgress={this.setProgress}   key="general" pageSize={12} country="in" category="general"/>}></Route>
            <Route exact path="/health"element={<News setProgress={this.setProgress}   key="health" pageSize={12} country="in" category="health"/>}></Route>
            <Route exact path="/science"element={<News setProgress={this.setProgress}   key="science" pageSize={12} country="in" category="science"/>}></Route>
            <Route exact path="/sports"element={<News setProgress={this.setProgress}   key="sports" pageSize={12} country="in" category="sports"/>}></Route>
            <Route exact path="/technology"element={<News setProgress={this.setProgress}   key="technology" pageSize={12} country="in" category="technology"/>}></Route>
          </Routes>
        </Router>
      </div>
    )
    
  }
}




//function based component
// import './App.css';
// import React, {useState}from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// const App =()=> {
      //  const [progress,setProgress]=useState(0)
//     return (
//       <div>
//         <Router>
//         <NavBar/>
//         <LoadingBar
//         color='#f11946'
//         progress={progress}
//       />
//         <Routes>
//             <Route exact path="/home"element={<News setProgress={setProgress}    key="general" pageSize={12} country="in" category="general"/>}></Route>
//             <Route exact path="/business"element={<News setProgress={setProgress}   key="business" pageSize={12} country="in" category="business"/>}></Route>
//             <Route exact path="/entertainment"element={<News setProgress={setProgress}   key="entertainment" pageSize={12} country="in" category="entertainment"/>}></Route>
//             <Route exact path="/general"element={<News setProgress={setProgress}   key="general" pageSize={12} country="in" category="general"/>}></Route>
//             <Route exact path="/health"element={<News setProgress={setProgress}   key="health" pageSize={12} country="in" category="health"/>}></Route>
//             <Route exact path="/science"element={<News setProgress={setProgress}   key="science" pageSize={12} country="in" category="science"/>}></Route>
//             <Route exact path="/sports"element={<News setProgress={setProgress}   key="sports" pageSize={12} country="in" category="sports"/>}></Route>
//             <Route exact path="/technology"element={<News setProgress={setProgress}   key="technology" pageSize={12} country="in" category="technology"/>}></Route>
//           </Routes>
//         </Router>
//       </div>
//     )
// }
//export default App


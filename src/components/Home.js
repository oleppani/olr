import React from 'react'
//import {useTranslation} from "react-i18next"
import logo from '../logo.svg';

const Home = () => {
  // eslint-disable-next-line
  //const [t, i18n] = useTranslation('common')
  return(
    
<div>
<br /><br /><br />
    <img src={logo} className="App-logo" alt="logo" />

    <b>Source codes for this "Osmo Learning React" App are stored in <a href="https://github.com/oleppani/olr" target='0'>https://github.com/oleppani/olr</a></b>
    <br />
    <br />
    <h2>React</h2>
    <p>React is created by Jordan Walke in 2011 for Facebook's newsfeed requirements. React is an open source framework.</p>

    
      Osmo Learning React:
      <ul>
        <li>
        First you need to install Node.js, React.js, Git, VS Code
        </li>
        <li>
        Registrate in GitHub, Heroku (and mongodb.com if you need DB)
      
        </li>
        <li>
        Create React App in Command prompt with "npx create-react-app AppName"
    
        </li>
        <li>Packages can be maintained by using package manager commands in command prompt. Most used package managers are npm (node package manager) and yarn. "npm install package" and "npm remove package" are examples of simple use of npm commands. There are plenty of free module packages in https://www.npmjs.com/ and https://github.com/ for everyone to use.</li>
        <li>
        You can edit your App details with command "npm init"
    
        </li>
        <li>
        Git is used with commands: "git init" (first time initialization), "git remote add name git@github.com:gituser/repo.git" (connect to GitHub repository in first time of use) "git add ." (adding all changes), "git commit -m'details'" (describe what have been done), "git push repository master" (push changes in GitHub or Heroku)
        </li>

      </ul>

      <br /><br />
        </div>
)
}
export default Home
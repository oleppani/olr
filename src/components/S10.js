import React from 'react'
import esl from '../pics/eslint.png'


const S10 = () => {
  // eslint-disable-next-line
  
  return(
  <div style={{ 
    font: 'Verdana'
  }}><br />
    <h2>React testing</h2> 
    <p>	

      <br /><br />
      This App is configured to use Eslint for testing the code and problems are solved.
      <br /><br />
      Command to install Eslint: npm install eslint --save-dev
      <br /><br />
      Command to configure Eslint: npx eslint --init
      <br />
      <br />
      "lint": "eslint ."  is added into package.json--&#62; scripts to set command for running Eslint (npm run lint)
      <br />
      After running this command you get list of fixes for your code. And after fixing you can run Eslint again.
      <br />
    <img width='50%' src={esl} alt='Osmo Learning React'/>

    <br />

    <br />
    <h3>Jest</h3>

    <br />
    Testing files are included in "tests" folder.
    <br />
    Files are name as testedfile.test.js, for example App.test.js.
    <br />

    We can run tests with command "npm run test".
    <br />
    <br />
    I created two test for App.js:
    <br />
    First testing that App is rendered and "Osmo Learning React is found from document."
    <br />
    Second test is clicking "JavaScript for React" button and then test if new module is rendered and "Declaring variables" can be found from the screen.
    <div style={{backgroundColor:"#444444",color:"#C4DFE6",fontSize:"14px"}}>
      App.test.js code:
      <br />
    import &#10100; render, fireEvent, screen &#10101; from '@testing-library/react'
    <br />import App from '../App'
    <br />
    <br />test('renders Osmo Learning React', () =&#62;
    &#10100;
      <br />  render(&lt;App /&#62;);
<br />  const Element = screen.getByText('Osmo Learning React');

  <br /> expect(Element).toBeInTheDocument();
<br />&#10101;)
<br />
<br />test('JavaScript for React link works ', () =&#62;
 &#10100;   
  <br />  const &#10100; getByText &#10101;= render(
<br />    &lt;App /&#62;
<br />  )
<br />  const button = getByText('JavaScript for React')
<br />  fireEvent.click(button)
  
<br />  expect(screen.getByText("Declaring variables")).toBeInTheDocument();
&#10101;)
  <br />    </div>
<br /></p> 
  </div>
)
}
export default S10
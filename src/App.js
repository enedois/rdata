//import logo from './logo.svg';
import './App.css';
import data from './components/data/data.json'

function App() {

  const newdata = data.map((data)=>{
    return(
      <div className="spellStyle">
        <h3>{data.name}</h3>
          <table>
            <tr>
              <td>Class: {data.classes}</td>
              <td>Level: {data.level}</td>
              <td>School: {data.school}</td>
              <td>Ritual: {data.ritual}</td>
            </tr>
            <tr>
              <td>Casting Time: {data.castingTime}</td>
              <td>Range: {data.range}</td>
              <td>Components: {data.components}</td>
              <td>Duration: {data.duration}</td>
            </tr>
          </table> 
          <p className="description">{data.description}</p>      
      </div>
      
    );
  });

  return (
  <div className="wrapper">
   <p>{newdata}</p>
  </div>
  );
}

export default App;

import React from 'react';
import './Css/Skills.css'; // Import your CSS file
import cssImage from "./photos/css.png";
import htmlImage from "./photos/html.png";
import jsImage from "./photos/js.png";
import reactImage from "./photos/react.png";
import pbImage from "./photos/pb.png";
import msImage from "./photos/Ms.png";

const YourComponent = () => {
  return (
    <div className='skills'>
      <h1>Skills</h1>
      <div className="column-2a">
        <table className="table-style">
          <tbody> {/* Wrap the <tr> elements inside <tbody> */}
            <tr>
              <td>HTML</td>
              <td><img src={htmlImage} alt="Santosh" loading="lazy" className="logo-img" /></td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td><img src={cssImage} alt="Santosh" loading="lazy" className="logo-img" /></td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>Js</td>
              <td><img src={jsImage} alt="Santosh" loading="lazy" className="logo-img" /></td>
              <td>⭐⭐⭐</td>
            </tr>

            <tr>
              <td>React Js</td>
              <td><img src={reactImage} alt="Santosh" loading="lazy" className="logo-img" /></td>
              <td>⭐⭐⭐</td>
            </tr>
            <tr>
              <td>Power Bi</td>
              <td><img src={pbImage} alt="Santosh" loading="lazy" className="logo-img" /></td>
              <td>⭐⭐⭐</td>
            </tr>
            <tr>
              <td>MS - Excel</td>
              <td><img src={msImage} alt="Santosh" loading="lazy" className="logo-img" /></td>
              <td>⭐⭐⭐</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default YourComponent;

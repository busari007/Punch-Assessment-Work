import React from "react";
import logo_yellow from '../assets/images/logo(yellow).png';
import '../css/section7.css';
import '../HomePage.css';

export default function Section7() {
  return (
    <div className="slanted-div">
      <div id="section7">
        <h1>Frequently asked questions</h1>
        <table>
          <tbody>
            <tr>
              <td className="del"><b className='boldened'>General</b></td>
              <td colSpan="2">I want to work part-time, is that possible?</td>
            </tr>
            <tr>
              <td colSpan="3">How long are the average projects?</td>
            </tr>
            <tr>
              <td colSpan="3" className='highlighted'><b className="boldened">How does the payment work?</b> <img style={{float:'right'}}src={logo_yellow} alt="logo" /></td>
            </tr>
            <tr>
              <td colSpan="3">How much can I earn?</td>
            </tr>
            <tr>
              <td className="del"><b id='highlighted' className='boldened'>General</b></td>
              <td className="del"><b className='boldened'>Joining process</b></td>
              <td>I want to work part-time, is that possible?</td>
            </tr>
            <tr>
              <td colSpan="3">How long are the average projects?</td>
            </tr>
            <tr>
              <td colSpan="3">How long are the average projects?</td>
            </tr>
            <tr>
              <td colSpan="3">How much can I earn?</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

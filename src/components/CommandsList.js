import * as React from 'react';


export default class CommandsList extends React.Component {
  render() {
    return(
      <div className ="commands-container">
        <table className="content-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Command</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>lenny</td>
              <td>Sends a lenny face in chat</td>
            </tr>
            <tr>
              <td>2</td>
              <td>everyone</td>
              <td>Sends @everyone, disguised as a message of your choice</td>
            </tr>
            <tr>
              <td>3</td>
              <td>bold</td>
              <td>Sends message in bold</td>
            </tr>
            <tr>
              <td>4</td>
              <td>cb</td>
              <td>Sends message in a codeblock</td>
            </tr>
            <tr>
              <td>5</td>
              <td>underline</td>
              <td>Sends a message underlined</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nick</td>
              <td>52,300</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nick</td>
              <td>52,300</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nick</td>
              <td>52,300</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nick</td>
              <td>52,300</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nick</td>
              <td>52,300</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nick</td>
              <td>52,300</td>
            </tr>


          </tbody>
        </table>
      </div>



    )


  }
};


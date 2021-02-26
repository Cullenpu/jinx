import React from 'react';
import { Table } from 'reactstrap';
import { FaShoppingBag, FaFile, FaMicrophone, FaMoneyBill, FaEllipsisH} from 'react-icons/fa';


const ApplicationsTable = (props) => {
  return (
    <Table style={{ width: '75vw' }}>
      <thead>
        <tr>
          <th scope="row">
            <div className="text-center">
              <h5><FaShoppingBag style={{ color: 'grey', float: 'left' }}/> WISHLIST <FaEllipsisH style={{ color: 'grey', float: 'right' }}/></h5>
            </div>
          </th>
          <th>
            <div className="text-center">
              <h5><FaFile style={{ color: 'grey', float: 'left' }}/> APPLIED <FaEllipsisH style={{ color: 'grey', float: 'right' }}/></h5>
            </div>
          </th>
          <th>
            <div className="text-center">
              <h5><FaMicrophone style={{ color: 'grey', float: 'left' }}/> INTERVIEWS <FaEllipsisH style={{ color: 'grey', float: 'right' }}/></h5>
            </div>
          </th>
          <th>
            <div className="text-center">
              <h5><FaMoneyBill style={{ color: 'grey', float: 'left' }}/> OFFER <FaEllipsisH style={{ color: 'grey', float: 'right' }}/></h5>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <div className="text-center">
              <p className="text-muted">1 job</p>
            </div>
          </th>
          <th>
            <div className="text-center">
              <p className="text-muted">2 jobs</p>
            </div>
          </th>
          <th>
            <div className="text-center">
              <p className="text-muted">0 jobs</p>
            </div>
          </th>
          <th>
            <div className="text-center">
              <p className="text-muted">0 jobs</p>
            </div>
          </th>
        </tr>
        <tr>
          <th scope="row">Google</th>
          <td>Facebook</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Larry</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ApplicationsTable;

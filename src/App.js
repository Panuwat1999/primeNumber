import Axios from 'axios';
import { useState, React } from 'react';


function App() {
   
  const [startnum, setstartnum] = useState(0);
  const [endnum, setendnum] = useState(0);

  const [historylist, sethistorylist] = useState([]);

  const gethistorylist = () => {
    Axios.get('http://localhost:3001/history').then((response) => {
      sethistorylist(response.data);
    });
  }

  const addhistory = () => {
    Axios.post('http://localhost:3001/add', {
      startnum: startnum,
      endnum: endnum
    }).then(() => {
      sethistorylist([
        ...historylist,
        {
          startnum: startnum,
          endnum: endnum
        }
      ])
    })
  }


  return (

    <div className="App container mt-5">
      <h1 className="text-center">โปรแกรมหาจำนวนเฉพาะ</h1>
      <div className="row">
        <div className="col">

        </div>

        <div className="col-6 text-end">
          <button className="btn btn-primary" onClick={gethistorylist}>ประวัติการคำนวน</button>

        </div>


        <div className="col">

        </div>
      </div>

      <div className="row">
        <div className="col">

        </div>

        <div className="col-6">
          <form action="">
            <div className="row">
              <div className="col">
                <label htmlFor="formInputstart" className="form-label">เลขเริ่มต้น</label>
                <input type="number" id="formInputstart" className="form-control" placeholder="เลขเริ่มต้น..." onChange={(event) => { setstartnum(event.target.value) }} />
              </div>
              <div className="col">
                <label htmlFor="formInputend" className="form-label">เลขสุดท้าย</label>
                <input type="number" id="formInputend" className="form-control" placeholder="เลขสุดท้าย..." onChange={(event) => { setendnum(event.target.value) }} />
              </div>
            </div>
            <div className="row mt-3">
              <button className="btn btn-primary" onClick={addhistory}>คำนวน</button>

            </div>
          </form>
          
        </div>

        <div className="col">

        </div>
      </div>
      <div className='row mt-3'>
        
        <table id="Histable" className="table table-bordered"> 
            <thead className='text-center'>
              <tr>
                <th>ID</th>
                <th>เลขเริ่มต้น</th>
                <th>เลขสุดท้าย</th>
                <th>เลขจำนวนเฉพาะ</th>
                <th>จำนวนทั้งหมด</th>
                <th>เวลาที่บันทึก</th>
              </tr>
            </thead>
            {historylist.map((val, key) => {
              return (



                <tbody>
                  <tr>
                    <td>{val.hisid}</td>
                    <td>{val.startnum}</td>
                    <td>{val.endnum}</td>
                    <td className='w-300'>{val.primenum}</td>
                    <td>{val.countnum}</td>
                    <td>{val.hisdate}</td>
                  </tr>
                </tbody>


              )
            })}

          </table>
        


      </div>





    </div>

  );
}

export default App;

import React, { useState, useMemo, useEffect } from 'react';
import Pagination from '../../../Pagination';
import data from '../../../examples/data/petroleumData.json';
import Navbar from '../Navbar';
import Loader from '../../../util/Loader';
import "../style.css";
let PageSize = 5;


const Petroleum = () => {
 
  const [data, setData] = useState([]);

  const [fetched,setFetched]=useState(false)

  useEffect(()=>{
    const apiGet = () => {
      fetch("https://purple-electrician-mdcmk.ineuron.app:8081/api/prediction/petroleum", {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("json",json.coal.length)
          if (json.coal.length>0){
            setFetched(prevValue=>!prevValue)
          }
          setData(json.coal);
        });
    };
    apiGet()
    
  },[])
 
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <>
    {!fetched && <Loader/>}
   
   {fetched && <>  <Navbar/>
    <section className="tables-page-section" >
    <div className="container">
     <div className="row">
      <div className="col-md-12">
       <div className="section_title text-center">
         <h2 className="mt-4">Carbon-dioxide emission from Petroleum</h2>
          <div className="brand_border">
           <i className="fa fa-minus" aria-hidden="true"></i> 
           <i className="fa-solid fa-industry" aria-hidden="true"></i>
           <i className="fa fa-minus" aria-hidden="true"></i>
          </div>
         <p>Data on emissions of Carbon-dioxide from Petroleum are shown in the table below. <br/>These numbers represent the estimated level of Carbon-dioxide emissions for the next 10 years. (Data is presented month by month)</p>
       </div>
      </div>
    </div>
   <div className="row">
    <div className="col-sm-12">
      <div className="table-responsive">
          <table className="table">
            <thead>
             
              <th>Date & Month</th>
              <th>Lower</th>
              <th>Upper</th>
            </thead>
            {currentTableData.map((item,index) => {
              return (
                <tr>
            {/* <td>
              {}
              {index}
            </td> */}
            <td>
              {item.index}
            </td>
            <td>
              {item.lower}
            </td>
            <td>
              {item.upper}
            </td>
            
          </tr>
           );
          })}
                      </table>
        </div>

    </div>
   </div>
  </div>
 </section>

      <h3><Pagination
      className="pagination-bar"
      currentPage={currentPage}
      totalCount={data.length}
      pageSize={PageSize}
      onPageChange={page => setCurrentPage(page)}/></h3>

    </>}
  </>
      

  );
}

export default Petroleum;
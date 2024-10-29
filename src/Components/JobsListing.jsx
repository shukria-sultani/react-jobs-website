import React from 'react';

export default function JobsListing() {
  return (
    <div className="container-fluid p-3 w-100 mt-5" style={{ backgroundColor: "#e5f6ff" }}>
      <h2 className='text-center pt-5' style={{color: "#8458B3", fontWeight: "900"}}>Recent Jobs</h2>
      <div className="d-lg-flex flex-lg-row align-items-center justify-content-center gap-5 flex-wrap mt-4">
        <div className="card col-lg-3 mt-5 p-4">
          <div>
            <small className='fs-5'>Full-Time</small>
            <h4 className='pt-3'>Senior React Developer</h4>
          </div>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam at aut ipsa iusto nemo totam tenetur. Numquam doloremque voluptates laboriosam odit dignissimos, fugiat incidunt odio...</p>
            <small>More</small> <br />
            <span className='salary'>$70K - $85K/ Year</span>
            <hr />
          </div>
          <div className='d-flex flex-lg-row gap-5'>
            <span style={{color:'#63beeb', fontWeight: '900'}} >Kabul, Afg</span>
            <a href="#" className='bg-dark p-2 text-light rounded-2 text-decoration-none ms-5'>Read More</a>
          </div>
        </div>
        <div className="card col-lg-3 mt-5 p-4">
          <div>
            <small className='fs-5'>Full-Time</small>
            <h4  className='pt-3'>Senior React Developer</h4>
          </div>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam at aut ipsa iusto nemo totam tenetur. Numquam doloremque voluptates laboriosam odit dignissimos, fugiat incidunt odio...</p>
            <small>More</small> <br />
            <span className='salary'>$70K - $85K/ Year</span>
            <hr />
          </div>
          <div className='d-flex flex-lg-row gap-5'>
            <span style={{color:'#63beeb', fontWeight: '900'}} >Kabul, Afg</span>
            <a href="#" className='bg-dark p-2 text-light rounded-2 text-decoration-none ms-5'>Read More</a>
          </div>
        </div>
        <div className="card col-lg-3 mt-5 p-4">
          <div>
            <small className='fs-5'>Full-Time</small>
            <h4 className='pt-3'>Senior React Developer</h4>
          </div>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam at aut ipsa iusto nemo totam tenetur. Numquam doloremque voluptates laboriosam odit dignissimos, fugiat incidunt odio...</p>
            <small>More</small> <br />
            <span className='salary'>$70K - $85K/ Year</span>
            <hr />
          </div>
          <div className='d-flex flex-lg-row gap-5'>
            <span style={{color:'#63beeb', fontWeight: '900'}} >Kabul, Afg</span>
            <a href="#" className='bg-dark p-2 text-light rounded-2 text-decoration-none ms-5'>Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

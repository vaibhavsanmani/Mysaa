import React from 'react'
function Team() {
    return ( 
         <div className="container mb-5 mt-5">
            <div className="row">
                <h4 className=' mb-5 text-center'>People</h4>
                <div className="col-1"></div>
                <div className="col-5 text-center">
                   <img src="./images/Owner.png" style={{width:"65%",borderRadius:"50%"}}/>
                   <h4 className='mt-4'>Asmita Bagade</h4>
                   <p className='text-muted mt-3'>Founder, CEO</p>
                </div>
                <div className="col-5 people" >
                    <p >We started Mysa Arts with a vision to express creativity without limits,<br/>
                        turning ideas into visually compelling stories through design and art.<br/>
                        Today, Mysa Arts is steadily building its identity in the modern creative space.<br/>
                    </p>

                    <p>We actively engage with the creative community and stay aligned<br/>
                       with evolving design trends and modern visual culture,<br/>
                       constantly refining our approach to stay relevant and impactful.<br/> 
                    </p>
                    <p>Creating art is our zen.<br/> </p>

                    <p className='mb-5'>Connect on&nbsp; 
                        <a href="/"  style={{textDecoration:"none"}}>Instagram</a> 
                         / <a href="/"  style={{textDecoration:"none"}}>TradingQnA</a> 
                         / <a href="/"  style={{textDecoration:"none"}}>Twitter</a><br/> </p>
                    
                </div>
                <div className="col-1"></div>
            </div>
        </div>
     );
}

export default Team;
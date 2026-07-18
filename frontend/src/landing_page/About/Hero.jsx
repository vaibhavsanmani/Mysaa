import React from 'react'
function Hero() {
    return ( 
        <div className="container theme-page-container">
            <h4 className='mt-5 mb-5 theme-muted' style={{textAlign:"center"}}>We started with a passion for creativity and expression.<br/>
                        Now, we’re crafting visuals that leave a lasting impact..</h4>
            <hr style={{borderColor: 'rgba(255,255,255,0.12)'}} />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                    <p className='mt-5 theme-muted'>We kick-started our journey with a passion for creativity and visual storytelling.<br/>
                        With the aim of expressing ideas beyond limits and redefining modern design.<br/>
                        We built Mysa Arts as a space where imagination meets aesthetics,<br/>
                        blending creativity with purpose and originality.<br/>
                        The name Mysa reflects comfort, calm, and artistic expression,<br/>
                        capturing the essence of creating visuals that feel as good as they look.
                    </p>
                    <p className='theme-muted'>Today, our creative approach and evolving visual style<br/>
                        have helped us grow into a rising name in modern design.<br/>
                    </p>
                    <p className='mb-5 theme-muted'>Over 1.6+ crore clients place billions of orders every year<br/> 
                        through our powerful ecosystem of investment<br/> 
                        platforms, contributing over 15% of all Indian retail<br/>
                        trading volumes.<br/>
                    </p>
                </div>
                <div className="col-5">
                    <p className='mt-5 theme-muted'>In addition, we continuously explore creative trends and<br/>
                        build a growing community that appreciates art and design,<br/>
                        sharing inspiration and ideas that fuel visual creativity.<br/>
                    </p>
                    <p><a style={{textDecoration:"none"}} href="#" target="_blank" rel="noopener noreferrer" className="theme-accent"><b>Mysa Arts</b></a>, our creative space and growing platform, brings<br/>
                        together innovative ideas and visual storytelling with the<br/>
                        goal of building a strong presence in the modern design world.<br/>
                    </p>
                    <p className='mb-5 theme-muted'>And yet, we are constantly exploring new ideas every day.<br/>
                        Catch up on our latest work on our <a className="theme-accent" style={{textDecoration:"none"}} href="#" target="_blank" rel="noopener noreferrer"><b>portfolio</b></a> or see what<br/>
                        people are saying about us through our <a className="theme-accent" style={{textDecoration:"none"}} href="#" target="_blank" rel="noopener noreferrer"><b>socials</b></a> or learn more about our<br/>
                        creative vision and artistic journey.<br/>
                    </p>
                    
                </div>
                <div className="col-1"></div>
            </div>
        </div>
     );
}

export default Hero; 
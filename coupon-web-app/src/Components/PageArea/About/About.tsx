import React from 'react'

export const About:React.FC= () => {
    return (
        <div>
            <div className="about-section paddingTB60 gray-bg">
                <div className="container">
                    <div className="row">
						<div className="col-md-7 col-sm-6">
							<div className="about-title clearfix">
								<h1>About <span>Us</span></h1>
								<h3>CouponAlism By Bar Saadi</h3>
								<p className="about-paddingB">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare </p>
								<p>sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien</p>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="about-img">
								<img src="https://media3.giphy.com/media/vRFcMp9AeUwwH6xVgl/giphy.gif?cid=790b7611edd47e5ed396c9e911ee8341bd8397bc5ae3addb&rid=giphy.gif&ct=g" alt=""/>
							</div>
						</div>	
                    </div>
                </div>
            </div>
        </div>
    )
}   
import { env } from 'process'
import React from 'react'

export const Donate:React.FC = () => {
    return (
        <div>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Pricing</h1>
                <p className="lead">I'm broke-ass Developer so pls donate money</p>
            </div>
            <div className="container">
            <div className="card-deck mb-3 text-center">
                <div className="card mb-4 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Cool Donate</h4>
                </div>
                <div className="card-body">
                    <button type="button" className="btn btn-lg btn-block btn-primary">15$</button>
                </div>
                </div>
                <img src="https://media2.giphy.com/media/APRLUJqKE1TvExNh2J/giphy.gif?cid=ecf05e47spiwiqdo28sdheh93en7uanh458g25clikbza1ev&rid=giphy.gif&ct=g" alt="give me money pls" />
                <div className="card mb-4 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal"> Very Cool Donate</h4>
                </div>
                <div className="card-body">
                    <button type="button" className="btn btn-lg btn-block btn-primary">30$</button>
                </div>
                </div>
                <img src="https://media3.giphy.com/media/SsTcO55LJDBsI/giphy.gif?cid=ecf05e478mscbp6i4tnovry000e5s5rw4s8h9v2nk0bt7fbb&rid=giphy.gif&ct=g" alt="give me money very pls" />
            </div>
            </div>
        </div>
    )
}   
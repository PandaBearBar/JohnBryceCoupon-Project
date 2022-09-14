import React from 'react'
import PropTypes from 'prop-types'
import './EmptyView.css'
interface EmptyViewProps{
    msg:string;
}
export function EmptyView(props:EmptyViewProps):JSX.Element{
    return (
        <div className="EmptyView">
            <h2>{props.msg}</h2>
            {/* <iframe
                width="700"
                height="500"
                src="https://www.youtube.com/embed/MVm1KcrHM6s"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe> */}
        </div>
    );
}

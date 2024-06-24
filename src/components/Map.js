import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 6.90,
      lng: 79.85
    },
    zoom: 11
  };

  render() {
    return (
      <div className='map' style={{ height: '400px', width: '100%' }}>
       
        <div style={{ width: '100%' }}>
          <iframe
            width="100%"
            height="400"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=No.67,%20Walukarama%20Road,%20Colombo%2003,%20Sri%20Lanka.+(Aviha%20Group%20(PVT)%20LTD)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Aviha Group Location"
          >
            <a href="https://www.gps.ie/">gps systems</a>
          </iframe>
        </div>
      </div>
    );
  }
}

export default SimpleMap;

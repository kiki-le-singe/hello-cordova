import React from 'react';

import Page from 'components/pages/Page';

class NetworkInformation extends Page {

  constructor() {
    super();

    const networkState = navigator.connection.type;
    const { UNKNOWN, ETHERNET, WIFI, CELL_2G, CELL_3G, CELL_4G, CELL, NONE } = Connection;

    /* eslint-disable */
    console.group('cordova-plugin-network-information');
    console.log(networkState);
    console.log(UNKNOWN);
    console.log(ETHERNET);
    console.log(WIFI);
    console.log(CELL_2G);
    console.log(CELL_3G);
    console.log(CELL_4G);
    console.log(CELL);
    console.log(NONE);
    console.groupEnd();
    /* eslint-enable */
  }

  componentDidMount() {
    super.componentDidMount();

    document.addEventListener('offline', this.onOffline, false);
    document.addEventListener('online', this.onOnline, false);
  }

  componentWillUnmount() {
    document.removeEventListener('offline', this.onOffline);
    document.removeEventListener('online', this.onOnline);
  }

  onOffline() {
    // Handle the offline event
    f7App.addNotification({
      message: 'Your phone is not connected to the internet',
    });
  }

  onOnline() {
    // Handle the offline event
    f7App.addNotification({
      message: 'Your phone is connected to the internet',
    });
  }

  getDataPage() {
    return 'networkInformation';
  }

  renderPage() {
    const networkState = navigator.connection.type;
    const { UNKNOWN, ETHERNET, WIFI, CELL_2G, CELL_3G, CELL_4G, CELL, NONE } = Connection;

    return (
      <div className="page-content">
        <div className="content-block-title">
          <a href="https://github.com/apache/cordova-plugin-network-information">cordova-plugin-network-information</a>
        </div>
        <div className="list-block">
          <ul>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">networkState: { networkState }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">UNKNOWN: { UNKNOWN }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">ETHERNET: { ETHERNET }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">WIFI: { WIFI }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">CELL_2G: { CELL_2G }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">CELL_3G: { CELL_3G }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">CELL_4G: { CELL_4G }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">CELL: { CELL }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">NONE: { NONE }</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="content-block">
          {/* If no data-panel attribute, Left panel will be opened by default */}
          <p><a href="#" className="open-panel ajax">Open Left Panel</a></p>
          {/* Click on link with "open-panel" and data-panel="right" attribute will open Right panel */}
          <p><a href="#" data-panel="right" className="open-panel ajax">Open Right Panel</a></p>
        </div>
      </div>
    );
  }
}

export default NetworkInformation;

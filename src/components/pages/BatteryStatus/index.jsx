import React from 'react';

import Page from 'components/pages/Page';

class BatteryStatus extends Page {

  componentDidMount() {
    super.componentDidMount();

    window.addEventListener('batterystatus', this.onBatteryStatus, false);
    window.addEventListener('batterycritical', this.onBatteryCritical, false);
    window.addEventListener('batterylow', this.onBatteryLow, false);
  }

  componentWillUnmount() {
    window.removeEventListener('batterystatus', this.onBatteryStatus);
    window.removeEventListener('batterycritical', this.onBatteryCritical);
    window.removeEventListener('batterylow', this.onBatteryLow);
  }

  onBatteryStatus(info) {
    // Handle the battery status event
    f7App.addNotification({
      message: `Level: ${info.level} isPlugged: ${info.isPlugged}`,
    });
  }

  onBatteryCritical(info) {
    // Handle the battery critical event
    f7App.addNotification({
      message: `Battery Level Critical ${info.level}%. Recharge Soon!`,
    });
  }

  onBatteryLow(info) {
    // Handle the battery low event
    f7App.addNotification({
      message: `Battery Level Low ${info.level}%`,
    });
  }

  getDataPage() {
    return 'batteryStatus';
  }

  renderPage() {
    return (
      <div className="page-content">
        <div className="content-block-title">
          <a href="https://github.com/apache/cordova-plugin-battery-status">cordova-plugin-battery-status</a>
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

export default BatteryStatus;

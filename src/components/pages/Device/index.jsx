import React from 'react';

import Page from 'components/pages/Page';

class Device extends Page {

  constructor() {
    super();

    console.group('cordova-plugin-device');
    console.log(device.cordova);
    console.log(device.model);
    console.log(device.platform);
    console.log(device.uuid);
    console.log(device.version);
    console.log(device.isVirtual);
    console.log(device.serial);
    console.groupEnd();
  }

  getDataPage() {
    return 'device';
  }

  renderPage() {
    const { cordova, model, platform, uuid, version, isVirtual, serial } = device;

    return (
      <div className="page-content">
        <div className="content-block-title">
          <a href="https://github.com/apache/cordova-plugin-device">cordova-plugin-device</a>
        </div>
        <div className="list-block">
          <ul>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">cordova: { cordova }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">model: { model }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">platform: { platform }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">uuid: { uuid }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">version: { version }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">isVirtual: { isVirtual || 'executed on a real device' }</div>
              </div>
            </li>
            <li className="item-content">
              <div className="item-inner">
                <div className="item-title">serial: { serial }</div>
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

export default Device;

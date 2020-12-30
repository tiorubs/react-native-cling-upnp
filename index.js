import { NativeModules, DeviceEventEmitter } from "react-native";

const { RNUpnp } = NativeModules;

const UPNP = {};

UPNP.testPing = () => {
  RNUpnp.ping();
};

UPNP.loadMedias = () => {
  RNUpnp.loadMedias();
};

UPNP.initUPNP = () => {
  RNUpnp.initUPNP();
};

UPNP.reloadTVs = () => {
  RNUpnp.reloadTVs();
};

UPNP.setCurrentTVIP = (ip) => {
  RNUpnp.setCurrentTVIP(ip);
};

UPNP.pause = () => {
  RNUpnp.onPause();
};

UPNP.next = () => {
  RNUpnp.next();
};

UPNP.previous = () => {
  RNUpnp.previous();
};

UPNP.refresh = () => {
  RNUpnp.refresh();
};

UPNP.destroy = () => {
  RNUpnp.onDestroy();
};

UPNP.zSelected = (callback) => {
  return DeviceEventEmitter.addListener("media_item", callback);
};

UPNP.receivedTVs = (callback) => {
  return DeviceEventEmitter.addListener("tv-found", callback);
};

export default UPNP;

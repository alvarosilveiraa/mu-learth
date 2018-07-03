import { NetInfo } from "react-native";

export default function network(callback) {
  NetInfo.getConnectionInfo().then(callback);

  NetInfo.addEventListener(
    "connectionChange",
    callback
  );
}

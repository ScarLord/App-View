import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://logrocket.com/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
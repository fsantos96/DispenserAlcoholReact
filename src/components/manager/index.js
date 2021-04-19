
import {
    Link
  } from "react-router-dom";
  import {

  } from 'react-bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';

  import * as apiService from '../../services/apiService';
  const React = require('react');
  const { useEffect} = require('react');

  const ManagerComponent = (props) => {
    var deviceId = props.location.search.split("=");
    deviceId = deviceId.length > 1 ? deviceId[1] : null;

    return (
        <h1>Manager</h1>
    )
  }
  export default ManagerComponent
  
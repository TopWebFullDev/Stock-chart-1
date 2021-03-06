import React, { useState, useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { ToastContainer, toast } from 'react-toastify';

import { authSignup } from "./user_api"

import styles from "assets/jss/material-dashboard-react/views/User.js";

const useStyles = makeStyles(styles);


export default function SignUp() {
    const classes = useStyles();;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');


    const onSubmit = () => {
      
      if((username == '')||(email == '')){
        toast("Fill the username and email!")
      }
      else if((passwordConfirm != password) || (password.length < 8)){
        toast("Input correct password and over 8 characters");
      }
      else{
      authSignup(username, email, password, passwordConfirm);
      }
      
    };

  return (
    <div>

            <Card className={classes.loginWnd} style={{  }}>
                <CardHeader color="primary">
                    Sign in to start your session
                </CardHeader>
                <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: username,
                      onChange: (e) => setUsername(e.target.value)
                    }}
                  />
                <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: email,
                      onChange: (e) => setEmail(e.target.value)
                  }}
                  />
                <CustomInput
                    labelText="Password"
                    id="password"
                    type="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: password,
                      onChange: (e) => setPassword(e.target.value)
                  }}
                  
                  />
                  <CustomInput
                    labelText="Password Confirm"
                    id="passwordConfirm"
                    type="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: passwordConfirm,
                      onChange: (e) => setPasswordConfirm(e.target.value)
                  }}
                  
                  />
                <CardFooter stats>
                    <Button color="success" onClick={() => onSubmit()}>Sign up</Button>
                </CardFooter>
            </Card>
   
    </div>
  );
}

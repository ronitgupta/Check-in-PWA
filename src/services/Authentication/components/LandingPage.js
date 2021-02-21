import React from 'react'
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"

import BoxInput from "../../../shared/components/TextInput/BoxInput"
import Button from "../../../shared/components/Button/Basic"
import { _set_state } from '../middleware'

import WhiteLogo from "../../../assets/authentication/logo_white.png"
import MobileApp from "../../../assets/authentication/mobile_app.png"

function LandingPage(props) {
  const { setState } = props
  const openApp = () => {
    window.location.href = "https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.checkin.app.checkin";
  }
  const handleSkip = () => {
    setState({
      showLandingPage: false,
      askingProfileDetails: false,
      askingContact: true,
      askingOTP: false
    })
  }

  return (
    <div className="h-100 text-light" >
      <div className="bg-primary" >
        <br />
        <br />

        <Grid container >
          <Grid item xs={1} ></Grid>
          <Grid item xs={10} >
            <img
              src={WhiteLogo}
              width={200}
            />
            <br />
            <br />
            <div style={{ fontWeight: 600, fontSize: 25 }} >Experience is everything</div>
            <br />
            <div className="fw-600 fs-25" >
              Checkin is the only thing you need while eating
              out at Restaurant or staying in Hotel.
              Ordering, service, payments all at one place.
          </div>
            <br />
            <Button
              fullWidth
              onClick={openApp}
            >
              Download for Android
          </Button>
            <br />
            <img
              src={MobileApp}
            />

            <br />
            <Button
              fullWidth
              onClick={handleSkip}
            >
              Skip
          </Button>
          </Grid>
          <Grid item xs={1} ></Grid>
        </Grid>
        <br />
      </div>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.authentication.signup
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setState: (obj) => dispatch(_set_state(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
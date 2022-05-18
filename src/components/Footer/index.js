import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import { version } from "../../components";

const styles = (theme) => ({
  footer__container: {
    width: "100%",
    height: "75px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ paddingTop: "75px" }}>
        <footer className={classes.footer__container} id="footer__container">
          <a href="https://github.com/libDrive/libDrive/" target="_blank">
            <img
              src="https://ik.imagekit.io/TheOneMediaServer1/TheOneMediaServer1/TheOne-removebg-preview_MeVR2-J1m.png"
              className="footer__github"
              height="64px"
              alt="github-logo"
            />
          </a>
          <a
            className="no_decoration_link footer__text"
            href="https://717ktszn7jelghtfaizkkq-on.drv.tw/www.directmessage.ml/"
            target="_blank"
          >
            {`© 2022 - 2050 Copyright: TheOneServer 2.0 - v${version}`}
          </a>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Footer);

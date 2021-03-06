import * as React from "react"
import { Link } from "gatsby"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      borderRadius: "50%",
    },
    icon: {
      marginRight: "0.5rem",
    },
    btn: {
      margin: "0.1rem",
      textTransform: "none",
    },
  })
)

const Bio = () => {
  const classes = useStyles()
  return (
    <Grid justify="space-around" container>
      <Grid container item xs={12} md={6} justify="center" alignItems="center">
        <StaticImage
          src="../images/icon.png"
          alt="ryohidaka"
          className={classes.image}
          width={200}
        />
      </Grid>

      <Grid container item xs={12} md={6} justify="center" alignItems="center">
        <Typography variant="h4" component="h2" align="center">
          <ruby>
            {" "}
            日高<rt>ひだか</rt> 凌<rt>りょう</rt>{" "}
          </ruby>
        </Typography>

        <Grid container justify="space-between">
          <Button
            variant="outlined"
            color="primary"
            className={classes.btn}
            component={Link}
            to="https://twitter.com/ryhidaka"
          >
            <TwitterIcon className={classes.icon} />
            Twitter
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.btn}
            component={Link}
            to="https://www.facebook.com/ryohidaka12"
          >
            <FacebookIcon className={classes.icon} />
            Facebook
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.btn}
            component={Link}
            to="https://github.com/ryohidaka"
          >
            <GitHubIcon className={classes.icon} />
            Github
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.btn}
            component={Link}
            to="https://www.linkedin.com/in/rhidaka/"
          >
            <LinkedInIcon className={classes.icon} />
            LinkedIn
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Bio

import * as React from "react"
import { AppBar } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      color: "#000",
      backgroundColor: "#fafafa",
      textAlign: "center",
      top: "auto",
      bottom: 0,
      boxShadow: "none",
    },
  })
)

const Footer: React.FC = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.root} component="footer">
      <span>© {new Date().getFullYear()} Ryo Hidaka</span>
    </AppBar>
  )
}

export default Footer

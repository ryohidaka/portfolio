import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Skeleton from "@material-ui/lab/Skeleton"

type Props = {
  src?: string
  alt?: string
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "500px",
  },
})

const Img: React.FC<Props> = ({ src, alt }: Props) => {
  const classes = useStyles()

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {src ? (
        <img src={src} alt={alt} className={classes.root} />
      ) : (
        <Skeleton animation="wave" />
      )}
    </Grid>
  )
}

export default Img

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

type Props = {
  title: string
  id?: string
}

const useStyles = makeStyles({
  root: {
    margin: "5vmin auto",
    textTransform: "uppercase",
  },
})

const SectionTitle: React.FC<Props> = ({ title, id }: Props) => {
  const classes = useStyles()

  return (
    <Typography
      variant="h2"
      component="h2"
      id={id || ""}
      align="center"
      className={classes.root}
    >
      {title}
    </Typography>
  )
}

export default SectionTitle

import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  thumbnail: {
    objectFit: "contain",
  },
})

type Props = {
  work: Work
}
type Work = {
  title: string
  slug: string
  description: string
  eyecatch: { file: { url: string } }
}

export const WorkCard: React.FC<Props> = ({ work }: Props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} id={work.slug}>
      <CardActionArea component={Link} to={work.slug}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={work.eyecatch.file.url}
          title="Contemplative Reptile"
          className={classes.thumbnail}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {work.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {work.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default WorkCard

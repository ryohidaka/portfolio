import React from "react"
import moment from "moment"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  action: {
    height: "100%",
  },
  thumbnail: {
    objectFit: "scale-down",
  },
  media: {
    height: 200,
    width: 345,
  },
})

type Props = {
  post: Post
}

type Post = {
  title: string
  slug: string
  eyecatch?: { file: { url: string } }
  body: any
  createdAt: string
  published_at?: string
  updatedAt: string
  description?: string
}

export const BlogCard: React.FC<Props> = ({ post }: Props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} id={post.slug}>
      <CardActionArea
        component={Link}
        to={`/blog/${post.slug}`}
        className={classes.action}
      >
        {post.eyecatch ? (
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={post.eyecatch.file.url}
            title="Contemplative Reptile"
            className={classes.thumbnail}
          />
        ) : (
          <Skeleton animation="wave" variant="rect" className={classes.media} />
        )}

        <CardContent>
          <Typography color="textSecondary">
            {moment(post.updatedAt).format(`YYYY/MM/DD`)}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BlogCard

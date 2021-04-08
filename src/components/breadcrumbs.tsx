import * as React from "react"
import { Breadcrumbs, Link } from "@material-ui/core"

type Props = {
  crumbs: Crumb[]
}

type Crumb = {
  pathname: string
  crumbLabel: string
}

const Breadcrumb: React.FC<Props> = ({ crumbs }: Props) => {
  return (
    <>
      {crumbs.length > 1 && (
        <Breadcrumbs aria-label="breadcrumb">
          {crumbs.map((crumb: Crumb) => {
            return (
              <Link
                color="inherit"
                key={crumb.pathname}
                href={crumb.pathname}
                itemProp="url"
              >
                {crumb.crumbLabel}
              </Link>
            )
          })}
        </Breadcrumbs>
      )}

    </>
  )
}

export default Breadcrumb

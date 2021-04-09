import React from "react"

type Props = {
  title: string
  id?: string
}

const SectionTitle: React.FC<Props> = ({ title, id }: Props) => {
  return <h1 id={id || ""}>{title}</h1>
}

export default SectionTitle

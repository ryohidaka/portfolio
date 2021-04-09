import React from "react"

type Props = {
  title: string
  id?: string
}

const SectionTitle: React.FC<Props> = ({ title, id }: Props) => {
  return (
    <div className="bio">
      <h1 id={id || ""}>{title}</h1>
    </div>
  )
}

export default SectionTitle

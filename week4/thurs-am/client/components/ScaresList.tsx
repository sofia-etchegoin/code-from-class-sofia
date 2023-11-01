interface Props {
  scares: string[]
}
export default function ScaresList({ scares }: Props) {
  return (
    <section>
      <h2>Roa Scares🕷:</h2>
      <ul>
        {scares.map((scare, i) => (
          <li key={i}>
            <p>{scare}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

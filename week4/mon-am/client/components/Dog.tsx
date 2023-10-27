interface Props {
  name: string
  breed: string
  superpower: string
}

function Dog(props: Props) {
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="dog-name-plate">
          <span className="dog-name">{props.name}</span>
          <span className="dog-breed">{props.breed}</span>
        </div>
        <span className="dog-superpower">{props.superpower}</span>
      </div>
    </div>
  )
}

export default Dog
import './CoreConcept.css'

export default function CoreConcept({image, title, description}) { // Props
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
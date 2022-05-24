import uniqid from 'uniqid'
import './Skills.css'

const Skills = (props) => {
  if (!props.skills.length) return null

  return (
    <section className='section skills' id={props.title.toLowerCase() + '-skills'}>
      <h2 className='section__title'>{props.title} Skills</h2>
      <ul className='skills__list'>
        {props.skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills

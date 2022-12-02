import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IndividualProject from './IndividualProject'
import { useSelectedProjectValue, useProjectsValue } from '../context'

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue)
  const { setSelectedProject } = useSelectedProjectValue()
  const { projects } = useProjectsValue()

  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-testid="project-action"
        data-doc-id={project.docId}
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onClick={() => {
          setActive(project.projectId)
          setSelectedProject(project.projectId)
        }}
        onKeyDown={() => {
          setActive(project.projectId)
          setSelectedProject(project.projectId)
        }}
      >
        <IndividualProject project={project} />
      </li>
    ))
  )
}

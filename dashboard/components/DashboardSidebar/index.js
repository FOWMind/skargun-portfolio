import styled from 'styled-components'
import {
  AiOutlineUnorderedList,
  AiFillEdit,
  AiFillDelete,
} from 'react-icons/ai'
import { IoAdd } from 'react-icons/io5'

export default function DashboardSidebar({
  sectionState: { workSection, activeSection, setActiveSection },
}) {
  const onSidebarButtonClick = ({ tag }) => {
    setActiveSection(tag)
  }

  return (
    <Sidebar>
      <SidebarTitle>Dashboard</SidebarTitle>
      <SidebarButtons>
        <SidebarButton
          active={activeSection === workSection.view}
          onClick={() => onSidebarButtonClick({ tag: workSection.view })}
        >
          <AiOutlineUnorderedList /> Ver trabajos
        </SidebarButton>
        <SidebarButton
          active={activeSection === workSection.add}
          onClick={() => onSidebarButtonClick({ tag: workSection.add })}
        >
          <IoAdd />
          Agregar trabajo
        </SidebarButton>
        <SidebarButton
          active={activeSection === workSection.edit}
          onClick={() => onSidebarButtonClick({ tag: workSection.edit })}
        >
          <AiFillEdit />
          Editar trabajo
        </SidebarButton>
        <SidebarButton
          active={activeSection === workSection.delete}
          onClick={() => onSidebarButtonClick({ tag: workSection.delete })}
        >
          <AiFillDelete />
          Eliminar trabajo
        </SidebarButton>
      </SidebarButtons>
    </Sidebar>
  )
}

const Sidebar = styled.aside`
  background-color: #fff;
  padding: 2rem;

  @media screen and (min-width: 800px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 25ch;
    height: 100vh;
    overflow: auto;
  }
`

const SidebarTitle = styled.h1`
  color: #181616;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  padding-top: 0.5rem;
`

const SidebarButtons = styled.div`
  margin-top: 5rem;
`

const SidebarButton = styled.button`
  outline: 2px solid transparent;
  border: none;
  border-radius: 10px;
  width: 100%;
  display: block;
  text-align: left;
  margin: 0 auto 1rem auto;
  padding: 0.75rem 1rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  background: ${({ active }) => (active ? '#000' : 'none')};
  color: ${({ active }) => (active ? '#fff' : '#908F8F')};
  cursor: pointer;

  ${({ active }) =>
    !active &&
    `
    &:hover {
      background-color: #eee;
    }
  `}

  & > svg {
    vertical-align: middle;
    margin-right: 0.5rem;
  }
`

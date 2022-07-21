// Components
import Label from './Label'
import Tooltip from './Tooltip'
import EditableList from './EditableList'

export default function FormEditableList({ label, tooltip, ...props }) {
  return (
    <div>
      {label && (
        <Label>
          {label}
          {tooltip && <Tooltip tooltip={tooltip} />}
        </Label>
      )}

      <EditableList
        listEmptyText={'No has agregado ningún elemento.'}
        {...props}
      />
    </div>
  )
}

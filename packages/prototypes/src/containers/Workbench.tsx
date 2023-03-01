import { defineComponent } from 'vue'
import { observer } from '@formily/reactive-vue'
import { useWorkbench } from '../hooks'
import { Workspace } from './Workspace'

const WrokbenchComponent = defineComponent({
  name: 'Workbench',
  setup(props, { slots }) {
    const workbench = useWorkbench()
    return () => {
      return (
        <Workspace id={workbench.value.currentWorkspace?.id}>
          {slots.default?.()}
        </Workspace>
      )
    }
  },
})

export const Workbench = observer(WrokbenchComponent)

// import React from 'react'
// import { observer } from '@formily/reactive-react'
// import { useWorkbench } from '../hooks'
// import { Workspace } from './Workspace'

// export const Workbench: React.FC = observer((props) => {
//   const workbench = useWorkbench()
//   return (
//     <Workspace id={workbench.currentWorkspace?.id}>{props.children}</Workspace>
//   )
// })

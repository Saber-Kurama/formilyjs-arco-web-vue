import { computed, defineComponent, provide, Ref, ref, unref, watch } from 'vue'
import { Workspace as WorkspaceType } from '@designable/core'
import { WorkspaceSymbol } from '../context'
import { useDesigner } from '../hooks'
import { IWorkspaceContext } from '../types'

export const Workspace = defineComponent({
  name: 'Workspace',
  props: {
    id: String,
    title: String,
    description: String,
  },
  setup(props, { slots }) {
    const oldId = ref<string>()
    const designerRef = useDesigner()
    const workspaceRef: Ref<IWorkspaceContext> = ref(
      {} as unknown as IWorkspaceContext
    )
    // memo [id, designer]
    // const workspace = computed(() => {
    //   const designer = unref(designerRef)
    //   if (!designer) return
    //   if (oldId.value && oldId.value !== props.id) {
    //     const old = designer.workbench.findWorkspaceById(oldId.value)
    //     if (old) old.viewport.detachEvents()
    //   }
    //   const workspace = {
    //     id: props.id || 'index',
    //     title: props.title,
    //     description: props.description,
    //   }
    //   designer.workbench.ensureWorkspace(workspace)
    //   oldId.value = workspace.id
    //   return workspace
    // })
    watch(
      [() => props.id, designerRef],
      () => {
        const designer = unref(designerRef)
        if (!designer) return
        if (oldId.value && oldId.value !== props.id) {
          const old = designer.workbench.findWorkspaceById(oldId.value)
          if (old) old.viewport.detachEvents()
        }
        const workspace: IWorkspaceContext = {
          id: props.id || 'index',
          title: props.title,
          description: props.description,
        }
        designer.workbench.ensureWorkspace(workspace)
        oldId.value = workspace.id
        workspaceRef.value = workspace
      },
      {
        immediate: true,
      }
    )
    provide(WorkspaceSymbol, workspaceRef)

    return () => {
      return <>{slots.default?.()}</>
    }
  },
})
// import React, { useMemo, useRef, Fragment } from 'react'
// import { useDesigner } from '../hooks'
// import { WorkspaceContext } from '../context'
// export interface IWorkspaceProps {
//   id?: string
//   title?: string
//   description?: string
// }

// export const Workspace: React.FC<IWorkspaceProps> = ({
//   id,
//   title,
//   description,
//   ...props
// }) => {
//   const oldId = useRef<string>()
//   const designer = useDesigner()
//   const workspace = useMemo(() => {
//     if (!designer) return
//     if (oldId.current && oldId.current !== id) {
//       const old = designer.workbench.findWorkspaceById(oldId.current)
//       if (old) old.viewport.detachEvents()
//     }
//     const workspace = {
//       id: id || 'index',
//       title,
//       description,
//     }
//     designer.workbench.ensureWorkspace(workspace)
//     oldId.current = workspace.id
//     return workspace
//   }, [id, designer])
//   return (
//     <Fragment>
//       <WorkspaceContext.Provider value={workspace}>
//         {props.children}
//       </WorkspaceContext.Provider>
//     </Fragment>
//   )
// }

import { MDBCol } from 'mdb-react-ui-kit'
import React from 'react'
import SubSidebarHeader from '../utils/SubSidebarHeader'
import LevelBoostUI from '../utils/LevelBoostUI'

const SubSidebar = React.memo((props: any) => {
  return (
    <MDBCol md={3} className='sub-sidebar p-0'>
        <SubSidebarHeader />
        <div className='sub-sidebar-inner px-2'>
          <LevelBoostUI />
        </div>
    </MDBCol>
  )
})

export default SubSidebar
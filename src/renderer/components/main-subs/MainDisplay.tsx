import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import SubDisplay from '../server-sub/SubDisplay'
import SubSidebar from '../server-sub/SubSidebar'

const MainDisplay = React.memo((props: any) => {
  return (
    <MDBCol className='main-display bg-warning p-0 h-100'>
        <MDBContainer fluid className='p-0 h-100'>
            <MDBRow className='p-0 m-0 h-100'>
                <SubSidebar />
                <SubDisplay />
            </MDBRow>
        </MDBContainer>
    </MDBCol>
  )
})

export default MainDisplay
import React from 'react'
import { Result, Button } from 'antd'
import { useRouter } from 'next/router'

const FourZeroFour = () => {
    const router = useRouter()
  return (
      <div style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={()=>router.push('/')}>Back Home</Button>}
    />
    </div>
  )
}

export default FourZeroFour
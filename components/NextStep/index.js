import { Row, Col, Typography } from 'antd'
import Link from 'next/link'
import React from 'react'
import Button from '../Button'
// #F8FAFD
const NextStep = (props) => {
    const { title, btnText, link="/create-a-plan", onClick, height="530px" } = props
    const theheight = height === '406px' ? 'lg:h-[406px]' : height === "323px" ? 'lg:h-[323px]' :  'lg:h-[530px]'
  return (
    <div
      className={`w-full gap-y-3 flex flex-col justify-center items-center h-52 ${theheight} mx-auto bg-[#F8FAFD]`}
      >
      <h1 className="w-[95%] py-3 text-lg font-bold lg:text-4xl lg:w-[39%] text-center lg:leading-[3rem]" >{title}</h1>
      <Link href={link}>
        {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
        }
        <Button
        // onClick={onClick}
        size="large" 
        text={btnText} 
        shape="round" 
        className="mybtn highlighted_btn uppercase font-bold text-base" 
        style={{ display: 'flex', fontFamily: 'Inter', justifyConter: 'center', alignItems: 'center', padding: '1rem 1.5rem', height: '50px'}}/>
      </Link>
    </div>
  );
}

export default NextStep
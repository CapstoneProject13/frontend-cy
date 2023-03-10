import React, {useState} from "react";
import "./StartPage.css";
import GDevelopTest from '../components/GDevelopTest';
import LoginBox from "../components/LoginBox";
import SignupBox from "../components/SignupBox";
import CustomizingBox from "../components/CustomizingBox";

function StartPage() {
  const [page_state, setPage] = useState("login");

  let content;
  
  const handlePage = (page) => {
    if (page === "login"){
      
    } 
    else if (page === "signup"){
      setPage("signup");
    }
    else{
      setPage("custom");
    }
  }
  // const testClick = () => {
  //   content = <iframe
  //       title="GDevelop Game"
  //       src="./game/index.html"
  //       width="100%"
  //       height="800px"
  //       frameborder="0"
  //     />
  // }
  if (page_state === "login"){
    content = <LoginBox onPage={handlePage} />
  }
  else if (page_state === "signup"){
    content = <SignupBox onPage={handlePage} />
  }
  else if(page_state === "custom"){
    content = <CustomizingBox onPage={handlePage} />
  }
  else if(page_state === "test"){
    content=<GDevelopTest></GDevelopTest>
    // content = <iframe
    //     title="GDevelop Game"
    //     src="./gdeveloptest/index.html"
    //     width="100%"
    //     height="800px"
    //     frameborder="0"
    //   />
  }
  
  const boxSlide ={
    // transform:num1 === 1 ? 'translateX(100%)' : 'none',
    width:page_state==="custom"?'1500px':'none',
    // position:num2===2?'static':'none',
    // display:num2===2?'inline-block':'flex',
    // margin:num1===2?'26px auto 0px auto':'none',
    // width:num===2?'1500px':'none',
    transition: 'transform 1s ease, width 1s',
  }
  // const style2 ={
  //   width:num2===2?'1500px':'none',
  //   transition: 'width 1s',
  // }
  // const style2={
  //   margi
  // }
  return (
    <div className="Background">
      <div className="WhiteBox" style={boxSlide}>
        {content}
      </div>
    </div>
  );
}

export default StartPage;
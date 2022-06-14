import React,{useState} from "react";
import axios from "axios";
import Forgot from './signin/forgot'
import Change from './signin/changepassword'
import Mainsignin from './signin/mainsignin'

const Signin = () => {
  const [page, setpage] = useState(0);
  const forgot=(page)=> {
 setpage(1);
  }

  const change=(page)=> {
    axios
    .get("https://covid19-updatess.herokuapp.com/verifyuser",{
      headers:{
        "token":localStorage.getItem("token")
      },
    })
    .then((response) => {
     
      setpage(2);
    })
    .catch((error) => {
      console.log(error.message);
      alert("Please Signin first !!!!")
    });
  }
  const prev=() => {
    setpage(0)
  }
 const signincomponent=[<Mainsignin forgot={forgot} change={change}/>,<Forgot prev={prev} />,<Change prev={prev} />]
  return (
   <>
   {signincomponent[page]}
   </>
  );
};

export default Signin;

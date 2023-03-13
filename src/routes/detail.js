import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){

    let {id} = useParams();
    let finder = props.shoes.find( (x)=>{
        return x.id == id
    })
    let [alert, setAlert] = useState(true);

    useEffect( ()=>{
       let a =  setTimeout( ()=>{setAlert(false)},2000)

        return ( )=>{
            clearTimeout(a)    //useEffect실행 전 기존 코드 다 삭제하고 실행하고 싶을 때
        }
    }, [ ] )   //[]실행조건 넣음

    return(
        <div className="container">
            {
                alert == true ? <div className="alert alert-warning" >2초 이내 구매시 할인</div> : null
            }
            
         <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{finder.title}</h4>
                <p>{finder.content}</p>
                <p>{finder.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
         </div>
      </div> 
    )
}

export default Detail ;
import React,{useState}from 'react';
import {useEffect} from 'react'

const Test = (props) => {
    const [data, setdata] = useState(0);
    const [data2, setdata2] = useState(1);
    // const [products, setproducts] = useState(null)
//    useEffect(() => {
//     console.log("useeffect");
//    }, [])
//dependencty array khali thaka mane just mounted
   useEffect(() => {
    console.log("useeffecteeeh",data);
   }, [data])
   useEffect(() => {
    console.log("useeffect hi",data2);
   }, [data2])
   useEffect(() => {
    console.log("useeffect hello",data);
   }, [data])
    
    function increaseFunc(){
        setdata(data+3)
    }
    const [text, settext] = useState()
    useEffect(() => {
      console.log("ki obstha mama")
      console.log("ki khbr");
      document.title=`${data} is found`
    }, [text,data])
    useEffect(() => {
        console.log("ki obstha mama")
       
        document.title=`${data} is found`
      }, [text])
    // const [date, setdate] = useState(new Date())
    // const tick=()=>{
    //     setdate(new Date())
    // }
    // useEffect(() => {
    //   setInterval(() =>tick, 1000);
    // }, [])
//     useEffect(() => {
            
//         console.log("dummy")
// fetch('https://dummyjson.com/products/1')

// .then(res => res.json())
// .then(console.log())
// .then(res => setproducts(res))

// // .then(console.log)
            
    
//     }, [])
    // useEffect(() => {
    //     console.log("hi",products)
     
    // }, [products])
    
    
    
    return (
        <div className='text-5xl'>
            <button  onClick={increaseFunc}>
                increase +

            </button>

            {data}
            <button onClick={()=>{
                setdata(data-1)
            }}>
                decrease -


            </button>
            <p >
                {text}
                
                <input type="text" value={text} onChange={
                    (e)=>{
                        settext(e.target.value)
                    }
                } />
               
            </p>
            {/* <div>
            <p>{products.id}</p>
            <p>{products.title}</p>
           </div> */}
        </div>
    );
}

export default Test;

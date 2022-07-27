//user side show flow charts of certain category

import { useState, useEffect } from "react"
import { getFlows, getFlow } from "./apiHelper";
import { withRouter } from "react-router-dom";
import './card.css';
const Showflow1 = (props) => {
    const [flowcharts, setFlowcharts] = useState(false)
    const [currentFlowChart, setCurrentFlowChart] = useState(false)
    const init = () => {
        getFlows().then(data => {
            if (data.error) {
                console.log("error occured")
            } else {
                setFlowcharts(data)
            }
        })
    };
    useEffect(() => {
        init();

    }, []);
    const handleClick = (e) => {

        getFlow(e.target.value).then(data => {
            if (data.error) {
                console.log("error occured")
            } else {
                setCurrentFlowChart(data)
                console.log(currentFlowChart)
                props.history.push(`/leaderboard/${data._id}`)
            }
            //  console.log(e.target.value)
            //console.log("clicked ")
        })
    }
    const refreshPage = () => {
        window.location.reload(false);
      }

      const goBack = () => (
        <div  style={{marginLeft:'80%'}}>
            {/* <br></br> */}
            <button className="text-white" style={{ border: '2px solid black', backgroundColor: 'black', color: '#001233', textDecoration: 'none', padding: '10px' }} onClick={refreshPage}>Go Back</button>
        </div>
    );


    return (
        <div style={{height:'1000px'}}>
          
            <h2 style={{ marginLeft: '20%', color: 'black' ,fontWeight:'bolder'}}>Select a Flowchart</h2>

            {goBack()}
          
            {/* {JSON.stringify(props.flow)} */}
            <div style={{ display: 'flex',flexWrap: 'wrap',marginLeft:'80px' }} >
                {
                    props.flow && props.flow.map((fc, i) => {

                        return (<div key={i} style={{margin:'50px'}}>

<div className="cards-list">
                                    <div class="card 3">
                                        <div class="card_image">
                                            <img  style ={{backgroundColor: '#E4BCFE'}}src="https://media1.giphy.com/media/veOuvpRopgi8w0qZL9/giphy.gif?cid=790b76110cad0a93128f073275dc8536ddec9e7d86993d08&rid=giphy.gif&ct=s  " />
                                        </div>
                                        <div class="card_title">
                                            <button type="submit" key={i} value={fc._id} onClick={(e) => handleClick(e)} >
                                                🚀{fc.name}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        </div>)
                    })
                }
                {/* {currentFlowChart && JSON.stringify(currentFlowChart)} */}
            </div>
        </div >
    )
}
export default withRouter(Showflow1)
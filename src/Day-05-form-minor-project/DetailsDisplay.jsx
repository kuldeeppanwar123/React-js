import { useEffect } from "react";

function DetailsDisplay ({setFormData, ...prop}) {
  useEffect(() => {
    console.log({prop})
  })
  return (
    <>
    <div style={{borderTop: '1px solid black'}}>
       <p style={{fontWeight:'bold', marginLeft: '5rem'}}>Filled details</p>
       <div style={{display:"grid", gridTemplateColumns:"3fr 1fr"}}>
          <div style={{ display:"flex", flexDirection:'column', rowGap:'5px', marginLeft: '10px'}}>
            {
              Object.entries(prop).map(([key, value]) => (
                <div style={{display: 'grid', gridTemplateColumns: '8rem 1fr', gap: '30px'}} key={key}>
                  <div style={{textAlign: 'right', alignSelf: 'start'}}>{key} :</div>
                  <div>{value}</div>
                </div>
              ))
            }
          </div>
          <div style={{display:'flex', justifyContent: 'center'}}>
            <button style={{height: '2rem', width: '5rem'}} onClick={() => (setFormData(prop))}>edit</button>
          </div>
       </div>
    </div>

    </>
  )
}

export default DetailsDisplay;
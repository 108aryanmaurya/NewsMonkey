
import loading from './loading.gif'
 function Spinner() {

    return (
      <div className='text-center'>
        <img src={loading} style={{width:"50px",background:"none"}} alt="loading" />
      </div>
    )
  }

export default Spinner
import { useNavigate } from 'react-router-dom';
import '../Style/style.css'
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
export const Navhead = (props) => {
    const nav = useNavigate()
    const cuser = useSelector(x => x.currentUser)
    const manager = useSelector(x => x.Manager)
    const { set } = props
    const pa = () => {
        debugger
        if(cuser.mail){
        set(false) 
        nav(`Personalyaera`) } 
        else swal(`נכשל`,"עליך להירשם למערכת","error")     
    }
    const flogin = () => {
        nav(`/Login`)
    }
    const fsingin = () => {
        nav(`/Singin`)
    }
    
    
    const nameorm = () => {
        if(cuser.mail===manager.mail)
        return true
        return false
          }
    return <>
        <div className={'navhead'}>
            <button className='btnregist' onClick={flogin}>התחברות</button>
            <button className='btnregist' onClick={fsingin}>הרשמה</button>
            <button className='btnpersonal' onClick={() => pa()}>👤</button>
             {!nameorm()&&<label className='a' >{cuser.name}</label>}
            {nameorm()&&<label className='a' >מנהל/ת</label>}
        </div>
    </>
}
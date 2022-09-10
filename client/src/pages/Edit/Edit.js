import React, { useEffect } from 'react';
import { useForm, create } from "../../utilities/database.js";
import { useParams, useNavigate } from "react-router";
import './Edit.scss';

const Edit = () => {
    const [form, setForm, updateForm] = useForm({
        name: "",
        position: "",
        level: "",
        records: [],
    })
    
    const params = useParams();
    const navigate = useNavigate();
 
    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL || "http://localhost:5000"}/review/${params.id.toString()}`);
        
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
        
            const record = await response.json();
                if (!record) {
                window.alert(`Record with id ${id} not found`);
                navigate("/");
                return;
            }
        
            setForm(record);
        }
        
        fetchData();
        
        return;
   // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id, navigate]);
    
  return (
  <div className="Edit" data-testid="Edit">
    <h1>Editing {form.name}</h1>
     <form onSubmit={(e) => {
        e.preventDefault();
        const editedPerson = {
            name: form.name,
            position: form.position,
            level: form.level,
        };
        create(editedPerson, `/review/update/${params.id}`)
        navigate("/simpleread/");
     }}>
       <div className="form-group">
         <label htmlFor="name">Name</label><br></br>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Position</label><br></br>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="Intern"
             checked={form.level === "Intern"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">Intern</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="Junior"
             checked={form.level === "Junior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">Junior</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="Senior"
             checked={form.level === "Senior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionSenior" className="form-check-label">Senior</label>
         </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Edit person"
           className="btn btn-primary"
         />
       </div>
     </form>
  </div>
);}

export default Edit;

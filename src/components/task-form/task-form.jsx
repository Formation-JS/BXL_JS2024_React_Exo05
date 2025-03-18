import { useRef, useState, useId } from "react";
import style from './task-form.module.css';

export default function TaskForm({ onTaskSubmit = () => { } }) {

    // Id accessibilité
    const inputId = useId();

    // State (Composant controlé)
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [prio, setPrio] = useState('normal');

    // Ref (Acces imperatif au DOM)
    const inputName = useRef();

    // Submit du form
    const handleSubmit = (event) => {
        // Désactivation du comportement par defaut    
        event.preventDefault();

        // Déclancher l'event du composant
        onTaskSubmit({
            name,
            desc,
            prio
        });

        // Reset du form
        setName('');
        setDesc('');
        setPrio('normal');

        // Manipulation du focus
        console.log(inputName.current);
        inputName.current.focus();
    };

    return (
        <form className={style['task-form']} onSubmit={handleSubmit}>
            <div>
                <label htmlFor={inputId + '-name'}>Nom : </label>
                <br />
                <input id={inputId + '-name'} type="text"
                    ref={inputName} /* Lien entre la "ref" et l'input */
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor={inputId + '-desc'}>Description : </label>
                <br />
                <textarea id={inputId + '-desc'}
                    value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div>
                <label htmlFor={inputId + '-prio'}>Priorité </label>
                <br />
                <select id={inputId + '-prio'}
                    value={prio} onChange={(e) => setPrio(e.target.value)}>
                    <option value="low">Basse</option>
                    <option value="normal">Normal</option>
                    <option value="high">Haute</option>
                </select>
            </div>
            <div>
                <button type="submit">Valider</button>
            </div>
        </form>
    );
}
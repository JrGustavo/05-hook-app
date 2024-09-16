import {useForm} from "../hooks/useForm.js";


export const FormWithCustomHook = () => {

    const { onInputChange, username, email, onResetForm,  password} = useForm({
        username: '',
        email: '',
        password: '',
    })

    return  (

        <>
            <h1>Formulario con Custom Hook</h1>
            <hr/>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}

            />

            <input
                type="Email"
                className="form-control mt-2"
                placeholder="joen@google.com"
                name="email"
                value={email}
                onChange={onInputChange}

            />
            <input
                type="Password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2 ">Borrar</button>


        </>


    )

}

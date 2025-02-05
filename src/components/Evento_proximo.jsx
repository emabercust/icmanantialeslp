import React, { useState } from "react";
import axios from "axios";
import "./../assets/styles/Evento_proximo.css";
import evento_imagen from "../assets/images/evento1.jpeg"; // Imagen del banner

const Evento_proximo = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        monto_pagado: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(""); // Limpia errores al modificar un campo

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validación básica
        if (!formData.nombre || !formData.correo ) {
            setError("Por favor, completa todos los campos.");
            return;
        }
       // if (isNaN(formData.monto_pagado) || formData.monto_pagado <= 0) {
        //    setError("El monto pagado debe ser un número válido mayor a 0.");
         //   return;
        //}

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/personas/", formData);
            setSuccess("Registro exitoso.");
            setFormData({
                nombre: "",
                correo: "",
          //      monto_pagado: "",
            });
        } catch (error) {
            setError("Ocurrió un error al registrar la persona. Intenta nuevamente.");
            console.error("Error al registrar la persona:", error);
        }
    };



    return (
        <section className="evento_imagen" style={{ backgroundImage: `url(${evento_imagen})` }}>
            <div className="form-container">
                <h1>Registro al Campamento</h1>

                <form onSubmit={handleSubmit} className="form">
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}

                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        id="nombre"
                        name="nombre"
                        placeholder="Ingresa tu nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="correo">Correo Electrónico:</label>
                    <input
                        id="correo"
                        name="correo"
                        type="email"
                        placeholder="Ingresa tu correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                    />

                {/* <label htmlFor="pago">Monto Pagado:</label>
                    <input
                    id="pago"
                    name="monto_pagado"
                    type="number"
                    placeholder="Ingresa el monto pagado"
                    value={formData.monto_pagado}
                    onChange={handleChange}
                    required
                     />
                */}

                    <button type="submit" className="btn-submit">
                        Registrar</button>
                </form>
       <br></br>
                <p>Luego de registrarte acercate a la sede a realizar el pago</p>
            </div>
        </section>

    );
};

export default Evento_proximo;

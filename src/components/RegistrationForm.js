import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Alert } from "react-bootstrap";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <Alert variant="success">Registro exitoso!</Alert>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              id="firstName"
              name="firstName"
              {...register("firstName", { required: "" })}
            />
            {errors.firstName && <span>Este campo es requerido</span>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              id="lastName"
              name="lastName"
              {...register("lastName", { required: "" })}
            />
            {errors.lastName && <span>Este campo es requerido</span>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              {...register("email", { required: "Este campo es requerido" })}
            />
            {errors.email && <span>Este campo es requerido</span>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              id="password"
              name="password"
              {...register("password", { required: "Este campo es requerido" })}
            />
            {errors.password && <span>Este campo es requerido</span>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              {...register("confirmPassword", { required: "Este campo es requerido" })}
            />
            {errors.confirmPassword && <span>Este campo es requerido</span>}
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3 mb-3">
            Registrarse
          </Button>
        </Form>
      )}
    </div>
  );
}

export default RegistrationForm;
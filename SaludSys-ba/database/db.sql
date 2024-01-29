CREATE DATABASE sys;

CREATE TABLE role(
    id_r SERIAL PRIMARY KEY,
    r_nombre TEXT NOT NULL UNIQUE
);

CREATE TABLE usuario(
    id_u SERIAL PRIMARY KEY,
    u_tipo_doc TEXT NOT NULL,
    u_doc TEXT NOT NULL UNIQUE,
    u_password TEXT NOT NULL,
    u_token TEXT UNIQUE,
    r_id INTEGER REFERENCES role(id_r)
);

CREATE TABLE paciente (
    id_p SERIAL PRIMARY KEY,
    p_nombre TEXT NOT NULL,
    p_apellidos TEXT NOT NULL,
    p_fecha_nacimiento TEXT NOT NULL,
    p_genero TEXT NOT NULL,
    p_direccion TEXT NOT NULL,
    p_celular  TEXT NOT NULL,
    p_gmail TEXT NOT NULL,
    u_id INTEGER REFERENCES usuario(id_u)
);

CREATE TABLE personal_medico(
    id_pm SERIAL PRIMARY KEY,
    pm_nombre TEXT NOT NULL,
    pm_apellidos TEXT NOT NULL,
    pm_foto TEXT,
    pm_especializacion TEXT NOT NULL,
    pm_celular TEXT NOT NULL,
    pm_email TEXT NOT NULL,
    pm_horario_trabajo TEXT NOT NULL,
    u_id INTEGER REFERENCES usuario(id_u)
);

CREATE TABLE citas_medicas (
    id_cm SERIAL PRIMARY KEY,
    p_id INTEGER REFERENCES paciente(id_p),
    pm_id INTEGER REFERENCES personal_medico(id_pm),
    cm_fecha_cita TEXT NOT NULL,
    cm_hora_cita TEXT NOT NULL,
    cm_estado TEXT NOT NULL
);

CREATE TABLE historial_medico(
    id_hm SERIAL PRIMARY KEY,
    p_id INTEGER REFERENCES paciente(id_p),
    pm_id INTEGER REFERENCES personal_medico(id_pm),
    hm_fecha_consulta TEXT NOT NULL,
    hm_diagnostico TEXT NOT NULL,
    hm_tratamiento TEXT NOT NULL
);

CREATE TABLE faturas_pagos(
    id_fp SERIAL PRIMARY KEY,
    p_id INTEGER REFERENCES paciente(id_p),
    fp_fecha_pago TEXT NOT NULL,
    fp_monto TEXT NOT NULL,
    fp_estado_pago TEXT NOT NULL
);

CREATE TABLE medicamentos(
    id_m SERIAL PRIMARY KEY,
    m_nombre TEXT NOT NULL,
    m_descripcion TEXT NOT NULL,
    m_img TEXT,
    m_precio_unit TEXT NOT NULL
);

CREATE TABLE pedidos_farmacia(
    id_pf SERIAL PRIMARY KEY,
    p_id INTEGER REFERENCES paciente(id_p),
    pf_fecha_pedido TEXT NOT NULL,
    pf_estado TEXT NOT NULL
);

INSERT INTO role (r_nombre) VALUES ('Administrador');
INSERT INTO role (r_nombre) VALUES ('Paciente');
INSERT INTO role (r_nombre) VALUES ('Personal medico');
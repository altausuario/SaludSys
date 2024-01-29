const bcrypt = require('bcrypt');
const pool = require('../database/keys');

const authentication = {};

const getRoleId = async (roleName) => {
    const result = await pool.query('SELECT id_r FROM role WHERE r_nombre=$1', [roleName]);
    return result.rows[0]?.id_r;
};

const getUserId = async () => {
    const result = await pool.query('SELECT id_u FROM usuario ORDER BY id_u DESC LIMIT 1');
    return result.rows[0]?.id_u;
};

const insertUser = async (tipo, doc, hashedPassword, roleId) => {
    await pool.query('INSERT INTO usuario (u_tipo_doc, u_doc, u_password, r_id) VALUES ($1, $2, $3, $4)', [tipo, doc, hashedPassword, roleId]);
};

//PACIENTE
const insertPatient = async (nombre, apellidos, fecha_nacimiento, genero, direccion, celular, email, userId) => {
    await pool.query('INSERT INTO paciente (p_nombre, p_apellidos, p_fecha_nacimiento, p_genero, p_direccion, p_celular, p_gmail, u_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [nombre, apellidos, fecha_nacimiento, genero, direccion, celular, email, userId]);
};

const handleSignUp = async (req, res, role) => {
    const { tipo, doc, password, nombre, apellidos, fecha_nacimiento, genero, direccion, celular, email } = req.body;

    try {
        const roleId = await getRoleId(role);
        const hashedPassword = await bcrypt.hash(password, 10);

        await insertUser(tipo, doc, hashedPassword, roleId);

        const userId = await getUserId();

        await insertPatient(nombre, apellidos, fecha_nacimiento, genero, direccion, celular, email, userId);

        res.status(200).json({
            message: 'Usuario registrado con éxito',
            [role.toLowerCase()]: { doc, email }
        });
    } catch (error) {
        const errorMessage = error.constraint === 'usuario_u_doc_key' ? 'Ya existe un usuario registardo con este documento' : 'Ha ocurrido un error';
        res.status(500).json({
            message: errorMessage,
            error
        });
    }
};

authentication.signUpPa = async (req, res) => {
    await handleSignUp(req, res, 'Paciente');
};

authentication.signIn = async (req, res) => {
    const { tipo, doc, password } = req.body;

    try {
        const usuario = await (await pool.query('SELECT * FROM usuario JOIN (SELECT * FROM role) AS r ON r_id=id_r JOIN (SELECT * FROM paciente ) AS p ON id_u=u_id WHERE u_tipo_doc=$1 AND u_doc=$2', [tipo, doc])).rows;

        if (usuario.length > 0) {
            const passwordMatch = await bcrypt.compare(password, usuario[0].u_password);

            if (passwordMatch) {
                res.status(200).json({
                    id: usuario[0].id_u,
                    nombre: usuario[0].p_nombre,
                    apellidos: usuario[0].p_apellidos,
                    email: usuario[0].p_gmail,
                    role: usuario[0].r_nombre
                });
            } else {
                res.status(401).json({
                    message: 'Documento o contraseña incorrectos',
                    Unauthorized: true
                });
            }
        } else {
            res.status(404).json({
                message: 'El usuario no existe',
                NotFound: true
            });
        }

    } catch (error) {
        res.status(500).json({
            message: 'Ha ocurrido un error',
            error
        });
    }
};

//PERSONAL MEDICO
const insertMedicalStaff = async (nombre, apellidos, filename, especializacion, cel, email, horario, userId) => {
    await pool.query('INSERT INTO personal_medico (pm_nombre, pm_apellidos, pm_foto, pm_especializacion, pm_celular, pm_email, pm_horario_trabajo, u_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [nombre, apellidos, filename, especializacion, cel, email, horario, userId]);
};

const medicalStaff = async (req, res) => {
    const { tipo, doc, password, role, nombre, apellidos, especializacion, cel, email, horario } = req.body;
    const { filename } = req.file;
    console.log(filename);
    try {
        const roleId = await getRoleId(role);
        const hashedPassword = await bcrypt.hash(password, 10);

        await insertUser(tipo, doc, hashedPassword, roleId);
        const userId = await getUserId();

        await insertMedicalStaff(nombre, apellidos, filename, especializacion, cel, email, horario, userId);

        res.status(200).json({
            message: 'Usuario registrado con éxito',
            [role.toLowerCase()]: { doc, email }
        });
    } catch (error) {
        const errorMessage = error.constraint === 'usuario_u_doc_key' ? 'Ya existe un usuario registrado con este documento' : 'Ha ocurrido un error';
        res.status(500).json({
            message: errorMessage,
            error
        });
    }
};

authentication.singUpMe = async (req, res) => {
    await medicalStaff(req, res);
}; 

module.exports = authentication;

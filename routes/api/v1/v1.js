const express = require('express');
const router = express.Router();
const { VerifyApiHeaderToken } = require('./headerVerifyMiddleware');

const { passport, jwtMiddleware } = require('./seguridad/jwtHelper');
//const middlewares = require('./headerVerifyMiddleware');


const pacientesRoutes = require('./pacientes/pacientes');
const expedientesRoutes = require('./expedientes/expedientes');
const seguridadRoutes = require('./seguridad/seguridad');

router.use(passport.initialize());

router.use('/seguridad', VerifyApiHeaderToken, seguridadRoutes);
//middlewares
router.use(
    '/pacientes',
    VerifyApiHeaderToken,
    jwtMiddleware,
    pacientesRoutes
);


router.use('/pacientes', VerifyApiHeaderToken, pacientesRoutes);
router.use('/expedientes', VerifyApiHeaderToken, expedientesRoutes);
module.exports = router;
const express = require('express');
const router = express.Router();
const { VerifyApiHeaderToken } = require('./headerVerifyMiddleware');
//const middlewares = require('./headerVerifyMiddleware');
const pacientesRoutes = require('./pacientes/pacientes');
const expedientesRoutes = require('./expedientes/expedientes');
//middlewares
router.use('/pacientes', VerifyApiHeaderToken, pacientesRoutes);
router.use('/expedientes', VerifyApiHeaderToken, expedientesRoutes);
module.exports = router;
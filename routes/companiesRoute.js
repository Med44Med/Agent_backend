const express = require('express')
const companies = require('../controller/companies')

const router = express.Router();
router.get('/', companies.getCompaniesByPage);
// router.get('/:id', companies.getCompanyById);
// router.get('/search/:name', companies.getCompanyByName);
// router.get('/search/:location', companies.getCompanyByLocation);
// router.post('/create', companies.createCompany);
// router.put('/update/:id', companies.updateCompany);
// router.delete('/delete/:id', companies.deleteCompany);


module.exports = router;

const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');

router.post('/signup', (request, response) => {
    console.log(request.body)
    const signedUpUser = new signUpTemplateCopy({
        email:request.body.email,
        password:request.body.password
    });
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
});

module.exports = router;
const express = require('express');
const app = express();

const superheroes = require('superheroes');
const supervillains = require('supervillains');

//foreachinga kõik supervillain'id
supervillains.all.forEach(element => {
    console.log('Supervillain', element);

    
});
//kuvab koguarvu supervillainitest
console.log(supervillains.all.length);


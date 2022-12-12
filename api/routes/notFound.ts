import express from 'express';
import { notFound } from '../controllers/notFound';
const router = express.Router();

router
    .all('/', (req, res) => {
        res.redirect('/v1')
    }).all('/:anything', notFound as any )
    .all('/:anything/:anything', notFound as any )
    .all('/:anything/:anything/:anything', notFound as any )
    .all('/v1/:anything', (req, res) => {
        res.redirect('/v1')
    });

router
    .all('/v1', notFound as any)

export default router;
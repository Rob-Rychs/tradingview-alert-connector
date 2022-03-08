import express, { Router } from 'express';
import createOrder from '../services/createOrder';
import getOrder from '../services/getOrder';
import config = require('config');

const router: Router = express.Router();

router.get('/', async (req, res) => {
	// const orderResult = await createOrder();
	// res.send(orderResult);
	// TODO: add interval timer
	// const result = await getOrder(orderResult.order.id);
	// res.send(result);
	// console.log(req)
});

router.post('/', async (req, res) => {
	// console.log(req.header);
	console.log('Recieve strategy alert:', req.body);

	const orderResult = await createOrder(req.body);

	res.send(orderResult);
});

export default router;

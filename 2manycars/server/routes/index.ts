import { Router } from 'express';
import offerRide from './offer-ride';

const routes = Router();

routes.use('/offer-ride', offerRide);

export default routes;
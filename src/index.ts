import { Hono } from 'hono'
import { IndexController } from '@/controllers/Index.controller';
import { SignupController } from '@/controllers/Signup.controller';

const app = new Hono();

app.get('/', IndexController.index);
app.post('/signup', SignupController.signup);

export default app
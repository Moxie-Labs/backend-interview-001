import { Hono } from 'hono'
import { IndexController } from '@/controllers/Index.controller';
import { SignupController } from '@/controllers/Signup.controller';

// Initialize models
import '@/models/Users.model';
import '@/models/TodoLists.model';
import '@/models/TodoItems.model';

const app = new Hono();

app.get('/', IndexController.index);
app.post('/signup', SignupController.signup);

export default app
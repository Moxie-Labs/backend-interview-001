import { Hono } from 'hono'
import { IndexController } from '@/controllers/Index.controller';
import { SignupController } from '@/controllers/Signup.controller';
import { TodoListsController } from '@/controllers/TodoLists.controller';

// Initialize models
import '@/models/Users.model';
import '@/models/TodoLists.model';
import '@/models/TodoItems.model';

const app = new Hono();

app.get('/', IndexController.index);
app.post('/signup', SignupController.signup);
app.get('/lists', TodoListsController.get);
app.post('/lists', TodoListsController.create);

export default app
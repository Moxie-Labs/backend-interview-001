import { Hono } from 'hono'
import { IndexController } from '@/controllers/Index.controller';
import { SignupController } from '@/controllers/Signup.controller';
import { LoginController } from '@/controllers/Login.controller';
import { TodoListsController } from '@/controllers/TodoLists.controller';
import { TodoItemsController } from '@/controllers/TodoItems.controller';

// Initialize models
import '@/models/Users.model';
import '@/models/TodoLists.model';
import '@/models/TodoItems.model';

const app = new Hono();

// Index
app.get('/', IndexController.index);

// Signup
app.post('/signup', SignupController.signup);

// Login
app.post('/login', LoginController.login);

// Lists
app.get('/lists', TodoListsController.get);
app.post('/lists', TodoListsController.create);

// Items
app.get('/lists/:listId/items', TodoItemsController.getItemsByListId);
app.post('/lists/:listId/items', TodoItemsController.create);
app.put('/lists/:listId/items/:itemId', TodoItemsController.updateItem);
app.delete('/lists/:listId/items/:itemId', TodoItemsController.deleteItem);

export default app
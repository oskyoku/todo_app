import serviceAxios from "../util/axios";

export async function getTodos() {
    return await serviceAxios.get('/todos');
};

export async function addTodo(data) {
    await serviceAxios.post('/todos', data);
};

export async function updateTodo(data, id) {
    await serviceAxios.put('/todos/'+id, data);
};

export async function deleteTodo(id) {
    await serviceAxios.delete('/todos/'+id);
}
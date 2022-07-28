export default class Todos {
  constructor() {
    this.todos = [
      {
        title: "Изучить Solidity",
        category: "работа"
      },
      {
        title: "Продлить Netflix",
        category: "личное"
      }
    ];
  }

  getAll() {
    return this.todos;
  } // Возвращает список задач

  getCount() {
    return this.todos.length;
  } // Возвращает количество задач

  add(title, category) {
    return this.todos.push({ title, category });
  } // Добавляет новый объект в существующий массив объектов

  getWork() {
    return this.todos.filter((work) => work.category.includes("работа"));
  } // Возвращает массив объектов, содержащий только рабочие задачи

  getWorkCount() {
    return this.getWork().length;
  } // Возвращает количество рабочих задач, использует метод getWork()

  getPersonal() {
    return this.todos.filter((work) => work.category.includes("личное"));
  } // Возвращает массив объектов, содержащий только личные задачи

  getPersonalCount() {
    return this.getPersonal().length;
  } // Возвращает количество личных задач, использует метод getPersonal()
}

// 46 урок

// скобки {} это литерал объекта
// создание объекта с помощью синтаксиса литерала объекта
var a = {
  name: "it-kama",
  protocol: "https",
  maxStudentsCount: 10,
  isOnline: true,
  students: ["ivan", "andrei", "farid"], //массив это четвертый объект
  // второй объект
  classroom: {
    // третий объект
    teatcher: {
      name: "wew",
      age: 18,
    },
  },
};

// поверхностная копия
var b = {
  // ...(спред оператор) три точки это копирование объекта
  // все вложенные объекты НЕ копируются, копируются только ссылки на эти объекты
  ...a,
};

// полная, глубокая копия
b.classroom = { ...a.classroom };
b.classroom.teatcher = { ...a.classroom.teatcher };
b.students =[...a.students]

b.classroom.teatcher.name = "Dima"


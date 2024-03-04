let inputField = document.getElementById("inputField");
let listWrapper = document.getElementById("listItems");
let item = document.createElement("li");
let para = document.createElement("p");
let button = document.createElement("button");
let icon = document.createElement("i");

let tasks = [
  {
    id: 1,
    text: "Buy a coffee",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Buy a coffee cup",
    isCompleted: false,
  },
];

const handleSubmit = (event) => {
  event.preventDefault();

  tasks = [
    ...tasks,
    {
      id: 123,
      text: inputField.value,
      isCompleted: false,
    },
  ];
  para.innerText = inputField.value;
  item.appendChild(para);
  item.appendChild(icon);
  item.appendChild(button);
  listWrapper.appendChild(list);
};

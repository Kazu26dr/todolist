// Todoアイテムのリストを保存する配列
let todoItems = [];

// 新しいTodoアイテムを作成する関数
function createTodoItem(title) {
  return {
    title: title,
    completed: false
  };
}

// Todoアイテムを追加する関数
function addTodoItem(title) {
  todoItems.push(createTodoItem(title));
}

// Todoアイテムを削除する関数
function removeTodoItem(index) {
  todoItems.splice(index, 1);
}

// Todoアイテムを完了済みにする関数
function completeTodoItem(index) {
  todoItems[index].completed = true;
}

// Todoアイテムのリストを表示する関数
function showTodoList() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = ""; // リストをクリアする

  todoItems.forEach(function(item, index) {
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";

    const todoText = document.createElement("span");
    todoText.className = "todo-text";
    todoText.textContent = item.title;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function() {
      removeTodoItem(index);
      showTodoList();
    });

    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  });
}

// フォームの送信イベントを処理する
document.getElementById("todo-form").addEventListener("submit", function(event) {
  event.preventDefault(); // フォームのデフォルトの送信動作をキャンセル

  const todoInput = document.getElementById("todo-input");
  const todoTitle = todoInput.value.trim(); // 入力値を取得して前後の空白をトリム

  if (todoTitle !== "") {
    addTodoItem(todoTitle);
    todoInput.value = ""; // 入力欄をクリア
    showTodoList();
  }
});

// 初期表示時にリストを表示する
showTodoList();


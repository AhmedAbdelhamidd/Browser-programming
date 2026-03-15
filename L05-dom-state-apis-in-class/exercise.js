console.log("JS connected ✅");

// ===================== EXERCISE 1 =====================
const msgInput = document.getElementById("msgInput");
const msgStats = document.getElementById("msgStats");

msgInput.addEventListener("input", function () {
  const len = msgInput.value.length;
  const remaining = 50 - len;
  msgStats.innerText = `Length: ${len} | Remaining: ${remaining}`;

  if (remaining < 10) {
    msgStats.style.color = "red";
  } else {
    msgStats.style.color = "";
  }
});

// ===================== EXERCISE 2 =====================
const itemInput = document.getElementById("itemInput");
const btnAddItem = document.getElementById("btnAddItem");
const btnClearItems = document.getElementById("btnClearItems");
const itemList = document.getElementById("itemList");
const listStats = document.getElementById("listStats");

let nextId = 1;

function updateListStats() {
  const total = itemList.querySelectorAll("li").length;
  const done = itemList.querySelectorAll("li.done").length;
  listStats.innerText = `Items: ${total} | Done: ${done}`;
}

btnAddItem.onclick = function () {
  const text = itemInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.dataset.id = String(nextId);

  const span = document.createElement("span");
  span.textContent = text;

  const btnX = document.createElement("button");
  btnX.textContent = "X";
  btnX.dataset.action = "remove";

  li.appendChild(span);
  li.appendChild(btnX);
  itemList.appendChild(li);

  itemInput.value = "";
  nextId++;
  updateListStats();
};

btnClearItems.onclick = function () {
  itemList.innerHTML = "";
  updateListStats();
};

itemList.onclick = function (e) {
  const li = e.target.closest("li");
  if (!li) return;

  if (e.target.dataset.action === "remove") {
    li.remove();
  } else {
    li.classList.toggle("done");
  }

  updateListStats();
};

updateListStats();

// ===================== EXERCISE 3 =====================
const btnMinus = document.getElementById("btnMinus");
const btnPlus = document.getElementById("btnPlus");
const btnZero = document.getElementById("btnZero");
const countOut = document.getElementById("countOut");
const parityOut = document.getElementById("parityOut");

const counterState = { count: 0 };

function renderCounter() {
  countOut.innerText = `Count: ${counterState.count}`;
  parityOut.innerText = `Parity: ${counterState.count % 2 === 0 ? "EVEN" : "ODD"}`;
}

btnPlus.onclick = function () {
  counterState.count++;
  renderCounter();
};

btnMinus.onclick = function () {
  counterState.count--;
  renderCounter();
};

btnZero.onclick = function () {
  counterState.count = 0;
  renderCounter();
};

renderCounter();

// ===================== EXERCISE 4 =====================
const btnAddApple = document.getElementById("btnAddApple");
const btnAddBanana = document.getElementById
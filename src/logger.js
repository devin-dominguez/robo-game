const logContainer = document.createElement('pre');
document.body.appendChild(logContainer);

const addLine = string => {
  logContainer.innerText += "\n" + string;
};

const clear = () => {
  logContainer.innerText = '';
};

export default {
  addLine,
  clear
};

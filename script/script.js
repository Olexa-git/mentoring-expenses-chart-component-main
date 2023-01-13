const spending_graph = document.getElementById('spending_graph');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');
xhr.responseType = 'json';
xhr.onload = function() {
  const res = xhr.response;
  spending_graph.innerHTML = '';
  let count = 1;
  let amoumt_list = [];
  for (const item of res) {
      amoumt_list.push(item.amount);
      spending_graph.appendChild(spending_item_content(item.day, item.amount, count))
      count+=1;
  };
  const largest_colum = Math.max(...amoumt_list);
  let list_colum_height = [];
  for (const item of res) {
    list_colum_height.push(Math.round(160/largest_colum*item.amount));
  }
  let colum_list = document.querySelectorAll(".spending_colum");
  count = 0
  for (const item of colum_list) {
    if (list_colum_height[count] == 160) {
      item.style.height = "160px";
      item.style.backgroundColor = "hsl(186, 34%, 60%)";
    } else {
      item.style.height = list_colum_height[count].toString()+'px';
      item.style.backgroundColor = "hsl(10, 79%, 65%)";
    }
    count+=1
  }
};
xhr.send();

function spending_item_content (day, amount, count) {
  const template = document.createElement('template');
  let sp_item = `<li class="spending_item">
          <div class="spending_busket">
            <p class="spending_usd_sum">$${amount}</p>
            <div class="spending_colum" id="spending_colum"></div>
          </div>
          <p class="spending_week_day">${day}</p>
        </li>`
  template.innerHTML = sp_item;
  return template.content;
}

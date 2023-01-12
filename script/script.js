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
  console.log(amoumt_list);
  console.log(amoumt_list[0]+amoumt_list[1]);
  console.log(Math.max(...amoumt_list));
};
xhr.send();

function spending_item_content (day, amount, count) {
  const template = document.createElement('template');
  let sp_item = `<li class="spending_item">
          <div class="spending_busket">
            <p class="spending_usd_sum">$${amount}</p>
            <div class="spending_colum_${count}"></div>
          </div>
          <p class="spending_week_day">${day}</p>
        </li>`
  template.innerHTML = sp_item;
  return template.content;
}

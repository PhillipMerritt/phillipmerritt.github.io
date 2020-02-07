/*
<script src="js/vendor/modernizr-3.8.0.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.4.1.min.js"><\/script>')</script>
 */

function genGraph(){
    const node_count = parseInt(document.getElementById("hardNodesBox").value);
    const refreshes = parseInt(document.getElementById("refreshesBox").value);
    const node_cost = parseInt(document.getElementById("costBox").value);
    const cur_lvl = parseInt(document.getElementById("lvlBox").value);
    const goal_lvl = parseInt(document.getElementById("goalBox").value);
    let cur_shards = parseInt(document.getElementById("shardBox").value);
    const daily_energy = 375 + 120 * 3;
    const daily_cost = node_count * node_cost * (5 * (1 + refreshes));
    const daily_attempts = Math.floor(((daily_energy > daily_cost) ? daily_cost : daily_energy) / node_cost);
    const shards_plvl = [10, 15, 25, 30, 65, 85, 100];
    const total_shards_plvl = [10, 25, 50, 80, 145, 230, 330];
  
    for(let i=0; i<cur_lvl; i++){
      cur_shards += shards_plvl[i];
    }
  
    const req_shards = total_shards_plvl[goal_lvl - 1] - cur_shards;
  
    document.getElementById("neededText").textContent = 'Total shards needed: ' + req_shards;
    document.getElementById("attemptsText").textContent = 'Daily attempts: ' + daily_attempts;
  
    const drop_rate = 1.0/3.0;
    const mean = req_shards * Math.round(1 / drop_rate);
    const x = [];
    const y = [];
    let r_fact;
    let ptor;
    if(req_shards<170){
      r_fact = 1;
      for(let i=1; i<req_shards; i++) {
        r_fact *= i;
      }
  
      ptor = Math.pow(drop_rate,req_shards);
    } else {
      r_fact = 0;
      for (let i = 1; i < req_shards; i++) {
        r_fact += Math.log(i);
      }
  
      ptor = Math.log(Math.pow(drop_rate,req_shards));
    }

    let scalar;
    let prob;
    let mean_prob;
    let max_prob = 0;
    for(let n=req_shards; n < 2*mean - req_shards; n++) {
      x.push(n/daily_attempts);
  
      if(req_shards < 170){
        scalar = ptor * Math.pow(1 - drop_rate, n - req_shards);
        prob = choose(n-1,req_shards-1,r_fact, scalar);
      }else{
        scalar = ptor + Math.log(Math.pow(1 - drop_rate, n - req_shards));
        prob = log_choose(n-1,req_shards-1,r_fact, scalar);
      }
      
      if(n === mean){
        mean_prob = prob;
      }
      if(prob > max_prob) {
        max_prob = prob
      }
      y.push(prob);
    }
  
    let graph = document.getElementById('farmGraph');
  
    const layout = {
      margin: { t: 0 },
      title: 'Days until ' + goal_lvl + ' stars',
      xaxis: {
        title: 'Days'
      },
      yaxis: {
        showline: false,
        showgrid: false,
        showticklabels: false,
        title: 'Probability'
      },
      shapes: [
        {
          type: 'line',
          x0: mean / daily_attempts,
          y0: 0,
          x1: mean / daily_attempts,
          y1: max_prob,
          line: {
            color: 'rgb(128, 0, 128)',
            width: 4,
            dash: 'dot'
          }
        }
      ],
      annotations: [
        {
          x: mean / daily_attempts,
          y: mean_prob,
          xref: 'x',
          yref: 'y',
          text: 'mean',
          showarrow: true,
          arrowhead: 7,
          ax: 40,
          ay: -40,
          arrowhead: 0
        }
      ]
    };
  
    Plotly.newPlot( graph, [{
      x: x,
      y: y}],
      layout);
  
  
  }
  
  function choose(n, r, r_fact, scalar) {
    let total = scalar;
    for(let i=1+n-r; i <= n; i++){
      total *= i;
    }
    //console.log(n + 'C' + r + ': ' + r_fact);
    return total / r_fact;
  }
  function log_choose(n, r, r_fact, scalar) {
    let total = scalar;
    /*for(let i=1+n-r; i <= n; i++){
      total *= i;
    }*/
    //console.log(Math.log(r_fact));
    total += (log_fact(n) - (r_fact + log_fact(n-r)));
    //console.log(n + 'C' + r + ': ' + r_fact);
    return total;
  }
  
  function log_fact(n){
    let total = 0;
    for(let i=1; i<=n; i++){
      total += Math.log(i);
    }
    return total;
  }
  